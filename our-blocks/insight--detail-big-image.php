<?php
if (!isset($attributes['imgURL'])) {
  $attributes['imgURL'] = get_theme_file_uri('/www/asset/image/home-hero.jpg');
}
?>

<div class="alkf_project_detail_banner sh_797 reveal">
  <img class="text" src="<?php echo $attributes['imgURL'] ?>" />
</div>