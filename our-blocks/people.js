import { InnerBlocks } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { RichText, create } from '@wordpress/block-editor';
import { getActiveFormat, applyFormat } from '@wordpress/rich-text';
import { useState } from 'react';


registerBlockType("ourblocktheme/people", {
  title: "Our People",
  attributes: {
    align: { type: "string", default: "full" },
    text: { type: "string", default: "" },
    textContent: { type: "string", default: "" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {

  const { attributes, setAttributes } = props;
  const { textContent } = attributes;
  const onChangeContent = (newContent) => {
    props.setAttributes({ text: newContent });
  };

  const onChangeTextContent = (newContent) => {
    props.setAttributes({ textContent: newContent });
  };

  return (
    <>
      <section className="people section-pri scrollTrigger">
        <div className="container">
          <h2 className="title-h2 people-title">
            <span className="align-underline hover_mouse">
              <RichText
                value={props.attributes.text}
                onChange={onChangeContent}
                placeholder="Enter text here..."
              />
              <img
                className="line"
                src={`${people.base_url}/asset/image/line-home9.png`}
                alt=""
              />
            </span>
          </h2>
          <div className="people-subtitle">
            <RichText
              value={textContent}
              onChange={onChangeTextContent}
              placeholder="Enter text..."
            />
            </div>
          <div className="people-grid">
            <InnerBlocks allowedBlocks={["ourblocktheme/people-image"]} />
          </div>
        </div>
      </section>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
