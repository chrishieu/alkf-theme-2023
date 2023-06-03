<main class="main">
  <div class="alkf_project_insights alkf_news_page alkf_search_page">
    <div class="container">
      <div class="alkf_insights_swiper swiper-default insights_one reveal">
        <div class="text">
          <div class="alkf_search_page_form">
            <form method="post" class="search-form">
              <input type="input" id="query_string" name="query_string" placeholder="Type something..." value="<?php echo (isset($_POST) && count($_POST) > 0) ? $_POST['query_string'] : ''; ?>">
              <button type="submit" class="alkf_search_page_btn"><img
                  src="<?php echo get_theme_file_uri('/www/asset/image/icon-search.svg'); ?>" alt=""></button>
            </form>
          </div>
        </div>
      </div>
      <div class="alkf_block_awards reveal">
        <?php
        if (isset($_POST) && count($_POST) > 0): ?>
          <?php
          $args = array(
            'post_type' => ['blog', 'award', 'news', 'project'],
            's' => $_POST['query_string'],
            'post_status' => 'publish',
            'orderby' => 'title',
            'order' => 'DESC'
          );
          $result = get_posts($args);
          ?>
          <div class="text page_search_result hover_mouse"><?php echo count($result); ?> Results</div>
          <div class="alkf_insights_slider text">
            <div class="alkf_page_new_box">
              <?php if(count($result) > 0): ?>
              <div class="slider-container">
                <?php foreach ($result as $item): ?>
                  <div class="item item_small project-view">
                    <a href="<?php echo get_permalink($item); ?>">
                      <div class="img">
                        <img src="<?php echo get_the_post_thumbnail_url($item, 'projectPortrait') ?>" alt="ALKF banner" title="ALKF banner" />
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
              <?php else: ?>
                <div class="content">
                There are no Results
                </div>
              <?php endif; ?>
            </div>
          </div>
        <?php else: ?>

        <?php endif; ?>



      </div>
    </div>
  </div>
</main>

