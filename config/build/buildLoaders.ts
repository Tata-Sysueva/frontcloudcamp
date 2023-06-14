import type webpack from "webpack";

import { type BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  }

  const cssLoader = buildCssLoader(isDev);
   
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff|svg)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }
  
  return [
    typescriptLoader,
    cssLoader,
    svgLoader,
    fileLoader,
  ]
}