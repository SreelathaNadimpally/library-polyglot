const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');

module.exports = {
  rollup(config, options) {
    config.plugins = config.plugins.map((plugin) => {
      if (plugin.name === 'postcss') {
        // Add any necessary PostCSS plugins here.
        plugin.options.plugins.unshift(postcssImport, autoprefixer);
      }
      return plugin;
    });

    return config;
  },
};
