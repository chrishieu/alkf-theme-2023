<?php
if (!isset($attributes['imgURL'])) {
$attributes['imgURL'] = get_theme_file_uri('/www/asset/image/home-hero.jpg');
}
?>
<div class="alkf_mobile_text_4 alkf_career_section alkf_career_sec_4 reveal">
  <div class="alkf_career_about pd_bot277 text">
    <div class="alkf_career_about_contents">
      <div class="alkf_career_strategies">
        <div class="strategies_title">
          <p><?php echo $attributes['title']; ?></p>
        </div>
        <div class="strategies_des pd_bot48">
          <p><?php echo $attributes['quote1']; ?></p>
        </div>
      </div>
      <div class="alkf_career_about_img hide_on_desktop">
        <img src="<?php echo $attributes['imgURL']?>" />
      </div>
      <div class="alkf_career_main_contents alkf_career_main_strategies pd_top48">
        <p><?php echo $attributes['quote2']; ?></p>
      </div>
      <div class="alkf_career_name pd_top120">
        <p><?php echo $attributes['quoteAuthor']; ?></p>
      </div>
    </div>
    <div class="alkf_career_about_img hide_on_mobile">
      <img src="<?php echo $attributes['imgURL']?>" />
    </div>
  </div>
  <div class="vision-row text">
    <div class="col-4">
      <div class="vision-item">
        <div class="number"><?php echo $attributes['num1']; ?></div>
        <div class="txt"><?php echo $attributes['txt1']; ?></div>
        <img class="line" src="<?php echo get_theme_file_uri('/www/asset/image/line-curve.png'); ?>" alt="" />
      </div>
    </div>
    <div class="col-4">
      <div class="vision-item">
        <div class="number"><?php echo $attributes['num2']; ?></div>
        <div class="txt"><?php echo $attributes['txt2']; ?></div>
        <img class="line" src="<?php echo get_theme_file_uri('/www/asset/image/line-curve.png'); ?>" alt="" />
      </div>
    </div>
    <div class="col-4">
      <div class="vision-item">
        <div class="number"><?php echo $attributes['num3']; ?></div>
        <div class="txt"><?php echo $attributes['txt3']; ?></div>
        <img class="line" src="<?php echo get_theme_file_uri('/www/asset/image/line-curve.png'); ?>" alt="" />
      </div>
    </div>
  </div>
</div>