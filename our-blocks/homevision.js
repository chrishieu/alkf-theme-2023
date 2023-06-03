import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element";
import { RichText, BlockControls } from "@wordpress/block-editor"

registerBlockType("ourblocktheme/homevision", {
  title: "Our Vision",
  supports: {
    align: ["full"],
  },
  attributes: {
    align: { type: "string", default: "full" },
    title: { type: "string", default: "" },
    number1: { type: "string", default: "" },
		txt1: { type: "string", default: "" },
		number2: { type: "string", default: "" },
		txt2: { type: "string", default: "" },
		number3: { type: "string", default: "" },
		txt3: { type: "string", default: "" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {

  function handleTitleChange(x) {
    props.setAttributes({ title: x })
  }

  function handleNumber1Change(x) {
    props.setAttributes({ number1: x })
  }

	function handleTxt1Change(x) {
    props.setAttributes({ txt1: x })
  }

	function handleNumber2Change(x) {
    props.setAttributes({ number2: x })
  }

	function handleTxt2Change(x) {
    props.setAttributes({ txt2: x })
  }

	function handleNumber3Change(x) {
    props.setAttributes({ number3: x })
  }

	function handleTxt3Change(x) {
    props.setAttributes({ txt3: x })
  }

  return (
    <section className="vision scrollTrigger">
			<div className="container">
				<div className="vision-wrap section-pri">
					<h2 className="title-h2 vision-title">
						<span className="align-underline">
							<RichText value={props.attributes.title} onChange={handleTitleChange} placeholder="Title here"/>
							<img className="line" src={`${homevision.line_home9}`} alt="" />
						</span>
					</h2>
					<div className="vision-subtitle">
						We create prosperity
						<span className="align-underline">
							with heritage buildings
							<img className="line" src={`${homevision.line_home4}`} alt="" />
						</span>
					</div>
					<div className="vision-row">
						<div className="col-4">
							<div className="vision-item">
								<RichText tagName="div" className="number" value={props.attributes.number1} onChange={handleNumber1Change} placeholder="Number here"/>
								<RichText tagName="div" className="txt" value={props.attributes.txt1} onChange={handleTxt1Change} placeholder="Text here"/>
								<img className="line" src={`${homevision.line_curve}`} alt="" />
							</div>
						</div>
						<div className="col-4">
							<div className="vision-item">
								<RichText tagName="div" className="number" value={props.attributes.number2} onChange={handleNumber2Change} placeholder="Number here"/>
								<RichText tagName="div" className="txt" value={props.attributes.txt2} onChange={handleTxt2Change} placeholder="Text here"/>
								<img className="line" src={`${homevision.line_curve}`} alt="" />
							</div>
						</div>
						<div className="col-4">
							<div className="vision-item">
								<RichText tagName="div" className="number" value={props.attributes.number3} onChange={handleNumber3Change} placeholder="Number here"/>
								<RichText tagName="div" className="txt" value={props.attributes.txt3} onChange={handleTxt3Change} placeholder="Text here"/>
								<img className="line" src={`${homevision.line_curve}`} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
