import { registerBlockType } from "@wordpress/blocks";
import { RichText, InnerBlocks } from "@wordpress/block-editor";
import { createElement } from "@wordpress/element";
import { SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

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

registerBlockType('ourblocktheme/home-insight', {
    title: 'Home - Insight selected',
    icon: 'admin-post',
    category: 'common',
    attributes: {
      title: { type: "string", default: "" },
      text: { type: "string", default: "" },
      selectedPosts: {
        type: 'array',
        default: [],
      },
    },
    edit: ({ attributes, setAttributes }) => {
      const { selectedPosts } = attributes;

      const allPosts = useSelect((select) => {
        // const postTypes = ['news', 'award', 'blog']; // Add the desired post types here
        const postTypes = 'news'; // Add the desired post types here
        return select('core').getEntityRecords('postType', postTypes, { per_page: -1 });
      }, []);

      const onChangeSelect = (newSelectedPosts) => {
        setAttributes({ selectedPosts: newSelectedPosts });
      };

      const postDropdown = (
        <SelectControl
          multiple
          label="Select Posts"
          value={selectedPosts}
          options={allPosts ? allPosts.map((post) => ({ value: post.id, label: post.title.rendered })) : []}
          onChange={onChangeSelect}
        />
      );

      function handleTitleChange(x) {
        setAttributes({ title: x })
      }

      function handleTextChange(x) {
        setAttributes({ text: x })
      }

      return (
        <section class="slider our_insights_home scrollTrigger">
          <div class="container">
            <h2 class="title-h2 slider-title">
              <RichText tagName="span" className="align-underline" value={attributes.title} onChange={handleTitleChange} placeholder="Title here"/>
            </h2>
            <RichText tagName="div" className="slider-subtitle" value={attributes.text} onChange={handleTextChange} placeholder="Text here"/>
            <div class="swiper swiper-default">
              {postDropdown}
            </div>
          </div>
        </section>
      );
    },
    save: () => {
      return <InnerBlocks.Content />
    }, // No output in the frontend
});
