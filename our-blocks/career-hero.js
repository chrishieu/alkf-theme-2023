import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element";
import { RichText, BlockControls } from "@wordpress/block-editor"

registerBlockType("ourblocktheme/career-hero", {
  title: "Career - Hero",
  supports: {
    align: ["full"],
  },
  attributes: {
    align: { type: "string", default: "full" },
    title: { type: "string" },
    text: { type: "string" },
    imgID: { type: "number" },
    imgURL: { type: "string", default: people.base_url + 'asset/image/home-hero.jpg' },
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

  useEffect(
    function () {
      if (props.attributes.imgID) {
        async function go() {
          const response = await apiFetch({
            path: `/wp/v2/media/${props.attributes.imgID}`,
            method: "GET",
          });
          props.setAttributes({
            imgURL: response.media_details.sizes.full.source_url,
          });
        }
        go();
      }
    },
    [props.attributes.imgID]
  );

  function onFileSelect(x) {
    props.setAttributes({ imgID: x.id });
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title="Hero Image" initialOpen={true}>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onFileSelect}
                value={props.attributes.imgID}
                render={({ open }) => {
                  return <Button onClick={open}>Choose Image</Button>
                }}
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="alkf_career_section alkf_career_sec_1 reveal">
        <div className="alkf_career_title text">
          <RichText tagName="h1" className="title_h1" value={props.attributes.title} onChange={handleTitleChange} placeholder="Title here"/>
        </div>
        <div className="alkf_career_banner sh_797 pd_bot86 text">
          <img src={`${props.attributes.imgURL}`} alt="" />
        </div>
        <div className="alkf_career_banner_des pd_bot86 text border_bottom">
          <RichText tagName="h2" value={props.attributes.text} onChange={handleTextChange} placeholder="Text here"/>
        </div>
      </div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
