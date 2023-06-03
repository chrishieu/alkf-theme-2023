wp.blocks.registerBlockType("ourblocktheme/taxonomy-project", {
  title: "Taxonomy for Project",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Taxonomy Project Placeholder")
  },
  save: function () {
    return null
  }
})
