/**
 * Created by fzq on 2020/7/21.
 */
module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 750, // (Number) The width of the viewport.
      viewportHeight: 1334, // (Number) The height of the viewport.
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: "vw", // (String) Expected units.
      selectorBlackList: [".ignore", ".hairlines"], // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
      mediaQuery: false // (Boolean) Allow px to be converted in media queries.
    },
    "postcss-viewport-units": {
      filterRule: rule => rule.nodes.findIndex(i => i.prop === "content") === -1
    }
  }
};
