module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: "node-loader",
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: "@marshallofsound/webpack-asset-relocator-loader",
      options: {
        outputAssetBase: "native_modules",
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: "ts-loader",
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    test: /\.less$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
      },
      {
        loader: "less-loader",
        options: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    ],
  },
  {
    test: /\.module\.less$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
      },
      {
        loader: "less-loader",
        options: {
          modules: true,
          sourceMap: true,
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    ],
  },
];
