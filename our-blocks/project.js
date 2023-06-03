wp.blocks.registerBlockType("ourblocktheme/project", {
  title: "Projects",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Projects Placeholder")
  },
  save: function () {
    return null
  }
})
