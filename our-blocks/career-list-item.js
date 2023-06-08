import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow, ToggleControl } from "@wordpress/components";
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element";
import { RichText, BlockControls } from "@wordpress/block-editor"

registerBlockType("ourblocktheme/career-list-item", {
  title: "Career - List Item",
  supports: {
    align: ["full"],
  },
  attributes: {
    align: { type: "string", default: "full" },
    title: { type: "string" },
    content: { type: "string" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {

  function handleTitleChange(x) {
    props.setAttributes({ title: x })
  }

  function onChangeContent(x) {
    props.setAttributes({ content: x })
  };


  return (
    <>
      <div className="alkf_career_section alkf_career_sec_7 reveal">
        <div className="text pd_top277">
          <div className="perks_title">
            <RichText tagName="p" value={props.attributes.title} onChange={handleTitleChange} placeholder="Title here"/>
          </div>
          <div className="perks_desc">
            <RichText
              tagName="ul"
              multiline="li"
              placeholder="Enter your list items"
              value={props.attributes.content}
              onChange={onChangeContent}
              allowedFormats={['core/list']}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
