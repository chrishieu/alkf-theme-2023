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

  new JSXBlock('homevision', true, [
    'line_home9' => get_theme_file_uri('/www/asset/image/line-home9.png'),
    'line_home4' => get_theme_file_uri('/www/asset/image/line-home4.png'),
    'line_curve' => get_theme_file_uri('/www/asset/image/line-curve.png'),
  ]);

  new JSXBlock('people', true);
  new JSXBlock('peopleimage', true, [
    'fallbackimage' => get_theme_file_uri('/images/library-hero.jpg'),
    'line_home14' => get_theme_file_uri('/www/asset/image/line-home14.png'), 
    'counter' => 1
  ]);

  new JSXBlock('insightdetailbigimage', true, ['fallbackimage' => get_theme_file_uri('/www/asset/image/home-hero.jpg'),]);
  new JSXBlock('insightdetail2imageandtext', true, ['fallbackimage' => get_theme_file_uri('/www/asset/image/home-hero.jpg'),]);
  new JSXBlock('insightdetailtitletext', true);
  new JSXBlock('herocareer', true, ['fallbackimage' => get_theme_file_uri('/www/asset/image/home-hero.jpg'),]);
  new JSXBlock('quotecareer', true, ['fallbackimage' => get_theme_file_uri('/www/asset/image/home-hero.jpg'),]);
  new JSXBlock('careerbigimage', true, ['fallbackimage' => get_theme_file_uri('/www/asset/image/home-hero.jpg'),]);
  new JSXBlock('quotecareer2', true);
  new JSXBlock('careerlistitem', true);

  new JSXBlock("insight-slideshow", true);

  new JSXBlock("home-insight", true);