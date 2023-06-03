wp.blocks.registerBlockType("ourblocktheme/all-award", {
  title: "All - Award",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "All Award Placeholder")
  },
  save: function () {
    return null
  }
})
