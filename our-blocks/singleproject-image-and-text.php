<?php
if (!isset($attributes['imgURL'])) {
  $attributes['imgURL'] = get_theme_file_uri('/www/asset/image/home-hero.jpg');
}
?>

<div class="alfk_project_detail_content prd_sc9 reveal hover_mouse">
  <div class="alfk_box_left sh_1328 text">
  <?php if(isset($attributes['text'])): ?>
    <div class="alfk_box_top">
      <p><?php echo $attributes['text'] ?></p>
    </div>
  <?php endif; ?>                       
  </div>
  <div class="alfk_box_right sh_1328 text">
    <div class="popup_image">
      <div class="alfk_box_top sh_797">
        <img class="text" src="<?php echo $attributes['imgURL'] ?>" />
      </div>
      <button class="apply_career apply_pop" data-id="pop_index_1">
        <span class="btn-plus-pop"></span>
      </button>
    </div>                        
  </div>
</div>