import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element";
import { RichText, BlockControls } from "@wordpress/block-editor"

registerBlockType("ourblocktheme/quotecareer2", {
  title: "Quote Career 2",
  supports: {
    align: ["full"],
  },
  attributes: {
    align: { type: "string", default: "full" },
    title: { type: "string" },
    quote1: { type: "string" },
    quote2: { type: "string" },
    quoteAuthor: { type: "string" }
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

  return (
    <>
        <div className="alkf_career_section alkf_career_sec_5 reveal">
					<div className="alkf_career_about pd_bot277 text">
						<div className="alkf_career_about_contents">
							<div className="alkf_career_strategies">
								<div className="strategies_title">
                  <RichText tagName="p" value={props.attributes.title} onChange={handleTitleChange} placeholder="Title here"/>
								</div>
								<div className="strategies_des pd_bot48 hide_on_mobile">
                  <RichText tagName="p" value={props.attributes.quote1} onChange={handleQuote1Change} placeholder="Text here"/>
								</div>
							</div>
							<div className="alkf_career_main_contents pd_top48 hide_on_mobile">
                <RichText tagName="p" value={props.attributes.quote2} onChange={handleQuote2Change} placeholder="Text here"/>
							</div>
							<div className="alkf_career_name pd_top120 hide_on_mobile">
                <RichText tagName="p" value={props.attributes.quoteAuthor} onChange={handleQuoteAuthorChange} placeholder="Author of quote here"/>
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
