const withImages = require('next-images')
module.exports = withImages({})
const withTM = require("next-transpile-modules");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: [
          "react-syntax-highlighter",
        ]
      }
    ]
  ]
),

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Unset client-side javascript that only works server-side
      // https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
      config.node = { fs: 'empty', module: 'empty' }
    }

    return config
  },
}