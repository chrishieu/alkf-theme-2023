import { registerBlockType } from "@wordpress/blocks";
import { RichText, InnerBlocks } from "@wordpress/block-editor";
import { createElement } from "@wordpress/element";
import { SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

registerBlockType('ourblocktheme/home-approach', {
    title: 'Home - Approach',
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
        const postTypes = 'post'; // Add the desired post types here
        return select('core').getEntityRecords('postType', postTypes, { per_page: -1 });
      }, []);

      const onChangeSelect = (newSelectedPosts) => {
        setAttributes({ selectedPosts: newSelectedPosts });
      };

      const postDropdown = (
        <SelectControl
          multiple
          label="Select Insights"
          value={selectedPosts}
          options={allPosts ? allPosts.map((post) => ({ value: post.id, label: post.title.rendered })) : []}
          onChange={onChangeSelect}
          style={{ height: "200px" }}
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
