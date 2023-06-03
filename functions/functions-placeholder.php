<?php



class PlaceholderBlock {
    function __construct($name) {
      $this->name = $name;
      add_action('init', [$this, 'onInit']);
    }
  
    function ourRenderCallback($attributes, $content) {
      ob_start();
      require get_theme_file_path("/our-blocks/{$this->name}.php");
      return ob_get_clean();
    }
  
    function onInit() {
      wp_register_script($this->name, get_stylesheet_directory_uri() . "/our-blocks/{$this->name}.js", array('wp-blocks', 'wp-editor'));
      
      register_block_type("ourblocktheme/{$this->name}", array(
        'editor_script' => $this->name,
        'render_callback' => [$this, 'ourRenderCallback']
      ));
    }
  }
  
  // new PlaceholderBlock("eventsandblogs");
  new PlaceholderBlock("header");
  new PlaceholderBlock("footer");
  new PlaceholderBlock("page");
  new PlaceholderBlock("insight-news");
  new PlaceholderBlock("insight-award");
  new PlaceholderBlock("insight-blog");
  new PlaceholderBlock("all-news");
  new PlaceholderBlock("all-award");
  new PlaceholderBlock("all-blog");
  new PlaceholderBlock("project");
  new PlaceholderBlock("singlenews");
  new PlaceholderBlock("singleaward");
  new PlaceholderBlock("singleblog");
  new PlaceholderBlock("singleproject");
  new PlaceholderBlock("career"); 
  new PlaceholderBlock("aboutus"); 
  new PlaceholderBlock("search"); 
  new PlaceholderBlock("taxonomy-project");
  new PlaceholderBlock("selectedprojects");
  
  