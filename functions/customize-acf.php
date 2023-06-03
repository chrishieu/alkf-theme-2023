<?php

// ACF Options page ------------------------------------------------------------
function acf_init_options_pages() {

  // Create 'option' page
  if( function_exists('acf_add_options_page') ) {

    acf_add_options_page(array(
      'page_title' => __('Options', 'etypes'),
      'menu_title' => __('Options', 'etypes'),
      'menu_slug' => 'site-options',
      'position' => 50,
      'redirect' => true,
      'icon_url' => 'dashicons-menu'
    ));
	}
}
add_action('acf/init', 'acf_init_options_pages');

function update_attachment($f,$pid,$t='',$c='') {
  wp_update_attachment_metadata( $pid, $f );
  if( !empty( $_FILES[$f]['name'] )) { //New upload
    require_once( ABSPATH . 'wp-admin/includes/file.php' );

    $override['action'] = 'acf_editpost';
    $file = wp_handle_upload( $_FILES[$f], array('test_form' => FALSE) );

    if ( isset( $file['error'] )) {
      return new WP_Error( 'upload_error', $file['error'] );
    }

    $file_type = wp_check_filetype($_FILES[$f]['name'], array(
      'jpg|jpeg' => 'image/jpeg',
      'gif' => 'image/gif',
      'png' => 'image/png',
    ));
    if ($file_type['type']) {
      $name_parts = pathinfo( $file['file'] );
      $name = $file['filename'];
      $type = $file['type'];
      $title = $t ? $t : $name;
      $content = $c;

      $attachment = array(
        'post_title' => $title,
        'post_type' => 'attachment',
        'post_content' => $content,
        'post_parent' => $pid,
        'post_mime_type' => $type,
        'guid' => $file['url'],
      );

      foreach( get_intermediate_image_sizes() as $s ) {
        $sizes[$s] = array( 'width' => '', 'height' => '', 'crop' => true );
        $sizes[$s]['width'] = get_option( "{$s}_size_w" ); // For default sizes set in options
        $sizes[$s]['height'] = get_option( "{$s}_size_h" ); // For default sizes set in options
        $sizes[$s]['crop'] = get_option( "{$s}_crop" ); // For default sizes set in options
      }

      $sizes = apply_filters( 'intermediate_image_sizes_advanced', $sizes );

      foreach( $sizes as $size => $size_data ) {
        $resized = image_make_intermediate_size( $file['file'], $size_data['width'], $size_data['height'], $size_data['crop'] );
        if ( $resized )
          $metadata['sizes'][$size] = $resized;
      }

      $attach_id = wp_insert_attachment( $attachment, $file['file'] /*, $pid - for post_thumbnails*/);

      // if ( !is_wp_error( $id )) {
      //   $attach_meta = wp_generate_attachment_metadata( $attach_id, $file['file'] );
      //   wp_update_attachment_metadata( $attach_id, $attach_meta );
      // }

      return array(
        'pid' =>$pid,
        'url' =>$file['url'],
        'file'=>$file,
        'attach_id'=>$attach_id
      );
      // update_post_meta( $pid, 'a_image', $file['url'] );
    }
  }
}
