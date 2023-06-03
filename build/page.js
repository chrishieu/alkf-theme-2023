/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./our-blocks/page.js ***!
  \****************************/
wp.blocks.registerBlockType("ourblocktheme/page", {
  title: "ALKF Page",
  edit: function () {
    return wp.element.createElement("div", {
      className: "our-placeholder-block"
    }, "Single Page Placeholder");
  },
  save: function () {
    return null;
  }
});
/******/ })()
;
//# sourceMappingURL=page.js.map