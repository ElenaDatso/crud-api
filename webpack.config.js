/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  target: 'node',
  entry: './src/index.ts', // Измените на .ts, если ваш основной файл написан на TypeScript
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // Добавьте правила для обработки файлов TypeScript
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // Укажите расширения файлов для обработки
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externalsPresets: { node: true },
  externals: [/node_modules/],
  mode: 'development',
  devtool: 'inline-source-map',
};
