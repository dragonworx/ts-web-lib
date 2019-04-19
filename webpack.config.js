const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "ts-web-lib.js",
        path: __dirname + "/dist",
        library: 'ts-web-lib',
        libraryTarget: 'umd',
    },
    mode: "development",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new TypescriptDeclarationPlugin({
          out: './ts-web-lib.d.ts'
        })
      ]
};