wp.blocks.registerBlockType("ourblocktheme/all-news", {
  title: "All - News",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "All News Placeholder")
  },
  save: function () {
    return null
  }
})
