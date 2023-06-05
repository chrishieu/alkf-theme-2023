import { PanelBody, SelectControl } from "@wordpress/components";
import { createElement } from "@wordpress/element";

wp.blocks.registerBlockType("ourblocktheme/insight-grid-post", {
  title: "Insight - Grid Posts",
  attributes: {
    dropdownValue: {
      type: "string",
      default: "option1",
    },
  },
  edit: function ({ attributes, setAttributes }) {
    const { dropdownValue } = attributes;
    const onChangeDropdown = (newValue) => {
      setAttributes({ dropdownValue: newValue });
    };

    const dropdownOptions = [
      { value: "news", label: "News" },
      { value: "award", label: "Award" },
      { value: "blog", label: "Blog" },
    ];

    const inspectorControls = createElement(
      PanelBody,
      { title: "Block Settings" },
      createElement(SelectControl, {
        label: "Insight Type",
        value: dropdownValue,
        options: dropdownOptions,
        onChange: onChangeDropdown,
      })
    );

    return [
      createElement(
        "div",
        { className: "our-placeholder-block" },
        "Insight Swiper Posts Placeholder"
      ),
      inspectorControls
    ];
  },
  save: function () {
    return null
  }
})

