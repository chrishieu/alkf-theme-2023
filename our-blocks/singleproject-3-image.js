import apiFetch from "@wordpress/api-fetch"
import { Button, PanelBody, PanelRow } from "@wordpress/components"
import { RichText, InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import { useEffect } from "@wordpress/element"

registerBlockType("ourblocktheme/singleproject-3-image", {
  title: "Project Detail - 3 Image",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
    text: { type: "string" },
    imgID: { type: "number" },
    imgURL: { type: "string", default: people.base_url + 'asset/image/home-hero.jpg' },
    imgID2: { type: "number" },
    imgURL2: { type: "string", default: people.base_url + 'asset/image/home-hero.jpg' },
    imgID3: { type: "number" },
    imgURL3: { type: "string", default: people.base_url + 'asset/image/home-hero.jpg' }
  },
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent(props) {
  useEffect(
    function () {
      if (props.attributes.imgID) {
        async function go() {
          const response = await apiFetch({
            path: `/wp/v2/media/${props.attributes.imgID}`,
            method: "GET"
          })
          console.log(response.media_details.sizes)
          props.setAttributes({ imgURL: response.media_details.sizes.full.source_url })
        }
        go()
      }
    },
    [props.attributes.imgID]
  )

  useEffect(
    function () {
      if (props.attributes.imgID2) {
        async function go() {
          const response = await apiFetch({
            path: `/wp/v2/media/${props.attributes.imgID2}`,
            method: "GET"
          })
          console.log(response.media_details.sizes)
          props.setAttributes({ imgURL2: response.media_details.sizes.full.source_url })
        }
        go()
      }
    },
    [props.attributes.imgID2]
  )

  useEffect(
    function () {
      if (props.attributes.imgID3) {
        async function go() {
          const response = await apiFetch({
            path: `/wp/v2/media/${props.attributes.imgID3}`,
            method: "GET"
          })
          console.log(response.media_details.sizes)
          props.setAttributes({ imgURL3: response.media_details.sizes.full.source_url })
        }
        go()
      }
    },
    [props.attributes.imgID3]
  )

  function onFileSelect(x) {
    props.setAttributes({ imgID: x.id })
  }

  function onFileSelect2(x) {
    props.setAttributes({ imgID2: x.id })
  }

  function onFileSelect3(x) {
    props.setAttributes({ imgID3: x.id })
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title="Image" initialOpen={true}>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onFileSelect}
                value={props.attributes.imgID}
                render={({ open }) => {
                  return <Button onClick={open}>Choose Image</Button>
                }}
              />
            </MediaUploadCheck>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onFileSelect2}
                value={props.attributes.imgID2}
                render={({ open }) => {
                  return <Button onClick={open}>Choose Image 2</Button>
                }}
              />
            </MediaUploadCheck>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onFileSelect3}
                value={props.attributes.imgID3}
                render={({ open }) => {
                  return <Button onClick={open}>Choose Image 3</Button>
                }}
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div className="alfk_project_detail_gid prd_sc10">
        <div className="alfk_box alfk_box_left">
          <div className="popup_image">
            <div className="custom sh_797">
              <img src={`${props.attributes.imgURL}`} />
            </div>
            <button className="apply_career apply_pop" data-id="pop_index_1">
              <span className="btn-plus-pop"></span>
            </button>
          </div>
        </div>
        <div className="alfk_box alfk_box_center">
          <div className="popup_image">
            <div className="custom sh_797">
              <img src={`${props.attributes.imgURL2}`} />
            </div>
            <button className="apply_career apply_pop" data-id="pop_index_1">
              <span className="btn-plus-pop"></span>
            </button>
          </div>
        </div>
        <div className="alfk_box alfk_box_right">
          <div className="popup_image">
            <div className="custom sh_797">
              <img src={`${props.attributes.imgURL3}`} />
            </div>
            <button className="apply_career apply_pop" data-id="pop_index_1">
              <span className="btn-plus-pop"></span>
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

function SaveComponent() {
  return <InnerBlocks.Content />
}
