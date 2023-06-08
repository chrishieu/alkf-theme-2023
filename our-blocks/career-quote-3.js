import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element";
import { RichText, BlockControls } from "@wordpress/block-editor"

registerBlockType("ourblocktheme/career-quote-3", {
  title: "Career - Quote 3",
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
    txt1: { type: "string" },
    num1: { type: "string" },
    txt2: { type: "string" },
    num2: { type: "string" },
    txt3: { type: "string" },
    num3: { type: "string" },
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

  function handleTxt1Change(x) {
    props.setAttributes({ txt1: x })
  }

  function handleNum1Change(x) {
    props.setAttributes({ num1: x })
  }

  function handleTxt2Change(x) {
    props.setAttributes({ txt2: x })
  }

  function handleNum2Change(x) {
    props.setAttributes({ num2: x })
  }

  function handleTxt3Change(x) {
    props.setAttributes({ txt3: x })
  }

  function handleNum3Change(x) {
    props.setAttributes({ num3: x })
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
      <div class="alkf_mobile_text_4 alkf_career_section alkf_career_sec_4 reveal">
        <div class="alkf_career_about pd_bot277 text">
          <div class="alkf_career_about_contents">
            <div class="alkf_career_strategies">
              <div class="strategies_title">
                <RichText tagName="p" value={props.attributes.title} onChange={handleTitleChange} placeholder="Title here"/>
              </div>
              <div class="strategies_des pd_bot48">
                <RichText tagName="p" value={props.attributes.quote1} onChange={handleQuote1Change} placeholder="Text here"/>
              </div>
            </div>
            <div class="alkf_career_about_img hide_on_desktop">
              <img src={`${props.attributes.imgURL}`} alt="" />
            </div>
            <div class="alkf_career_main_contents alkf_career_main_strategies pd_top48">
              <RichText tagName="p" value={props.attributes.quote2} onChange={handleQuote2Change} placeholder="Text here"/>
            </div>
            <div class="alkf_career_name pd_top120">
              <RichText tagName="p" value={props.attributes.quoteAuthor} onChange={handleQuoteAuthorChange} placeholder="Author of quote here"/>
            </div>
          </div>
          <div class="alkf_career_about_img hide_on_mobile">
            <img src={`${props.attributes.imgURL}`} alt="" />
          </div>
        </div>
        <div class="vision-row text">
          <div class="col-4">
            <div class="vision-item">
              <RichText tagName="div" className="number" value={props.attributes.num1} onChange={handleNum1Change} placeholder="Number"/>
              <RichText tagName="div" className="txt" value={props.attributes.txt1} onChange={handleTxt1Change} placeholder="Text"/>
              <img class="line" src={`${people.base_url + '/asset/image/line-curve.png'}`} alt="" />
            </div>
          </div>
          <div class="col-4">
            <div class="vision-item">
              <RichText tagName="div" className="number" value={props.attributes.num2} onChange={handleNum2Change} placeholder="Number"/>
              <RichText tagName="div" className="txt" value={props.attributes.txt2} onChange={handleTxt2Change} placeholder="Text"/>
              <img class="line" src={`${people.base_url + '/asset/image/line-curve.png'}`} alt="" />
            </div>
          </div>
          <div class="col-4">
            <div class="vision-item">
              <RichText tagName="div" className="number" value={props.attributes.num3} onChange={handleNum3Change} placeholder="Number"/>
              <RichText tagName="div" className="txt" value={props.attributes.txt3} onChange={handleTxt3Change} placeholder="Text"/>
              <img class="line" src={`${people.base_url + '/asset/image/line-curve.png'}`} alt="" />
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
