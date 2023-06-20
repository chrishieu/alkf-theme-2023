<?php
if (!isset($attributes['imgURL'])) {
  $attributes['imgURL'] = get_theme_file_uri('/www/asset/image/home-hero.jpg');
}
if (!isset($attributes['imgURL2'])) {
  $attributes['imgURL2'] = get_theme_file_uri('/www/asset/image/home-hero.jpg');
}
?>

<div class="alfk_project_detail_content prd_sc7 reveal hover_mouse">
  <div class="alfk_box_left sh_1328 text">
    <div class="popup_image">
      <div class="custom">
        <img src="<?php echo $attributes['imgURL'] ?>" />
      </div>
      <button class="apply_career apply_pop" data-id="pop_index_1">
        <span class="btn-plus-pop"></span>
      </button>
    </div>
  </div>
  <div class="alfk_box_right sh_1328 text">
    <div class="alfk_box_top sh_797">
      <div class="popup_image">
        <div class="custom">
          <img src="<?php echo $attributes['imgURL2'] ?>" />
        </div>
        <button class="apply_career apply_pop" data-id="pop_index_1">
          <span class="btn-plus-pop"></span>
        </button>
      </div>
    </div>
    <?php if(isset($attributes['text'])): ?>
    <div class="alfk_box_bot">
      <p>
        <?php echo $attributes['text'] ?>
      </p>
    </div>
    <?php endif; ?>
  </div>
</div>