import { InnerBlocks } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("ourblocktheme/hero", {
  title: "Hero",
  supports: {
    align: ["full"],
  },
  attributes: {
    align: { type: "string", default: "full" },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent() {
  return (
    <>
      <div className="hero heroJS scrollTrigger" style={{paddingTop: '50px', paddingBottom: '50px'}}>
        <div className="container">
          <InnerBlocks
            allowedBlocks={[
              "ourblocktheme/hero-txt",
              "ourblocktheme/herowrapper",
            ]}
          />
        </div>
      </div>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
