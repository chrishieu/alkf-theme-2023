wp.blocks.registerBlockType("ourblocktheme/career", {
  title: "Career",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Career Placeholder")
  },
  save: function () {
    return null
  }
})
