import HTMLWebpackPlugin from'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from'webpack';

import { type BuildOptions } from './types/config';

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyPlugin from 'copy-webpack-plugin';

export function buildPlugins( { paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(
      { analyzerMode: process.env.STATS as 'server' || 'disabled' },
    ),
    new CopyPlugin({
      patterns: [
          { from: paths.assets, to: paths.buildAssets},
      ],
  }),
  ]
}