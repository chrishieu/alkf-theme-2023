wp.blocks.registerBlockType("ourblocktheme/singleproject", {
  title: "Single Project",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Single Project Placeholder")
  },
  save: function () {
    return null
  }
})
