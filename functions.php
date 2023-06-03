<?php

// Removes comments from admin menu
add_action('admin_menu', 'my_remove_admin_menus');
function my_remove_admin_menus()
{
  remove_menu_page('edit-comments.php');
  remove_menu_page('edit.php');
}
// Removes comments from post and pages
add_action('init', 'remove_comment_support', 100);

function remove_comment_support()
{
  remove_post_type_support('post', 'comments');
  remove_post_type_support('page', 'comments');
}
// Removes comments from admin bar
function mytheme_admin_bar_render()
{
  global $wp_admin_bar;
  $wp_admin_bar->remove_menu('comments');
}
add_action('wp_before_admin_bar_render', 'mytheme_admin_bar_render');

// add_action('rest_api_init', 'university_custom_rest');

function project_files()
{
  // wp_enqueue_style('alkf_main_styles', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js');
  wp_enqueue_script('swiper', get_theme_file_uri('/www/js/swiper.min.js'));
  wp_enqueue_script('gsap', get_theme_file_uri('/www/js/gsap391.min.js'));
  wp_enqueue_script('global', get_theme_file_uri('/www/js/global-function.js'));
  wp_enqueue_script('initGlobal', get_theme_file_uri('/www/js/initGlobal.js'));
  wp_enqueue_script('initCursor', get_theme_file_uri('/www/js/initCursor.js'));

  wp_enqueue_style('alkf-swiper-styles', get_theme_file_uri('/www/css/swiper.min.css'));
  wp_enqueue_style('alkf-graphiklcg-styles', get_theme_file_uri('/www/asset/font/graphiklcg/style.css'));
  wp_enqueue_style('alkf-header-styles', get_theme_file_uri('/www/css/header/responsive.css'));
  wp_enqueue_style('alkf-footer-styles', get_theme_file_uri('/www/css/footer/responsive.css'));
  wp_enqueue_style('alkf-custom-styles', get_theme_file_uri('/www/css/custom.css'));
}

add_action('wp_enqueue_scripts', 'project_files');

function project_features()
{
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support( 'menus' );
  
  add_image_size('projectLongPortrait', 684, 1330, true);
  add_image_size('projectPortrait', 684, 900, true);
  add_image_size('peopleImage', 218, 218, false);

  add_image_size('insightHero', 1392, 577, true);
  
  add_theme_support('editor-styles');
  add_editor_style(array('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i', 'www/css/style.css', 'www/admin.css', 'www/css/general.css'));
}

add_action('after_setup_theme', 'project_features');

function load_custom_wp_admin_style($hook) {
  wp_enqueue_style( 'custom_wp_admin_css', get_theme_file_uri('/www/admin.css'));
}
add_action( 'admin_head', 'load_custom_wp_admin_style' );

function register_menu() {
  register_nav_menu('main-menu',__( 'Main Menu' ));
  register_nav_menu('additional-menu',__( 'Additional Menu' ));
}
add_action( 'init', 'register_menu' );
  

function array_swap(&$array,$swap_a,$swap_b){
  list($array[$swap_a],$array[$swap_b]) = array($array[$swap_b],$array[$swap_a]);
}

function searchfilter($query) {
  if ($query->is_search && !is_admin() ) {
      if(isset($_GET['post_type'])) {
          $type = $_GET['post_type'];
              if($type == 'news') {
                  $query->set('post_type',array('news'));
              }
      }       
  }
  return $query;
}
add_filter('pre_get_posts','searchfilter');

function custom_title($title_parts) {
  global $post;
  $title_parts['title'] = "ALKF | ".$post->post_title;
  return $title_parts;
}
add_filter( 'document_title_parts', 'custom_title' );

function project_favicon(){
    echo "<link rel='shortcut icon' href='" . get_stylesheet_directory_uri() . "/www/asset/favicon/fav.png' />" . "\n";
}

add_action( 'wp_head', 'project_favicon');

// function wp_nav_menu_no_ul()
// {
//     $options = array(
//         'echo' => false,
//         'container' => '',
//         'menu' => 'side-menu',
//         'fallback_cb'=> 'fall_back_menu'
//     );

//     $menu = wp_nav_menu($options);
//     echo preg_replace(array(
//         '#^<ul[^>]*>#',
//         '#</ul>$#',
//         '#^<li[^>]*>#',
//         '#</li>$#',
//         '#^<li[^>]*>#',
//         '#</li>$#'
//     ), '', $menu);

// }

// function fall_back_menu(){
//     return;
// }


// Block theme functions
include(get_stylesheet_directory() . '/functions/functions-block-theme.php');

// Placeholder Block functions
include(get_stylesheet_directory() . '/functions/functions-placeholder.php');

// Customize ACF functions
include(get_stylesheet_directory() . '/functions/customize-acf.php');