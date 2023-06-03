wp.blocks.registerBlockType("ourblocktheme/singleblog", {
  title: "Single Blog",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Single Blog Placeholder")
  },
  save: function () {
    return null
  }
})
