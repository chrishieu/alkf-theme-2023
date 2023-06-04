import { registerBlockType } from "@wordpress/blocks";
import {
  MediaUpload,
  MediaUploadCheck,
  InnerBlocks,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

registerBlockType("ourblocktheme/people-image", {
  title: "Our People - Image Upload Block",
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
              &nbsp; Add Images &nbsp;
            </Button>
          )}
        />
      </MediaUploadCheck>
    );

    const imagePreview = images.map((image, index) => {
      // console.log(image);
      return (
        <>
          <div
            className={`people-item people-item${index + 1} hover_mouse`}
            style={{ margin: "1px", marginBottom: "100px" }}
          >
            <img
              className=""
              src={`${image.sizes.thumbnail.url || image.url}`}
              alt={`${image.alt}`}
              style={{ width: "100%" }}
            />
            <div className="people-item-title">
              <h3 className="title-h2">
                <span className="align-underline">
                  {`${image.caption}`}
                  <img
                    src={`${people.base_url}/asset/image/line-home14.png`}
                    alt=""
                    class="line"
                  />
                </span>
              </h3>
            </div>
            <Button isSmall isDestructive onClick={() => removeImage(index)} style={{ margin: "3px" }}>
              Remove
            </Button>
          </div>
        </>
      );
    });

    return (
      <div>
        {imageUploadButton}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginBottom: "5px",
            justifyContent: "center",
          }}
        >
          {imagePreview}
        </div>
      </div>
    );
  },
  save: () => {
    return <InnerBlocks.Content />;
  }, // No output in the frontend
});
