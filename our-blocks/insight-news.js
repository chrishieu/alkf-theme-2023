wp.blocks.registerBlockType("ourblocktheme/insight-news", {
  title: "Insight - News",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Insight News Placeholder")
  },
  save: function () {
    return null
  }
})
