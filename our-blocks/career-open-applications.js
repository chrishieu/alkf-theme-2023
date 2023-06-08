wp.blocks.registerBlockType("ourblocktheme/career-open-applications", {
  title: "Career - Open Applications",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Open Applications Placeholder")
  },
  save: function () {
    return null
  }
})
