import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element";
import { RichText, BlockControls } from "@wordpress/block-editor"

registerBlockType("ourblocktheme/career-quote-2", {
  title: "Career - Quote 2",
  supports: {
    align: ["full"],
  },
  attributes: {
    align: { type: "string", default: "full" },
    title: { type: "string" },
    quote1: { type: "string" },
    quote2: { type: "string" },
    quoteAuthor: { type: "string" },
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

  function handleQuote1Change(x) {
    props.setAttributes({ quote1: x })
  }

  function handleQuote2Change(x) {
    props.setAttributes({ quote2: x })
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
      <div className="alkf_mobile_text_5 alkf_career_section alkf_career_sec_5 reveal">
        <div className="alkf_career_about pd_bot277 text">
          <div className="alkf_career_about_img text hide_on_mobile">
            <img src={`${props.attributes.imgURL}`} alt="" />
          </div>
          <div className="alkf_career_about_contents">
            <div className="alkf_career_strategies">
              <div className="strategies_title people_diff_title">
                <RichText tagName="p" value={props.attributes.title} onChange={handleTitleChange} placeholder="Title here"/>
              </div>
              <div className="strategies_des pd_bot48 ">
                <RichText tagName="p" value={props.attributes.quote1} onChange={handleQuote1Change} placeholder="Text here"/>
              </div>
            </div>
            <div className="alkf_career_about_img text hide_on_desktop">
              <img src="./asset/image/career/founder-2.jpg" />
            </div>
            <div className="alkf_career_main_contents alkf_career_people_contents  pd_top48 ">
              <RichText tagName="p" value={props.attributes.quote2} onChange={handleQuote2Change} placeholder="Text here"/>
            </div>
            <div className="alkf_career_name pd_top120 ">
              <RichText tagName="p" value={props.attributes.quoteAuthor} onChange={handleQuoteAuthorChange} placeholder="Author of quote  here"/>
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
