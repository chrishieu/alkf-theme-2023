<section class="slider section-pri section_slPro scrollTrigger">
  <div class="container">
    <h2 class="title-h2 slider-title">
      Selected
      <span class="align-underline">
        Projects
        <img class="line" src="<?php echo get_theme_file_uri('/www/asset/image/line-home2.png'); ?>" alt="" />
      </span>
    </h2>
    <div class="swiper swiper-default">
      <div class="swiper-container">
        <div class="swiper-wrapper project-view">
          <?php foreach (get_field('projects', 'options') as $project): ?>
            <?php 
              $other_features_images = get_field('other_features_images', $project); 
            ?>
            <div class="swiper-slide">
              <div class="slider-item">
                <a href="<?php echo get_permalink($project); ?>" class="slider-img">
                  <?php echo get_the_post_thumbnail($project); ?>
                  <img src="<?php echo $other_features_images['url']; ?>" alt="" />
                </a>
                <a href="<?php echo get_permalink($project); ?>" class="slider-content">
                  <div class="name"><?php echo $project->post_title; ?></div>
                  <div class="txt"><?php echo get_the_excerpt($project); ?></div>
                  <span class="plus hover"></span>
                  <span class="arrow hover"></span>
                </a>
              </div>
            </div>
          <?php endforeach; ?>
          </div>
        <div class="swiper-ctrl">
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      
    </div>
  </div>
</section>
