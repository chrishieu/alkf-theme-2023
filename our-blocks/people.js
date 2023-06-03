import apiFetch from "@wordpress/api-fetch";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import { useEffect } from "@wordpress/element";

registerBlockType("ourblocktheme/people", {
  title: "People",
  // supports: {
  //   align: ["full"]
  // },
  attributes: {
    align: { type: "string", default: "full" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const useLater = (
    <>
      <div className="swiper swiper-default half people_swiper hide_on_desktop">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide people-item">
              <img
                className="people-item-img"
                src="./asset/image/home-people5.jpg"
                alt=""
              />
              <div className="people-item-title">
                <h3 className="title-h2">
                  <span className="align-underline">
                    Enthusiasm
                    <img
                      src="./asset/image/line-home14.png"
                      alt=""
                      className="line"
                    />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <section className="people section-pri scrollTrigger">
        <div className="container">
          <h2 className="title-h2 people-title">
            <span className="align-underline">
              Our People
              <img className="line" src="./asset/image/line-home9.png" alt="" />
            </span>
          </h2>
          <div className="people-subtitle">
            Think outside the box <br />
            who
            <span className="align-underline">
              created a legacy
              <img
                className="line"
                src="./asset/image/line-home10.png"
                alt=""
              />
            </span>
          </div>
          <div className="people-grid" id="people-grid">
            <InnerBlocks allowedBlocks={["ourblocktheme/peopleimage"]} />
          </div>
        </div>
      </section>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
