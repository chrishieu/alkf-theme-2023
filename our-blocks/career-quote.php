<?php if(!isset($attributes['imgURL'])) {
  $attributes['imgURL'] = get_theme_file_uri('/www/asset/image/home-hero.jpg');
} ?>

<div class="alkf_mobile_text_2 alkf_career_section alkf_career_sec_2 reveal">
  <div class="alkf_career_about pd_bot277">
    <div class="alkf_career_about_img text hide_on_mobile">
      <div class="mobile_career_founder">
        <img src="<?php echo $attributes['imgURL']; ?>" />
        <div class="hide_on_desktop hide_on_desktop mobile_text">
          <p><?php echo $attributes['quoteAuthor']; ?></p>
        </div>
      </div>
    </div>

    <div class="alkf_career_about_contents text">
      <div class="alkf_career_main_contents">
        <img class="hide_on_desktop" src="<?php echo $attributes['imgURL']; ?>" />
        <p><?php echo $attributes['quoteDesktop']; ?></p>
      </div>
      <div class="alkf_career_name pd_top120 text">
        <p</p><?php echo $attributes['quoteAuthor']; ?></p>
      </div>
    </div>
  </div>
</div>