<?php global $post; ?>
<?php $slideshow_features_images = get_field('slideshow_features_images', $post); ?>
<main class="main">
  <div class="alkf_project_detail_page alkf_insight_detail_page">
    <div class="container">
      <div class="alkf_project_detail_title reveal">
        <h1 class="title_h1 text">
          <?php the_title(); ?>
        </h1>
        <?php 
        $terms = wp_get_post_terms( $post->ID, array( 'post_tag' ) );
        ?>
        <?php if(count($terms) > 0): ?>
        <div class="title_year text">© <?php echo $terms[0]->name; ?></div>
        <?php endif; ?>
      </div>
      <div class="alkf_project_detail_banner sh_775 reveal">
        <img class="text" src="<?php echo $slideshow_features_images['sizes']['insightHero']; ?>" alt="ALKF banner" title="ALKF banner" />
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
    </div>
  </div>
</main>
