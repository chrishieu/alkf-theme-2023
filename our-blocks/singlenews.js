wp.blocks.registerBlockType("ourblocktheme/singlenews", {
  title: "Single News",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Single News Placeholder")
  },
  save: function () {
    return null
  }
})
