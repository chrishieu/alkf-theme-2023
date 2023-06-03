// import apiFetch from "@wordpress/api-fetch";
// import { Button, PanelBody, PanelRow } from "@wordpress/components";
// import { RichText, BlockControls } from "@wordpress/block-editor";
// import {
//   InnerBlocks,
//   InspectorControls,
//   MediaUpload,
//   MediaUploadCheck,
// } from "@wordpress/block-editor";
// import { registerBlockType } from "@wordpress/blocks";
// import { useEffect } from "@wordpress/element";
// import { Toolbar, ToolbarDropdownMenu, ToolbarGroup } from "@wordpress/components";
// import {
//   more,
//   arrowLeft,
//   arrowRight,
//   arrowUp,
//   arrowDown,
// } from "@wordpress/icons";

// registerBlockType("ourblocktheme/peopleimage", {
//   title: "People - Image",
//   attributes: {
//     align: { type: "string", default: "full" },
//     text: { type: "string" },
//     imgID: { type: "number" },
//     imgURL: { type: "string", default: peopleimage.fallbackimage },
//     lineHome14: { type: "string", default: peopleimage.line_home14 },
//     counter: { type: "number", default: peopleimage.counter },
//   },
//   edit: EditComponent,
//   save: SaveComponent,
// });

// function EditComponent(props) {
//   useEffect(
//     function () {
//       if (props.attributes.imgID) {
//         async function go() {
//           const response = await apiFetch({
//             path: `/wp/v2/media/${props.attributes.imgID}`,
//             method: "GET",
//           });
//           props.setAttributes({
//             imgURL: response.media_details.sizes.full.source_url,
//           });
//         }
//         go();
//       }
//     },
//     [props.attributes.imgID]
//   );

//   function onFileSelect(x) {
//     props.setAttributes({ imgID: x.id });
//   }

//   function handleTextChange(x) {
//     props.setAttributes({ text: x });
//   }

//   return (
//     <>
//       <BlockControls>
//         <Toolbar label="Options">
//           <ToolbarDropdownMenu
//             icon={more}
//             label="Select a position"
//             controls={[
//               { title: "Position 1", onClick: () => props.setAttributes({ counter: "1" })},
//               { title: "Position 2", onClick: () => props.setAttributes({ counter: "2" })},
//               { title: "Position 3", onClick: () => props.setAttributes({ counter: "3" })},
//               { title: "Position 4", onClick: () => props.setAttributes({ counter: "4" })},
//               { title: "Position 5", onClick: () => props.setAttributes({ counter: "5" })},
//               { title: "Position 6", onClick: () => props.setAttributes({ counter: "6" })},
//               { title: "Position 7", onClick: () => props.setAttributes({ counter: "7" })},
//               { title: "Position 8", onClick: () => props.setAttributes({ counter: "8" })},
//             ]}
//           />
//         </Toolbar>
//       </BlockControls>
//       <InspectorControls>
//         <PanelBody title="Image" initialOpen={true}>
//           <PanelRow>
//             <MediaUploadCheck>
//               <MediaUpload
//                 onSelect={onFileSelect}
//                 value={props.attributes.imgID}
//                 render={({ open }) => {
//                   return <Button onClick={open}>Choose Image</Button>;
//                 }}
//               />
//             </MediaUploadCheck>
//           </PanelRow>
//         </PanelBody>
//       </InspectorControls>
//       <div
//         className={`people-item people-item${props.attributes.counter}`}
//         style={{ border: "solid 1px #000" }}
//       >
//         <img
//           className="people-item-img admin-people-item-img"
//           src={`${props.attributes.imgURL}`}
//           alt=""
//         />
//         <div className="people-item-title">
//           <h3 className="title-h2">
//             <span className="align-underline">
//               <RichText
//                 tagName="span"
//                 value={props.attributes.text}
//                 onChange={handleTextChange}
//               />
//               <img
//                 src={`${props.attributes.lineHome14}`}
//                 alt=""
//                 className="line"
//               />
//             </span>
//           </h3>
//         </div>
//       </div>
//     </>
//   );
// }

// function SaveComponent() {
//   return <InnerBlocks.Content />;
// }

import { registerBlockType } from "@wordpress/blocks";
import {
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { createElement } from "@wordpress/element";

registerBlockType("ourblocktheme/peopleimage", {
  title: "Image Upload Block",
  icon: "format-image",
  category: "common",
  attributes: {
    images: {
      type: "array",
      default: [],
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const { images } = attributes;

    const onImageSelect = (newImages) => {
      let ids = new Set(images.map((d) => d.id));
      let merged = [...images, ...newImages.filter((d) => !ids.has(d.id))];
      setAttributes({ images: merged });
    };

    const removeImage = (index) => {
      const updatedImages = [...images];
      updatedImages.splice(index, 1);
      setAttributes({ images: updatedImages });
    };

    const imageUploadButton = (
      <MediaUploadCheck>
        <MediaUpload
          onSelect={onImageSelect}
          allowedTypes={["image"]}
          multiple
          gallery
          value={images.map((image) => image.id)}
          render={({ open }) => (
            <Button isPrimary onClick={open} style={{ margin: "3px" }}>
              Add Images
            </Button>
          )}
        />
      </MediaUploadCheck>
    );

    const imagePreview = images.map((image, index) => (
      <div key={image.id} className="image-preview">
        <img src={image.url} alt={`Image ${index + 1}`} />
        <Button isSmall isDestructive onClick={() => removeImage(index)} style={{ margin: "3px" }}>
          Remove
        </Button>
      </div>
    ));

    return (
      <div>
        {imageUploadButton}
        <div style={{ display: "flex",flexWrap: "wrap"}}>
          {imagePreview}  
        </div>
      </div>
    );
  },
  save: () => {
    return <InnerBlocks.Content />;
  }, // No output in the frontend
});
