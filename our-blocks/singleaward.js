wp.blocks.registerBlockType("ourblocktheme/singleaward", {
  title: "Single Award",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Single Award Placeholder")
  },
  save: function () {
    return null
  }
})
