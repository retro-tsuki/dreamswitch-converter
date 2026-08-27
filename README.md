日本語は英語表記の下にあります。

# dreamswitch-converter
This tool converts existing video files into "JMV" files—the media format used by Sega's "Dream Switch" series. Supported file formats include .mpe, .mpeg, .ogm, .mkv, .mpg, .wmv, .webm, .ogv, .mov, .m4v, .asx, .mp4, and .avi.
Additionally, as this tool utilizes FFmpeg, it is recommended to convert files that are 30 seconds or less in duration and 20 MB or less in size. (Conversion is possible for larger files, but it will take longer.)
You can monitor details such as the frame count via the developer tools console during the conversion process.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# dreamswitch-converter
このツールは、既存の動画ファイルを、セガの「ドリームスイッチ（Dream Switch）」シリーズで使用されるメディア形式である「JMV」ファイルに変換します。対応しているファイル形式は、.mpe、.mpeg、.ogm、 .mkv、.mpg、.wmv、.webm、.ogv、.mov、.m4v、.asx、.mp4、および .avi です。
なお、本ツールは FFmpeg を利用しているため、変換対象のファイルは「再生時間 30 秒以内、かつファイルサイズ 20 MB 以内」に抑えることを推奨します（これより大きなファイルも変換可能ですが、処理に時間がかかります）。
変換処理中は、開発者ツールのコンソールからフレーム数などの詳細情報を確認できます。

# React + TypeScript + Vite

このテンプレートは、Vite 上で HMR（Hot Module Replacement）や一部の ESLint ルールを適用し、React を動作させるための最小限の構成を提供します。

現在、以下の 2 つの公式プラグインが利用可能です。

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react): [Oxc](https://oxc.rs) 
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc): [SWC](https://swc.rs/) 

## React Compiler

React Compiler は、開発およびビルドのパフォーマンスに影響を与えるため、このテンプレートでは有効化されていません。導入方法については、[this documentation](https://react.dev/learn/react-compiler/installation)を参照してください。

## ESLint 設定の拡張

本番環境向けのアプリケーションを開発する場合は、型情報を考慮した lint ルールを有効にするよう設定を更新することをお勧めします。

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

また、React 固有の lint ルールを適用するために、[eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) や [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) をインストールすることも可能です。

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
