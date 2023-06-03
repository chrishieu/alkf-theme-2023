import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow, SelectControl } from "@wordpress/components";
import { RichText, InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element";

registerBlockType("ourblocktheme/herowrapper", {
  title: "Hero Wrapper",
  supports: {
    align: ["full"],
  },
  attributes: {
    align: { type: "string", default: "full" },
    imgID: { type: "number" },
    imgURL: { type: "string", default: herowrapper.fallbackimage },
    slogan: { type: "string", default: "" },
    year: { type: "string", default: "" },
    size: { type: "string", default: "small" }
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
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

  function onChangeYear(x) {
    props.setAttributes({ year: x })
  }

  function onChangeSlogan(x) {
    props.setAttributes({ slogan: x })
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
      <div class="heroWrapper">
        <div class="hero-wrap section-pri">
          <div class="hero-top">
            <RichText tagName="h1" placeholder="Slogan" value={props.attributes.slogan} onChange={onChangeSlogan} className="title-h1 hero-title"/>
            <RichText tagName="div" placeholder="Year" value={props.attributes.year} onChange={onChangeYear} className="hero-year"/>
          </div>
          <div class="hero-img">
            <img class="heroImg" src={`${props.attributes.imgURL}`} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
