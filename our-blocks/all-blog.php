<?php 
  $post_list = get_posts(array(
    'posts_per_page' => -1,
    'post_type' => 'blog',
    'orderby' => 'published_date',
    'order' => 'DESC',
  ));
?>

<!-- Slider Horizontal block news -->
<div class="alkf_block_news reveal">
  <div class="alkf_insights_slider text">
    <div class="slider1">
      <div class="slider-container">
        <?php foreach($post_list as $key => $item): ?>
        <div class="item item_<?php echo ($key==0 ? 'big' : 'small')?>">
          <a href="<?php echo get_permalink($item); ?>">
            <div class="img">
              <?php echo get_the_post_thumbnail($item); ?>
            </div>
            <div class="content">
              <div class="title"><?php echo $item->post_title; ?></div>
              <div class="des"><?php echo get_the_excerpt($item); ?></div>
              <div class="date"><?php echo get_the_date('d/m/Y', $item);?></div>
            </div>
          </a>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</div>
<!-- Slider Horizontal block awards -->
<div class="alkf_block_awards reveal">
  <div class="alkf_insights_slider text">
    <div class="alkf_page_new_box">
      <div class="slider-container">
      <?php foreach($post_list as $key => $item): ?>
        <div class="item item_small">
          <a href="<?php echo get_permalink($item); ?>">
            <div class="img">
              <?php echo get_the_post_thumbnail($item); ?>
            </div>
            <div class="content">
              <div class="title"><?php echo $item->post_title; ?></div>
              <div class="des"><?php echo get_the_excerpt($item); ?></div>
              <div class="date"><?php echo get_the_date('d/m/Y', $item);?></div>
            </div>
          </a>
        </div>
      <?php endforeach; ?>
      </div>
    </div>
  </div>
</div>