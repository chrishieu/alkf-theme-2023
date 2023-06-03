wp.blocks.registerBlockType("ourblocktheme/insight-award", {
  title: "Insight - Award",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Insight Award Placeholder")
  },
  save: function () {
    return null
  }
})
