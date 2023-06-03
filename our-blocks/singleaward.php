<?php global $post; ?>

<!-- <div class="align-loader loaderJS"></div> -->

<main class="main">
  <div class="alkf_project_detail_page alkf_insight_detail_page">
    <div class="container">
      <div class="alkf_project_detail_title reveal">
        <h1 class="title_h1 text">
          <?php the_title(); ?>
        </h1>
        <div class="title_year text">© 2020</div>
      </div>
      <div class="alkf_project_detail_banner sh_775 reveal">
        <img class="text" src="<?php echo get_the_post_thumbnail_url($post, 'insightHero'); ?>" alt="ALKF banner" title="ALKF banner" />
      </div>
      <div class="alkf_project_detail_sc reveal">
        <div class="alkf_text_right text">
          <div class="title">
            <p>Overview</p>
          </div>
          <div class="content">
            <p><?php echo get_the_excerpt($post); ?></p>
          </div>
        </div>
      </div>

      <?php the_content(); ?>

      <!-- <div class="alkf_project_detail_banner sh_797 reveal">
        <img class="text" src="./asset/image/project-detail/banner-2.jpg" />
      </div>
      <div class="alfk_project_detail_content reveal">
        <div class="alfk_box_left sh_1328 text">
          <img src="./asset/image/project-detail/image-1.jpg" />
        </div>
        <div class="alfk_box_right sh_1328 text">
          <div class="alfk_box_top sh_797">
            <img src="./asset/image/project-detail/image-2.jpg" />
          </div>
          <div class="alfk_box_bot">
            <p>Lorem ipsum dolor sit amet consectetur. Mauris metus rhoncus ultrices nisi nisl. Egestas molestie at leo
              quis enim diam nibh eu. Varius integer dolor mi sit. Vitae erat euismod odio massa amet cursus. Varius
              turpis tortor orci sit. Est feugiat consequat aliquet placerat ac eu quis. Dictumst sed in urna viverra
              lobortis cum. Blandit eget elit aliquam aliquet quis auctor mi eget sit. Nunc faucibus vitae commodo
              condimentum odio. Enim cras in integer faucibus interdum cras egestas scelerisque.</p>
          </div>
        </div>
      </div>
      -->
    </div>
  </div>
</main>
