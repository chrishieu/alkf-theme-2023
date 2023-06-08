<?php


class JSXBlock {
    function __construct($name, $renderCallback = null, $data = null) {
      $this->name = $name;
      $this->data = $data;
      $this->renderCallback = $renderCallback;
      add_action('init', [$this, 'onInit']);
    }
  
    function ourRenderCallback($attributes, $content) {
      ob_start();
      require get_theme_file_path("/our-blocks/{$this->name}.php");
      return ob_get_clean();
    }
  
    function onInit() {
      wp_register_script($this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", array('wp-blocks', 'wp-editor'));
      
      if ($this->data) {
        wp_localize_script($this->name, $this->name, $this->data);
      }
  
      $ourArgs = array(
        'editor_script' => $this->name
      );
  
      if ($this->renderCallback) {
        $ourArgs['render_callback'] = [$this, 'ourRenderCallback'];
      }
  
      register_block_type("ourblocktheme/{$this->name}", $ourArgs);
    }
  }
  
  // new JSXBlock('banner', true, ['fallbackimage' => get_theme_file_uri('/images/library-hero.jpg')]);
  
  // new JSXBlock('genericheading');
  // new JSXBlock('genericbutton');
  // new JSXBlock('slideshow', true);
  // new JSXBlock('slide', true, ['themeimagepath' => get_theme_file_uri('/images/')]);

  new JSXBlock('hero', true);
  new JSXBlock('hero-txt', true);
  new JSXBlock('herowrapper', true, ['fallbackimage' => get_theme_file_uri('/www/asset/image/home-hero.jpg')]);

  new JSXBlock('home-award', true);

  new JSXBlock('people', true, ['base_url' => get_theme_file_uri('/www/')]);
  new JSXBlock('people-image', true);

  new JSXBlock('career-hero', true);
  new JSXBlock('career-quote', true);
  new JSXBlock('career-big-image', true);
  new JSXBlock('career-list-item', true);
  new JSXBlock('career-quote-2', true);
  new JSXBlock('career-quote-3', true);

  new JSXBlock('insight-slideshow', true);
  new JSXBlock('insight-swiper-post', true);
  new JSXBlock('insight-grid-post', true);

  new JSXBlock('insight--detail-big-image', true);
  new JSXBlock('insight--detail-title-text', true);
  new JSXBlock('insight--detail-2-image-and-text', true);

  new JSXBlock('home-insight', true);
  new JSXBlock('home-vision', true);