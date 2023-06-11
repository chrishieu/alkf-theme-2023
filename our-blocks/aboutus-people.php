<?php
if (!isset($attributes['imgURL'])) {
  $attributes['imgURL'] = get_theme_file_uri('/www/asset/image/home-hero.jpg');
}
?>
<!-- head title -->
<div class="alkf_aboutUs_section alkf_aboutUs_sec_1 reveal">
  <div class="alkf_aboutUs_title text">
    <h1 class="title_h1">
    We provide 
      <?php echo strip_tags($attributes['headline']); ?>
    </h1>
  </div>
  <div class="alkf_aboutUs_banner sh_100img hover_mouse">
    <img src="<?php echo $attributes['imgURL']; ?>" />
  </div>
</div>
<!-- ok -->
<div class="alkf_aboutUs_section alkf_aboutUs_sec_2 reveal">
  <div class="alkf_aboutUs_about text">
    <div class="alkf_aboutUs_subtitle">
      <p><?php echo $attributes['profileTitle']; ?></p>
    </div>
    <div class="alkf_aboutUs_about_contents text">
      <div class="alkf_aboutUs_main_contents">
        <?php echo ($attributes['profileText']); ?>
        <a class="text_show_mob" href="#">Read more</a>
      </div>
    </div>
  </div>
</div>
<!-- ok -->
<div class="alkf_aboutUs_section alkf_aboutUs_sec_3 reveal">
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