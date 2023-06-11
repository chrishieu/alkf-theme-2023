<?php
global $post;
$feature_list = get_posts(
  array(
    'posts_per_page' => 7,
    'post_type' => 'project',
    'meta_key' => 'feature_project',
    'meta_value' => true,
    'orderby' => 'published_date',
    'order' => 'DESC',
  )
);
$tst = array_chunk($feature_list, 2);
array_swap($tst, 1, 3);

$item0_height = 'long';
$item1_height = 'short';

$non_feature_list = get_posts(
  array(
    'posts_per_page' => -1,
    'post_type' => 'project',
    'exclude' => array($feature_list),
    'orderby' => 'published_date',
    'order' => 'DESC',
  )
);
$non_tst = array_chunk($non_feature_list, 2);

$parent_terms = get_terms( array(
  'taxonomy'   => 'group',
  'hide_empty' => true,
  'parent' => 0 
) );

?>

<main class="main">
  <div class="alkf_project_build_page">
    <div class="alkf_project_container_fluid">
      <div class="alkf_project_header">
        <div class="alkf_project_left reveal">
          <h1 class="text">We
            <span class="align-underline active hover_mouse custom_line_project">
              create place,
              <img src="./asset/image/line-home10.png" alt="" class="line" />
            </span>
            not just buildings
          </h1>
        </div>
        <div class="alkf_project_right">
          <div class="project_menu_desk">
            <ul>
              <?php foreach($parent_terms as $pitem): ?>
                <li><a id="<?php echo $pitem->slug; ?>" class="project_submenu" href="javascript:void(0)"><?php echo $pitem->name; ?>+</a></li>
              <?php endforeach; ?>
              <li><a id="completion" class="project_submenu" href="javascript:void(0)">Completion Year+</a></li>
            </ul>
          </div>
          <nav class="navigation" role="navigation">
            <div id="project_menuToggle" class="project_menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="project_menu" class="project_menu">
                <?php foreach($parent_terms as $pitem): ?>
                  <li><a id="<?php echo $pitem->slug; ?>" class="project_submenu" href="javascript:void(0)"><?php echo $pitem->name; ?>+</a></li>
                <?php endforeach; ?>
                <li><a id="completion" class="project_submenu" href="javascript:void(0)">Completion Year+</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <!-- Submenu -->
      <?php foreach($parent_terms as $pitem): ?>
        <?php 
        $children_terms = get_terms( array(
          'taxonomy'   => 'group',
          'hide_empty' => true,
          'parent' => $pitem->term_id 
        ) );
        ?>
      <div data-id="<?php echo $pitem->slug; ?>" class="alkf_project_header hide_sub submenu_project">
        <div class="alkf_project_right project_sub_desktop">
          <div class="project_menu_desk">
            <ul>
              <?php foreach($children_terms as $cterm): ?>
              <li><a href="<?php echo get_term_link($cterm); ?>"><?php echo $cterm->name; ?> (<?php echo $cterm->count; ?>)</a></li>
              <?php endforeach; ?>
            </ul>
          </div>
        </div>
      </div>
      <?php endforeach; ?>
      <div data-id="completion" class="alkf_project_header hide_sub submenu_project">
        <div class="alkf_project_right project_sub_desktop">
          <div class="project_menu_desk">
            <ul>
              <li>All</li>
              <?php 
              $comp_terms = get_terms( array(
                'taxonomy'   => 'completion',
                'hide_empty' => true
              ) );
              ?>
              <?php foreach($comp_terms as $cterm): ?>
              <li><a href="<?php echo get_term_link($cterm); ?>"><?php echo $cterm->name; ?> (<?php echo $cterm->count; ?>)</a></li>
              <?php endforeach; ?>
            </ul>
          </div>
        </div>
      </div>
      <!-- Submenu -->
      <?php $other_features_images = get_field('other_features_images', $post); ?>
      <div class="alkf_project_box reveal">
        <a class="link_btn project-view" href="#"></a>
        <div class="alkf_project_banner swap_on_hover text">
          <img class="default" src="<?php echo get_the_post_thumbnail_url($post, 'insightHero'); ?>" alt="ALKF banner" title="ALKF banner" />
          <img class="hover" src="<?php echo $other_features_images['sizes']['insightHero']; ?>" alt="ALKF banner" title="ALKF banner" />
        </div>
        <div class="alkf_project_box_text text">
          <p class="top"><?php echo get_field('excerpt_on', $post); ?></p>
          <p class="bot"><?php echo get_field('excerpt_off', $post); ?></p>
          <span class="plus"></span>
          <span class="arrow"></span>
        </div>
      </div>

      <div class="alkf_project_title alkf_project_tL reveal">
        <p class="text">Featured projects</p>
      </div>
      <?php foreach ($tst as $key => $item): ?>
        <?php if (count($item) == 1): ?>
          <?php $other_features_images = get_field('other_features_images', $item[0]); ?>
          <div class="alkf_project_box reveal" onclick="location.href='<?php echo get_permalink($item)?>';">
            <div class="alkf_project_banner swap_on_hover mg_t_54 text">
              <img class="default" src="<?php echo get_the_post_thumbnail_url($item[0], 'full'); ?>" alt="ALKF banner"
                title="ALKF banner" />
              <img src="<?php echo $other_features_images['sizes']['large']; ?>" class="hover" alt="ALKF banner"
                title="ALKF banner" />
            </div>
            <div class="alkf_project_box_text text">
              <p class="top">
                <?php echo $item[0]->post_title; ?>
              </p>
              <p class="bot">
                <?php echo get_the_excerpt($item[0]); ?>
              </p>
              <span class="plus"></span>
              <span class="arrow"></span>
            </div>
          </div>
        <?php else: ?>
          <?php
          $other_features_images = get_field('other_features_images', $item[0]);
          $other_features_images1 = get_field('other_features_images', $item[1]);
          if ($key == 2) {
            $item0_height = 'short';
            $item1_height = 'long';
          } else {
            $item0_height = 'long';
            $item1_height = 'short';
          }
          ?>
          <div class="alkf_project_content reveal">
            <div class="<?php echo $item0_height; ?> alkf_project_box text" onclick="location.href='<?php echo get_permalink($item[0])?>';">
              <div class="img swap_on_hover">
                <img class="default" src="<?php echo get_the_post_thumbnail_url($item[0], 'projectLongPortrait') ?>"
                  alt="ALKF banner" title="ALKF banner" />
                <img src="<?php echo $other_features_images['sizes']['projectLongPortrait']; ?>" class="hover"
                  alt="ALKF banner" title="ALKF banner" />
              </div>
              <div class="alkf_project_box_text">
                <p class="top">
                  <?php echo $item[0]->post_title; ?>
                </p>
                <p class="bot">
                  <?php echo get_the_excerpt($item[0]); ?>
                </p>
                <span class="plus"></span>
                <span class="arrow"></span>
              </div>
            </div>
            <div class="<?php echo $item1_height; ?> alkf_project_box text" onclick="location.href='<?php echo get_permalink($item[1])?>';">
              <div class="img swap_on_hover">
                <img class="default" src="<?php echo get_the_post_thumbnail_url($item[1], 'projectPortrait'); ?>"
                  alt="ALKF banner" title="ALKF banner" />
                <img src="<?php echo $other_features_images1['sizes']['projectPortrait']; ?>" class="hover"
                  alt="ALKF banner" title="ALKF banner" />
              </div>
              <div class="alkf_project_box_text">
                <p class="top">
                  <?php echo $item[1]->post_title; ?>
                </p>
                <p class="bot">
                  <?php echo get_the_excerpt($item[1]); ?>
                </p>
                <span class="plus"></span>
                <span class="arrow"></span>
              </div>
            </div>
          </div>
        <?php endif; ?>
      <?php endforeach; ?>
      <div class="alkf_project_title alkf_project_tR reveal">
        <p class="text">Projects</p>
      </div>
      <?php foreach ($non_tst as $key => $item): ?>
        <?php
        $other_features_images = get_field('other_features_images', $item[0]);
        $other_features_images1 = get_field('other_features_images', $item[1]);
        if ($key % 2 == 0) {
          $item0_height = 'short';
          $item1_height = 'long';
          $item0_imgHeight = '';
          $item1_imgHeight = 'Long';
        } else {
          $item0_height = 'long';
          $item1_height = 'short';
          $item0_imgHeight = 'Long';
          $item1_imgHeight = '';
        }
        ?>
        <div class="alkf_project_content reveal">
          <div class="<?php echo $item0_height; ?> alkf_project_box text" onclick="location.href='<?php echo get_permalink($item[0])?>';">
            <div class="img swap_on_hover">
              <img class="default"
                src="<?php echo get_the_post_thumbnail_url($item[0], 'project' . $item0_imgHeight . 'Portrait'); ?>"
                alt="ALKF banner" title="ALKF banner" />
              <img src="<?php echo $other_features_images['sizes']['project' . $item0_imgHeight . 'Portrait']; ?>"
                class="hover" alt="ALKF banner" title="ALKF banner" />
            </div>
            <div class="alkf_project_box_text">
              <p class="top">
                <?php echo $item[0]->post_title; ?>
              </p>
              <p class="bot">
                <?php echo get_the_excerpt($item[0]); ?>
              </p>
              <span class="plus"></span>
              <span class="arrow"></span>
            </div>
          </div>
          <div class="<?php echo $item1_height; ?> alkf_project_box text" onclick="location.href='<?php echo get_permalink($item[1])?>';">
            <div class="img swap_on_hover">
              <img class="default"
                src="<?php echo get_the_post_thumbnail_url($item[0], 'project' . $item1_imgHeight . 'Portrait'); ?>"
                alt="ALKF banner" title="ALKF banner" />
              <img src="<?php echo $other_features_images['sizes']['project' . $item1_imgHeight . 'Portrait']; ?>"
                class="hover" alt="ALKF banner" title="ALKF banner" />
            </div>
            <div class="alkf_project_box_text">
              <p class="top">
                <?php echo $item[1]->post_title; ?>
              </p>
              <p class="bot">
                <?php echo get_the_excerpt($item[1]); ?>
              </p>
              <span class="plus"></span>
              <span class="arrow"></span>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</main>
