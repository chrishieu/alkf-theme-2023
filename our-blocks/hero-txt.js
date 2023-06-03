import { registerBlockType } from "@wordpress/blocks";
import { RichText, InnerBlocks } from "@wordpress/block-editor"
registerBlockType("ourblocktheme/hero-txt", {
  title: "Hero Text",
  attributes: {
    align: { type: "string", default: "full" },
    headline: { type: "string", default: "" },
    text: { type: "string", default: "" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {

  function handleHeadlineChange(x) {
    props.setAttributes({ headline: x })
  }

  function handleTextChange(x) {
    props.setAttributes({ text: x })
  }

  return (
    <div className="admin-hero-txt">
      <RichText tagName="div" className="big" value={props.attributes.headline} onChange={handleHeadlineChange} placeholder="Headline"/>
      <RichText tagName="div" className="small" value={props.attributes.text} onChange={handleTextChange} placeholder="Text"/>
    </div>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
