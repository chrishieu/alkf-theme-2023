import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow, ToggleControl } from "@wordpress/components";
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element";
import { RichText, BlockControls } from "@wordpress/block-editor"

registerBlockType("ourblocktheme/aboutus-hero", {
  title: "About us - hero",
  supports: {
    align: ["full"],
  },
  attributes: {
    align: { type: "string", default: "full" },
    headline: { type: "string" },
    imgID: { type: "number" },
    imgURL: { type: "string", default: people.base_url + 'asset/image/home-hero.jpg' },
    
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {

  function handleHeadlineChange(x) {
    props.setAttributes({ headline: x })
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
      <div className="alkf_aboutUs_section alkf_aboutUs_sec_1 reveal">
        <div className="alkf_aboutUs_title text">
          <RichText tagName="h1" className="title_h1" value={props.attributes.headline} onChange={handleHeadlineChange} placeholder="Headline here"/>
        </div>
        <div className="alkf_aboutUs_banner sh_100img hover_mouse">
          <img src={`${props.attributes.imgURL}`} alt="ALKF+" />
        </div>
      </div>

      <div className="alkf_aboutUs_section alkf_aboutUs_sec_2 reveal">
        <div className="alkf_aboutUs_about text">
          <div className="alkf_aboutUs_subtitle">
            <RichText tagName="p" value={props.attributes.profileTitle} onChange={handleProfileTitleChange} placeholder="Profile title here"/>
          </div>
          <div className="alkf_aboutUs_about_contents text">
            <div className="alkf_aboutUs_main_contents">
              <RichText
                tagName="p"
                multiline="p"
                className="text_hide_mob"
                placeholder="For example: Andrew Lee King Fun & Associates Architects was first established in Hong Kong in 1962 and was incorporated as a limited company in 1998. It is now one of the most innovative and experienced architectural practices in Hong Kong."
                value={props.attributes.profileText}
                onChange={handleProfileTextChange}
                keepPlaceholderOnFocus
                unstableOnSplit={(value) => renderParagraphs(value)}
              />
              <a className="text_show_mob" href="#">Read more</a>
            </div>
          </div>
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
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
