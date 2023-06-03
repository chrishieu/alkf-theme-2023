wp.blocks.registerBlockType("ourblocktheme/all-blog", {
  title: "All - Blog",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "All Blog Placeholder")
  },
  save: function () {
    return null
  }
})
