wp.blocks.registerBlockType("ourblocktheme/aboutus", {
  title: "About us",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "About us Placeholder")
  },
  save: function () {
    return null
  }
})
