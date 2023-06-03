<section class="slider our_insights_home scrollTrigger">
  <div class="container">
    <h2 class="title-h2 slider-title">
      <span class="align-underline">
        <?php echo $attributes['title']; ?>
        <img class="line" src="<?php echo get_theme_file_uri('/www/asset/image/line-home11.png'); ?>" alt="" />
      </span>
    </h2>
    <div class="slider-subtitle"><?php echo $attributes['text']; ?></div>
    <div class="swiper swiper-default">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <?php foreach($attributes['selectedPosts'] as $id): $item = get_post($id);?>
          <?php $other_features_images = get_field('other_features_images', $item); ?>
          <div class="swiper-slide">
            <div class="slider-item project-view">
              <a href="<?php echo get_permalink($item); ?>" class="slider-img">
                <img src="<?php echo get_the_post_thumbnail_url($item, 'projectPortrait'); ?>" alt="ALKF banner" title="ALKF banner" />
                <img src="<?php echo (isset($other_features_images)) ? $other_features_images['sizes']['projectPortrait'] : get_the_post_thumbnail_url($item, 'projectPortrait'); ?>" alt="ALKF banner" title="ALKF banner" />
              </a>
              <a href="<?php echo get_permalink($item); ?>" class="slider-content">
                <div class="name"><?php echo $item->post_title; ?></div>
                <div class="txt">
                  <?php echo get_the_excerpt($item); ?>
                </div>
                <span class="plus hover"></span>
                <span class="arrow hover"></span>
              </a>
            </div>
          </div>
          <?php endforeach; ?>
          </div>
      </div>
      <div class="swiper-ctrl">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</section>