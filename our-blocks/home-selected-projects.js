wp.blocks.registerBlockType("ourblocktheme/home-selected-projects", {
  title: "Home - Selected Projects",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Selected Projects Placeholder")
  },
  save: function () {
    return null
  }
})
