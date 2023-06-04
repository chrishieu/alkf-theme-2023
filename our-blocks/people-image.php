<div class="people-grid hide_on_mobile">
  <?php foreach($attributes['images'] as $i => $item): ?>
  <div class="people-item people-item<?php echo $i; ?> hover_mouse">
    <img class="people-item-img" src="<?php echo $item['sizes']['full']['url']; ?>" alt="" />
    <div class="people-item-title">
      <h3 class="title-h2">
        <span class="align-underline">
          <?php echo $item['caption']; ?>
          <img src="<?php echo get_theme_file_uri('/www/asset/image/line-home14.png'); ?>" alt="" class="line" />
        </span>
      </h3>
    </div>
  </div>
  <?php endforeach; ?>
</div>
<div class="swiper swiper-default half people_swiper hide_on_desktop">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <?php foreach($attributes['images'] as $i => $item): ?>
      <div class="swiper-slide people-item hover_mouse">
        <img class="people-item-img" src="<?php echo $item['sizes']['full']['url']; ?>" alt="" />
        <div class="people-item-title">
          <h3 class="title-h2">
            <span class="align-underline">
              <?php echo $item['caption']; ?>
              <img src="<?php echo get_theme_file_uri('/www/asset/image/line-home14.png'); ?>" alt="" class="line" />
            </span>
          </h3>
        </div>
      </div>
      <?php endforeach; ?>
  </div>
</div>
