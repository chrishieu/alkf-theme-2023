import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import {
  RichText,
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element";

registerBlockType("ourblocktheme/singleproject-title-text", {
  title: "Project Detail - Title & text",
  supports: {
    align: ["full"],
  },
  attributes: {
    align: { type: "string", default: "full" },
    text: { type: "string" },
    text2: { type: "string" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  function handleTextChange(x) {
    props.setAttributes({ text: x });
  }

  function handleTextChange2(x) {
    props.setAttributes({ text2: x });
  }

  return (
    <>
      <div class="prd_sc5">
        <div class="alkf_project_detail_tR reveal">
          <RichText
            allowedFormats={["core/bold", "core/italic"]}
            tagName="p"
            value={props.attributes.text}
            onChange={handleTextChange}
            placeholder="Input Title here"
            className={`text`}
          />
        </div>
        <div class="alkf_project_detail_sc reveal">
          <div class="alkf_text_left text">
            <div class="content">
              <RichText
                allowedFormats={["core/bold", "core/italic"]}
                tagName="p"
                multiline="p"
                value={props.attributes.text2}
                onChange={handleTextChange2}
                placeholder="Input Text here"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
