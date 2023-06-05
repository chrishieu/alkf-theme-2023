import apiFetch from "@wordpress/api-fetch"
import { Button, PanelBody, PanelRow } from "@wordpress/components"
import { RichText, InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import { useEffect } from "@wordpress/element"

registerBlockType("ourblocktheme/insight--detail-2-image-and-text", {
  title: "Insight Detail - 2 Image & Text",
  supports: {
    align: ["full"]
  },
  attributes: {
    align: { type: "string", default: "full" },
    text: { type: "string" },
    imgID: { type: "number" },
    imgURL: { type: "string", default: people.base_url + 'asset/image/home-hero.jpg' },
    imgID2: { type: "number" },
    imgURL2: { type: "string", default: people.base_url + 'asset/image/home-hero.jpg' }
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
          props.setAttributes({ imgURL: response.media_details.sizes.large.source_url })
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
          props.setAttributes({ imgURL2: response.media_details.sizes.large.source_url })
        }
        go()
      }
    },
    [props.attributes.imgID2]
  )

  function onFileSelect(x) {
    props.setAttributes({ imgID: x.id })
  }

  function onFileSelect2(x) {
    props.setAttributes({ imgID2: x.id })
  }

  function handleTextChange(x) {
    props.setAttributes({ text: x })
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
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div className="alfk_project_detail_content reveal">
        <div className="alfk_box_left sh_1328 text">
          <img src={`${props.attributes.imgURL}`} />
        </div>
        <div className="alfk_box_right sh_1328 text">
          <div className="alfk_box_top sh_797">
          <img src={`${props.attributes.imgURL2}`} />
          </div>
          <div className="alfk_box_bot">
            <RichText allowedFormats={["core/bold", "core/italic"]} tagName="p" value={props.attributes.text} onChange={handleTextChange} placeholder="Input Text here" />
          </div>
        </div>
      </div>
    </>
  )
}

function SaveComponent() {
  return <InnerBlocks.Content />
}
