/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./our-blocks/peopleimage.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
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





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("ourblocktheme/peopleimage", {
  title: "Image Upload Block",
  icon: "format-image",
  category: "common",
  attributes: {
    images: {
      type: "array",
      default: []
    }
  },
  edit: _ref => {
    let {
      attributes,
      setAttributes
    } = _ref;
    const {
      images
    } = attributes;
    const onImageSelect = newImages => {
      let ids = new Set(images.map(d => d.id));
      let merged = [...images, ...newImages.filter(d => !ids.has(d.id))];
      setAttributes({
        images: merged
      });
    };
    const removeImage = index => {
      const updatedImages = [...images];
      updatedImages.splice(index, 1);
      setAttributes({
        images: updatedImages
      });
    };
    const imageUploadButton = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
      onSelect: onImageSelect,
      allowedTypes: ["image"],
      multiple: true,
      gallery: true,
      value: images.map(image => image.id),
      render: _ref2 => {
        let {
          open
        } = _ref2;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          isPrimary: true,
          onClick: open,
          style: {
            margin: "3px"
          }
        }, "Add Images");
      }
    }));
    const imagePreview = images.map((image, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", {
      key: image.id,
      className: "image-preview"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("img", {
      src: image.url,
      alt: `Image ${index + 1}`
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      isSmall: true,
      isDestructive: true,
      onClick: () => removeImage(index),
      style: {
        margin: "3px"
      }
    }, "Remove")));
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", null, imageUploadButton, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", {
      style: {
        display: "flex",
        flexWrap: "wrap"
      }
    }, imagePreview));
  },
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
  } // No output in the frontend
});
})();

/******/ })()
;
//# sourceMappingURL=peopleimage.js.map