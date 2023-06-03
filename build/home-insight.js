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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

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
/*!************************************!*\
  !*** ./our-blocks/home-insight.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);






// registerBlockType("ourblocktheme/home-award", {
//   title: "Our award",
//   attributes: {
//     title: { type: "string", default: "" },
//     text: { type: "string", default: "" },
//   },
//   edit: EditComponent,
//   save: SaveComponent,
// });

// function EditComponent(props) {
//   function handleTextChange(x) {
//     props.setAttributes({ text: x });
//   }

//   function handleTitleChange(x) {
//     props.setAttributes({ title: x });
//   }

//   return (
//     <>
//       <section className="award section-pri scrollTrigger">
//         <div className="container">
//           <div className="award-wrap">
//             <h2 className="title-h2 award-title hide_on_desktop">
//               <span className="align-underline">
//                 <RichText
//                   tagName="div"
//                   value={props.attributes.title}
//                   onChange={handleTitleChange}
//                   placeholder="Title here"
//                 />
//                 <img className="line" src="../www/asset/image/line-home9.png" alt="" />
//               </span>
//             </h2>
//             <div className="award-content award_content_mobile hide_on_desktop">
//               <RichText
//                 tagName="div"
//                 value={props.attributes.text}
//                 onChange={handleTextChange}
//                 placeholder="Text here"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// function SaveComponent(props) {
//   return (
//     <RichText.Content
//       tagName="div"
//       value={props.attributes.text}
//       className={`${props.attributes.size}`}
//     />
//   );
// }

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('ourblocktheme/home-insight', {
  title: 'Home - Insight selected',
  icon: 'admin-post',
  category: 'common',
  attributes: {
    title: {
      type: "string",
      default: ""
    },
    text: {
      type: "string",
      default: ""
    },
    selectedPosts: {
      type: 'array',
      default: []
    }
  },
  edit: _ref => {
    let {
      attributes,
      setAttributes
    } = _ref;
    const {
      selectedPosts
    } = attributes;
    const allPosts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
      // const postTypes = ['news', 'award', 'blog']; // Add the desired post types here
      const postTypes = 'news'; // Add the desired post types here
      return select('core').getEntityRecords('postType', postTypes, {
        per_page: -1
      });
    }, []);
    const onChangeSelect = newSelectedPosts => {
      setAttributes({
        selectedPosts: newSelectedPosts
      });
    };
    const postDropdown = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      multiple: true,
      label: "Select Posts",
      value: selectedPosts,
      options: allPosts ? allPosts.map(post => ({
        value: post.id,
        label: post.title.rendered
      })) : [],
      onChange: onChangeSelect
    });
    function handleTitleChange(x) {
      setAttributes({
        title: x
      });
    }
    function handleTextChange(x) {
      setAttributes({
        text: x
      });
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("section", {
      class: "slider our_insights_home scrollTrigger"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      class: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("h2", {
      class: "title-h2 slider-title"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
      tagName: "span",
      className: "align-underline",
      value: attributes.title,
      onChange: handleTitleChange,
      placeholder: "Title here"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
      tagName: "div",
      className: "slider-subtitle",
      value: attributes.text,
      onChange: handleTextChange,
      placeholder: "Text here"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
      class: "swiper swiper-default"
    }, postDropdown)));
  },
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
  } // No output in the frontend
});
})();

/******/ })()
;
//# sourceMappingURL=home-insight.js.map