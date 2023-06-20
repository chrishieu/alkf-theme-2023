import apiFetch from "@wordpress/api-fetch";
import { registerBlockType } from "@wordpress/blocks";
import { MediaUpload, MediaUploadCheck, InnerBlocks, InspectorControls } from "@wordpress/block-editor";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import { useEffect } from "@wordpress/element";

registerBlockType("ourblocktheme/singleproject-big-img-popup", {
  title: "Project Detail - 1 col, 1 popup, popup big 1",
  category: "common",
  supports: {
    align: ["full"],
  },
  attributes: {
    imgID: { type: "number" },
    imgURL: { type: "string", default: people.base_url + 'asset/image/home-hero.jpg' },
  },
  edit: (props) => {

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
        <PanelBody title="Image" initialOpen={true}>
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
      <div class="popup_image prd_sc2">
        <div class="alkf_project_detail_banner sh_775 reveal hover_mouse">
          <img src={`${props.attributes.imgURL}`} />
        </div>
        <button class="apply_career apply_pop" data-id="pop_index_1">
          <span class="btn-plus-pop"></span>
        </button>
      </div>
    </>
    );
  },
  save: () => {
    return <InnerBlocks.Content />;
  }, // No output in the frontend
});
