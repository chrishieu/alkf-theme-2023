<?php

// Removes comments from admin menu
add_action('admin_menu', 'my_remove_admin_menus');
function my_remove_admin_menus()
{
  remove_menu_page('edit-comments.php');
  // remove_menu_page('edit.php');
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

function project_files()
{
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
  add_image_size('insightHero', 1392, 547, true);

  add_image_size('ct_thumb', 63, 63, true);

  // Landscape Images 16:9, cropped
  add_image_size('16_9_large', 1920, 1080, true);
  add_image_size('16_9_medium', 1280, 720, true);
  add_image_size('16_9_small', 640, 360, true);
  add_image_size('16_9_thumbnail', 100, 56, true);

  // Portrait Images 4:5, cropped
  add_image_size('4_5_large', 1280, 1600, true);
  add_image_size('4_5_medium', 960, 1200, true);
  add_image_size('4_5_small', 480, 600, true);
  add_image_size('4_5_thumbnail', 80, 100, true);
  
  // Portrait Images 4:6, cropped
  add_image_size('4_6_medium', 960, 1440, true);
  add_image_size('4_6_small', 480, 720, true);

  // Portrait Images 1:1, cropped
  add_image_size('1_1_large', 1280, 1280, true);
  add_image_size('1_1_medium', 960, 960, true);
  add_image_size('1_1_small', 640, 640, true);
  add_image_size('1_1_xs_small', 400, 400, true);
  add_image_size('1_1_thumbnail', 80, 100, true);

  // Flexible Images, no crop
  add_image_size('flex_height_1920', 1920);
  add_image_size('flex_height_large', 960);
  add_image_size('flex_height_medium', 640);
  add_image_size('flex_height_small', 480);
  add_image_size('flex_height_thumbnail', 100);
  
  add_theme_support('editor-styles');
  add_editor_style(array(
    '/www/admin.css',
    '/www/css/swiper.min.css',
    '/www/asset/font/graphiklcg/style.css',
    '/www/css/header/responsive.css',
    '/www/css/footer/responsive.css',
    '/www/css/custom.css'
  ));
}

add_action('after_setup_theme', 'project_features');

function load_custom_wp_admin_style($hook) {
  wp_enqueue_style( 'custom_wp_admin_css', get_theme_file_uri('/www/admin.css'));
}
add_action( 'admin_head', 'load_custom_wp_admin_style' );

add_action( 'admin_enqueue_scripts', function() {
  wp_enqueue_script( 'handle', get_theme_file_uri('/www/admin.js'), array('jquery') );
}, 20, 1 );

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
    echo "<link rel='shortcut icon' href='" . get_stylesheet_directory_uri() . "/www//fav.png' />" . "\n";
}

add_action( 'wp_head', 'project_favicon');

// add_filter( 'allowed_block_types_all', 'project_allowed_block_types', 25, 2 );

// function project_allowed_block_types( $allowed_blocks, $editor_context ) {
//   $prefix_project_block = 'ourblocktheme/';
// 	return array(
// 		'core/paragraph',
// 		'core/heading',
//     $prefix_project_block."page",
//     $prefix_project_block."insight-news",
//     $prefix_project_block."insight-award",
//     $prefix_project_block."insight-blog",
//     $prefix_project_block."all-news",
//     $prefix_project_block."all-award",
//     $prefix_project_block."all-blog",
//     $prefix_project_block."project",
//     $prefix_project_block."career",
//     $prefix_project_block."aboutus",
//     $prefix_project_block."search",
//     $prefix_project_block."selectedprojects",
// 	); 
// }

function applyUnderlineStyle ($txt) {
  $base = get_theme_file_uri('/www');
  $string = str_replace("<u>", '<span class="align-underline">', $txt);
  $string2 = str_replace("</u>", '<img class="line" src="'.$base.'/asset/image/line-home4.png" alt="" /></span>', $string);
  return $string2;
}

function nl2p( $text, $class = '' ) {
  $string = str_replace( array( "\r\n\r\n", "\n\n" ), '</p><p>', $text);
  $string = str_replace( array( "\r\n", "\n" ), '<br />', $string);
  return '<p' . ( $class ? ' class="' . $class . '"' : '' ) . '>' . $string . '</p>';
}

function is_not_homepage_and_not_admin() {
  // Check if the current page is the homepage
  if (is_home() || is_front_page()) {
      return false; // It is the homepage, so return false
  }

  // Check if the current page is an admin page
  if (is_admin()) {
      return false; // It is an admin page, so return false
  }

  // If neither the homepage nor an admin page, return true
  return true;
}

if (is_not_homepage_and_not_admin()) {
  echo "<style>html, body{overflow-x:hidden;</style>";
}

// Block theme functions
include(get_stylesheet_directory() . '/functions/functions-block-theme.php');

// Placeholder Block functions
include(get_stylesheet_directory() . '/functions/functions-placeholder.php');

// Customize ACF functions
include(get_stylesheet_directory() . '/functions/customize-acf.php');