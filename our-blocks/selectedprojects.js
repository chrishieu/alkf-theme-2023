wp.blocks.registerBlockType("ourblocktheme/selectedprojects", {
  title: "Selected Projects",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Selected Projects Placeholder")
  },
  save: function () {
    return null
  }
})
