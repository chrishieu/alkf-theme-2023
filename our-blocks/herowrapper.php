<?php

if (!isset($attributes['imgURL'])) {
  $attributes['imgURL'] = get_theme_file_uri('/images/library-hero.jpg');
}

?>
<div class="heroWrapper">
  <div class="hero-wrap section-pri">
    <div class="hero-top">
      <h1 class="title-h1 hero-title">
        Andrew Lee King Fun & Associates Architects is <br />
        <span class="align-underline">one of the most innovative
          <img class="line" src="./asset/image/line-home1.png" alt="" /></span>
        and experienced architectural practices in Hong Kong
      </h1>
      <div class="hero-year"><?php echo $attributes['year'] ?></div>
    </div>
    <div class="hero-img">
      <img class="heroImg" src="<?php echo $attributes['imgURL'] ?>" alt="" />
    </div>
  </div>
</div>