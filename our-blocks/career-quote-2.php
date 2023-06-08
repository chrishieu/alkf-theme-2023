<?php
if (!isset($attributes['imgURL'])) {
  $attributes['imgURL'] = get_theme_file_uri('/www/asset/image/home-hero.jpg');
}
?>
<div class="alkf_mobile_text_5 alkf_career_section alkf_career_sec_5 reveal">
  <div class="alkf_career_about pd_bot277 text">
    <div class="alkf_career_about_img text hide_on_mobile">
      <img src="<?php echo $attributes['imgURL']?>" />
    </div>
    <div class="alkf_career_about_contents">
      <div class="alkf_career_strategies">
        <div class="strategies_title people_diff_title">
          <p><?php echo $attributes['title']; ?></p>
        </div>
        <div class="strategies_des pd_bot48 ">
          <p><?php echo $attributes['quote1']; ?></p>
        </div>
      </div>
      <div class="alkf_career_about_img text hide_on_desktop">
        <img src="<?php echo $attributes['imgURL']; ?>" />
      </div>
      <div class="alkf_career_main_contents alkf_career_people_contents  pd_top48 ">
        <p><?php echo $attributes['quote2']; ?></p>
      </div>
      <div class="alkf_career_name pd_top120 ">
        <p><?php echo $attributes['quoteAuthor']; ?></p>
      </div>
    </div>
  </div>
</div>