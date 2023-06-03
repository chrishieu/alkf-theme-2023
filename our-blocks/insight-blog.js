wp.blocks.registerBlockType("ourblocktheme/insight-blog", {
  title: "Insight - Blog",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Insight Blog Placeholder")
  },
  save: function () {
    return null
  }
})
