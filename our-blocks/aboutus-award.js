import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow, ToggleControl } from "@wordpress/components";
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element";
import { RichText, BlockControls } from "@wordpress/block-editor"

registerBlockType("ourblocktheme/aboutus-award", {
  title: "About us - award",
  supports: {
    align: ["full"],
  },
  attributes: {
    align: { type: "string", default: "full" },
    title: { type: "string" },
    // text: { type: "string" }
    content: { type: "string" },
    isList: { type: 'boolean', default: false, },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {

  function handleTitleChange(x) {
    props.setAttributes({ title: x })
  }

  // function handleTextChange(x) {
  //   props.setAttributes({ text: x })
  // }

  function onChangeContent(x) {
    console.log('newContent ' + x)
    props.setAttributes({ content: x })
  };

  const toggleList = () => {
    props.setAttributes({ isList: !isList });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="List Settings">
          <ToggleControl
            label="Enable List"
            checked={props.attributes.isList}
            onChange={toggleList}
          />
        </PanelBody>
      </InspectorControls>
      <div className="alkf_career_section alkf_career_sec_7 reveal">
        <div className="text pd_top277">
          <div className="perks_title">
            <RichText tagName="p" value={props.attributes.title} onChange={handleTitleChange} placeholder="Title here"/>
          </div>
          <div className="perks_desc">
            <RichText tagName="p" multiline="br" value={props.attributes.content} onChange={onChangeContent} placeholder="Text here"/>
          </div>
        </div>
      </div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
