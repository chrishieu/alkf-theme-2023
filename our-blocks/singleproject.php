<?php global $post; ?>

<!-- <div class="align-loader loaderJS"></div> -->
<main class="main">
  <div class="alkf_project_detail_page">
    <div class="container">
      <div class="alkf_project_detail_title prd_sc1">
        <h1 class="title_h1 hover_mouse">
          <?php the_title(); ?>
        </h1>
        <?php 
        $terms = wp_get_post_terms( $post->ID, array( 'completion' ) );
        ?>
        <?php if(count($terms) > 0): ?>
        <div class="title_year">© <?php echo $terms[0]->name; ?></div>
        <?php endif; ?>
      </div>
      <div class="popup_image prd_sc2">
        <div class="alkf_project_detail_banner sh_775 reveal hover_mouse">
          <img class="text" src="<?php echo get_the_post_thumbnail_url($post, 'insightHero'); ?>" alt="ALKF banner" title="ALKF banner" />
        </div>
        <button class="apply_career apply_pop" data-id="pop_index_1">
          <span class="btn-plus-pop"></span>
        </button>
      </div>
      
      <div class="alkf_project_detail_sc prd_sc3 reveal">
        <div class="alkf_text_left text">
          <div class="title">
            <p>What we do</p>
          </div>
          <div class="content">
            <?php echo get_field('what_we_do', $post); ?>
          </div>
        </div>
        <div class="alkf_text_right text">
          <div class="title">
            <p>Overview</p>
          </div>
          <div class="content">
            <p>
              <?php echo get_the_excerpt($post); ?>
            </p>
          </div>
        </div>
      </div>
      <?php the_content(); ?>

      <?php $gallery = get_field('gallery', $post->ID); ?>
      <!-- swiper slide 1 -->
      <div class="job_desc pop_slider_project" data-id="pop_index_1">
        <div class="alkf_popup_swiper swiper-default">
            <button class="close_jobdesc close_popSlider"><img src="<?php echo get_theme_file_uri('/www/asset/image/icon-close.svg'); ?>" alt=""></button>
            <div class="swiper-container swiper">
                <div class="swiper-wrapper ">
                  <?php foreach($gallery as $item): ?>
                  <div class="swiper-slide">
                        <div class="left">
                            <img class="project_img_pop" src="<?php echo $item['image']['url']; ?>" alt="" />
                        </div>
                        <div class="right container">
                            <div class="swiper-counter"></div>
                            <div class="swiper-des"><span class="des_pop"><?php echo $item['text']; ?></span></div>
                        </div>
                  </div>
                  <?php endforeach; ?>
                </div>	
                <!-- nav and pag -->
                <div class="swiper-ctrl">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
      </div>
    </div>
    <!-- end -->

    </div>
  </div>
</main>
