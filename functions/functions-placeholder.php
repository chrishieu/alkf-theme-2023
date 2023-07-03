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
  new PlaceholderBlock("project");
  new PlaceholderBlock("singlepost");
  new PlaceholderBlock("singleproject");
  // new PlaceholderBlock("aboutus"); 
  new PlaceholderBlock("search"); 
  new PlaceholderBlock("taxonomy-project");
  new PlaceholderBlock("home-selected-projects");
  new PlaceholderBlock("career-open-applications");
  