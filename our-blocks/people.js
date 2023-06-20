import { InnerBlocks } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { RichText, create } from '@wordpress/block-editor';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { useState } from 'react';

registerBlockType("ourblocktheme/people", {
  title: "Our People",
  supports: {
    align: ["full"],
  },
  attributes: {
    align: { type: "string", default: "full" },
    text: { type: "string", default: "" },
    textContent: { type: "string", default: "" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const { textContent } = props.attributes;
  const [selectedText, setSelectedText] = useState('');

  const onChangeContent = (newContent) => {
    props.setAttributes({ text: newContent });
  };

  const onChangeTextContent = (newContent) => {
    props.setAttributes({ textContent: newContent });
  };

  const applyUnderline = () => {
    if (typeof selectedText === 'string') {
      const updatedContent = textContent.replace(
        selectedText,
        `<u>${selectedText}</u>`
      );
      onChangeTextContent(updatedContent);
    }
  };

  const removeUnderline = () => {
    if (typeof selectedText === 'string') {
      const updatedContent = textContent.replace(
        `<u>${selectedText}</u>`,
        selectedText
      );
      onChangeTextContent(updatedContent);
    }
  };

  const onSelectText = (event) => {
    const selected = event.target.value;
    setSelectedText(selected);
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
                placeholder="Enter text here"
              />
              <img
                className="line" alt=""
                src={`${people.base_url}/asset/image/line-home9.png`}
              />
            </span>
          </h2>
          <div className="people-subtitle">
            <RichTextToolbarButton
              icon="editor-underline"
              title="Apply Underline"
              onClick={applyUnderline}
              isActive={typeof selectedText === 'string' && textContent.includes(`<u>${selectedText}</u>`)}
            />
            <RichTextToolbarButton
              icon="editor-removeformatting"
              title="Remove Underline"
              onClick={removeUnderline}
              isActive={typeof selectedText === 'string' && textContent.includes(`<u>${selectedText}</u>`)}
            />
            <RichText
              tagName="p"
              value={textContent}
              onChange={onChangeContent}
              onFocus={onSelectText}
              onSelect={onSelectText}
              allowedFormats={['core/underline']}
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
