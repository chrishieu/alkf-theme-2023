<?php
if (!isset($attributes['imgURL'])) {
  $attributes['imgURL'] = get_theme_file_uri('/www/asset/image/home-hero.jpg');
}
if (!isset($attributes['imgURL2'])) {
  $attributes['imgURL2'] = get_theme_file_uri('/www/asset/image/home-hero.jpg');
}
if (!isset($attributes['imgURL3'])) {
  $attributes['imgURL3'] = get_theme_file_uri('/www/asset/image/home-hero.jpg');
}
?>

<!-- 3 col, 3 popup -->
<div class="alfk_project_detail_gid prd_sc10">
  <div class="alfk_box alfk_box_left">
    <div class="popup_image">
      <div class="custom sh_797">
        <img src="<?php echo $attributes['imgURL']; ?>" />
      </div>
      <button class="apply_career apply_pop" data-id="pop_index_1">
        <span class="btn-plus-pop"></span>
      </button>
    </div>
  </div>
  <div class="alfk_box alfk_box_center">
    <div class="popup_image">
      <div class="custom sh_797">
        <img src="<?php echo $attributes['imgURL2']; ?>" />
      </div>
      <button class="apply_career apply_pop" data-id="pop_index_1">
        <span class="btn-plus-pop"></span>
      </button>
    </div>
  </div>
  <div class="alfk_box alfk_box_right">
    <div class="popup_image">
      <div class="custom sh_797">
        <img src="<?php echo $attributes['imgURL3']; ?>" />
      </div>
      <button class="apply_career apply_pop" data-id="pop_index_1">
        <span class="btn-plus-pop"></span>
      </button>
    </div>
  </div>
</div>