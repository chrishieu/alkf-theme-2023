<?php
if (!isset($attributes['imgURL'])) {
  $attributes['imgURL'] = get_theme_file_uri('/www/asset/image/home-hero.jpg');
}
if (!isset($attributes['imgURL2'])) {
  $attributes['imgURL2'] = get_theme_file_uri('/www/asset/image/home-hero.jpg');
}
?>

<div class="alfk_project_detail_content reveal">
  <div class="alfk_box_left sh_1328 text">
    <img src="<?php echo $attributes['imgURL'] ?>"/>
  </div>
  <div class="alfk_box_right sh_1328 text">
      <div class="alfk_box_top sh_797">
          <img src="<?php echo $attributes['imgURL2'] ?>"/>
      </div>
      <div class="alfk_box_bot">
          <p><?php echo $attributes['text'] ?></p>
      </div>
  </div>
</div>