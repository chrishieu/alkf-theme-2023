<?php
$parent_terms = get_terms( array(
  'taxonomy'   => 'group',
  'hide_empty' => false,
  'parent' => 0 
) );

$data = get_posts(array(
  'post_type' => 'project',
  'numberposts' => -1,
  'tax_query' => array(
    array(
      'taxonomy' => 'group',
      'field' => 'term_id', 
      'terms' => get_queried_object_id(),
      'include_children' => true
    )
  )
));

?>

<main class="main">
  <div class="alkf_project_build_page">
    <div class="alkf_project_container_fluid">
      <div class="alkf_project_header">
        <div class="alkf_project_left reveal">
          <h1 class="text">We create
            <span class="align-underline active hover_mouse">
              place
              <img class="line" src="./asset/image/line-home8.png" alt="">
            </span>,
            <br> not just buildings
          </h1>
        </div>
        <div class="alkf_project_right alkf_project_completion">
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
          'hide_empty' => false,
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
                'hide_empty' => false
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

      <div class="alkf_project_content alkf_project_completion_content reveal">
        <?php foreach($data as $item): ?>
        <?php $other_features_images = get_field('other_features_images', $item); ?>
        <div data-id="residential" class="box short alkf_project_box text"  onclick="location.href='<?php echo get_permalink($item)?>';">
          <div class="img swap_on_hover project-view">
            <img class="default" src="<?php echo get_the_post_thumbnail_url($item, 'projectPortrait') ?>" alt="ALKF banner" title="ALKF banner" />
            <img src="<?php echo $other_features_images['sizes']['projectPortrait']; ?>" class="hover" alt="ALKF banner" title="ALKF banner" />
          </div>
          <div class="alkf_project_box_text hover_mouse">
            <p class="top"><?php echo $item->post_title; ?></p>
            <p class="bot"><?php echo get_the_excerpt($item); ?></p>
            <span class="plus"></span>
            <span class="arrow"></span>
          </div>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</main>
