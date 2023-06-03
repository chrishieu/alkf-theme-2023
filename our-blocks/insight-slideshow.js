import { registerBlockType } from "@wordpress/blocks";
import { RichText, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";
import { createElement } from "@wordpress/element";

wp.blocks.registerBlockType("ourblocktheme/insight-slideshow", {
  title: "Insight - Slideshow",
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
      { value: "project", label: "Project" },
    ];

    const inspectorControls = createElement(
      PanelBody,
      { title: "Block Settings" },
      createElement(SelectControl, {
        label: "Dropdown",
        value: dropdownValue,
        options: dropdownOptions,
        onChange: onChangeDropdown,
      })
    );

    return [
      inspectorControls,
      createElement(
        "div",
        { className: "my-block__content" },
        null
      ),
    ];
  },
  save: function () {
    return null;
  },
});
