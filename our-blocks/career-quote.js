import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element";
import { RichText, BlockControls } from "@wordpress/block-editor"

registerBlockType("ourblocktheme/career-quote", {
  title: "Career - Quote",
  supports: {
    align: ["full"],
  },
  attributes: {
    align: { type: "string", default: "full" },
    title: { type: "string" },
    quoteDesktop: { type: "string" },
    quoteAuthor: { type: "string" },
    imgID: { type: "number" },
    imgURL: { type: "string", default: people.base_url + 'asset/image/home-hero.jpg' },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {

  function handleQuoteDesktopChange(x) {
    props.setAttributes({ quoteDesktop: x })
  }

  function handleQuoteAuthorChange(x) {
    props.setAttributes({ quoteAuthor: x })
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
        <PanelBody title="Quote Image" initialOpen={true}>
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
      <div className="alkf_career_section alkf_career_sec_2 reveal">
					<div className="alkf_career_about pd_bot277">
						<div className="alkf_career_about_img text">
              <img src={`${props.attributes.imgURL}`} alt="" />
						</div>
						<div className="alkf_career_about_contents text">
							<div className="alkf_career_main_contents">
                <RichText tagName="p" className="hide_on_mobile" value={props.attributes.quoteDesktop} onChange={handleQuoteDesktopChange} placeholder="Quote on desktop here"/>
							</div>
							<div className="alkf_career_name pd_top120 text">
                <RichText tagName="p" className="hide_on_mobile" value={props.attributes.quoteAuthor} onChange={handleQuoteAuthorChange} placeholder="Author of Quote here"/>
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
