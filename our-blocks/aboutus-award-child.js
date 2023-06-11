import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow, ToggleControl } from "@wordpress/components";
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element";
import { RichText, BlockControls } from "@wordpress/block-editor"

registerBlockType("ourblocktheme/aboutus-award-child", {
  title: "About us - award child",
  supports: {
    align: ["full"],
  },
  attributes: {
    align: { type: "string", default: "full" },
    title: { type: "string" },
    text: { type: "string" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {

  function handleTitleChange(x) {
    props.setAttributes({ title: x })
  }

  function handleTextChange(x) {
    props.setAttributes({ text: x })
  }

  return (
    <>
      <div class="awards_position">
				<div class="postion_year">
          <RichText tagName="p" value={props.attributes.title} onChange={handleTitleChange} placeholder="Title here"/>
				</div>
				<div class="postion_name">
          <RichText tagName="p" multiline="p" value={props.attributes.text} onChange={handleTextChange} placeholder="Text here"/>
				</div>
			</div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
