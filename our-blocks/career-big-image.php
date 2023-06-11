<?php
if (!isset($attributes['imgURL'])) {
  $attributes['imgURL'] = get_theme_file_uri('/www/asset/image/home-hero.jpg');
}
?>
<div class="alkf_career_section alkf_career_sec_3 reveal hide_on_mobile">
  <div class="alkf_career_banner sh_797 pd_bot112 text border_bottom">
    <img src="<?php echo $attributes['imgURL']; ?>" />
  </div>
</div>