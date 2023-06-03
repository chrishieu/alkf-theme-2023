wp.blocks.registerBlockType("ourblocktheme/contact", {
  title: "Contact Form",
  edit: function () {
    return wp.element.createElement("div", { className: "our-placeholder-block" }, "Contact Form Placeholder")
  },
  save: function () {
    return null
  }
})
