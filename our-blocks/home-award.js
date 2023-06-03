import { registerBlockType } from "@wordpress/blocks";
import { RichText, InnerBlocks } from "@wordpress/block-editor";
import { createElement } from "@wordpress/element";

registerBlockType("ourblocktheme/home-award", {
  title: "Our award",
  attributes: {
    title: { type: "string", default: "" },
    text: { type: "string", default: "" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  function handleTextChange(x) {
    props.setAttributes({ text: x });
  }

  function handleTitleChange(x) {
    props.setAttributes({ title: x });
  }

  return (
    <>
      <section className="award section-pri scrollTrigger">
        <div className="container">
          <div className="award-wrap">
            <h2 className="title-h2 award-title hide_on_desktop">
              <span className="align-underline">
                <RichText
                  tagName="div"
                  value={props.attributes.title}
                  onChange={handleTitleChange}
                  placeholder="Title here"
                />
                <img className="line" src="../www/asset/image/line-home9.png" alt="" />
              </span>
            </h2>
            <div className="award-content award_content_mobile hide_on_desktop">
              <RichText
                tagName="div"
                value={props.attributes.text}
                onChange={handleTextChange}
                placeholder="Text here"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SaveComponent(props) {
  return (
    <RichText.Content
      tagName="div"
      value={props.attributes.text}
      className={`${props.attributes.size}`}
    />
  );
}
