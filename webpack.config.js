module.exports = {
    module: {
      rules: [
        {
          test: /\.(glb|gltf)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192, // File size limit to inline, larger files will fall back to file-loader
                outputPath: 'assets/models/',
                name: '[name].[hash].[ext]', // This keeps your output organized
              },
            },
          ],
        },
        // Other rules...
      ],
    },
    // Other configurations...
  };
  