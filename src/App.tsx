import { useState } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

const ffmpeg = new FFmpeg();

ffmpeg.on("log", ({ message }) => {
  console.log(message);
});

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("待機中");

  const convert = async () => {
    if (!file) return;

    try {
      setStatus("FFmpeg読み込み中...");
      console.log("load開始");

      await ffmpeg.load();

      console.log("load完了");

      setStatus("変換中...");
      console.log("変換開始");

      await ffmpeg.writeFile(
        "input.mp4",
        await fetchFile(file)
      );

      await ffmpeg.exec([
        "-i",
        "input.mp4",
        "-vf",
        "fps=12,scale=240:135,pad=240:240:0:52:black",
        "-c:v",
        "mjpeg",
        "-q:v",
        "15",
        "-pix_fmt",
        "yuvj420p",
        "-c:a",
        "pcm_s16le",
        "-ar",
        "32000",
        "-ac",
        "1",
        "output.avi",
      ]);

      console.log("変換完了");

      const data = await ffmpeg.readFile("output.avi");

      const blob = new Blob(
        [new Uint8Array(data as Uint8Array)],
        { type: "video/x-msvideo" }
      );

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "output.jmv";
      a.click();

      URL.revokeObjectURL(url);

      setStatus("完了！");
    } catch (err) {
      console.error(err);
      setStatus("エラー");
    }
  };



  return (
    <div style={{ padding: "30px" }}>
      <h1>DreamSwitch Converter</h1>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => {
          setFile(e.target.files?.[0] ?? null);
        }}
      />

      <br />
      <br />

      <button onClick={convert}>
        変換開始
      </button>

      <p>{status}</p>
    </div>
  );
}

export default App;