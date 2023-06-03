<?php

$post_type = !isset($attributes['dropdownValue']) ? 'news' : $attributes['dropdownValue'];
$post_list = get_posts(array(
  'posts_per_page' => 3,
  'post_type' => $post_type,
  'orderby' => 'published_date',
  'order' => 'DESC',
));
?>

<!-- swiper slide -->
<div class="alkf_insights_swiper swiper-default insights_one reveal">
  <div class="swiper-container text">
    <div class="swiper-wrapper insightSlider">
      <?php foreach($post_list as $item): ?>
      <div class="swiper-slide">								
        <div class="slider-item">
          <div class="alkf_insights_title">
            <h1 class="title_h1"><?php echo $item->post_title; ?></h1>
            <div class="title_year"><?php echo get_the_excerpt($item); ?></div>
          </div>
          <div class="swiper-date"><span class="date"><?php echo get_the_date('d/m/Y', $item);?></span></div>
          <div class="swiper-counter"></div>	
          <div class="insights_one_img insights_one_attr" titleh1="<?php echo $item->post_title; ?>" titleyear="<?php echo get_the_excerpt($item); ?>" datetime="<?php echo get_the_date('d/m/Y', $item);?>">
            <img src="<?php echo get_field('slideshow_features_images', $item)['sizes']['insightHero']; ?>" alt="" />
          </div>
        </div>
      </div>
      <?php endforeach; ?>
    </div>	
    <!-- nav and pag -->
    <div class="swiper-ctrl">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!-- <div class="swiper-pagination"></div> -->
    </div>
  </div>
</div>
