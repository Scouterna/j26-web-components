// PostCSS configuration to disable the postcss-combine-media-query plugin
// that's automatically loaded by stencil-tailwind-plugin.
// See https://github.com/Poimen/stencil-tailwind-plugin/issues/40
module.exports = {
  plugins: [
    require("postcss-combine-duplicated-selectors")({
      removeDuplicatedValues: true,
    }),
    require("cssnano")(),
  ],
};
