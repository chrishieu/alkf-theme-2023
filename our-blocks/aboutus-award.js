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
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {

  function handleTitleChange(x) {
    props.setAttributes({ title: x })
  }

  return (
    <>
      <div className="alkf_aboutUs_section alkf_aboutUs_sec_5 reveal">
        <div className="alkf_aboutUs_our_awards">
          <div className="alkf_aboutUs_subtitle">
            <RichText tagName="p" value={props.attributes.title} onChange={handleTitleChange} placeholder="Title here"/>
          </div>
          <div className="alkf_aboutUs_main_contents">
            <InnerBlocks
              template={[ ['ourblocktheme/aboutus-award-child'] ]}
              allowedBlocks={['ourblocktheme/aboutus-award-child']}
              // templateLock={false}
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
