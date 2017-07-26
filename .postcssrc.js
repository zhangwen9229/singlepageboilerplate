// https://github.com/michael-ciniawsky/postcss-load-config
var config = require('./config')

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      "production": [
        ">5%", "ie 9"
      ],
      // "development": ["last 1 version"]
    },
    // "postcss-plugin-px2rem": config.px2remOptions,
    "postcss-px2rem": config.post_px2rem
  }
}
