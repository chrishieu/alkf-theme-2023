<?php
$post_list = get_posts(array(
  'posts_per_page' => -1,
  'post_type' => 'application',
  'post_status' => 'publish',
  'orderby' => 'published_date',
  'order' => 'DESC',
));

?>

<?php if (!empty($_POST)): ?>
  <?php 
    // var_dump($_FILES);
    //user posted variables
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $intro = $_POST['intro'];
    $content = '
    Full name: '.$fullname.'
    Email: '.$email.'
    Phone: '.$phone.'
    Intro: '.$intro.' 
    ';

    //php mailer variables
    $to = get_option('admin_email');
    // $to = 'dhieu.cse09@gmail.com';
    $subject = "Open applications from ALKF website";
    $headers = 'From: '. $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n";
    $sent = '';
    if(isset($_FILES)) {
      move_uploaded_file( $_FILES['upload']['tmp_name'], WP_CONTENT_DIR.'/uploads/'.basename( $_FILES['upload']['name'] ) );
      $anexo = WP_CONTENT_DIR.'/uploads/'.basename( $_FILES['upload']['name'] );
      //Here put your Validation and send mail
      $sent = wp_mail($to, $subject, strip_tags($content), $headers, $anexo);
      // rmdir($anexo);
    } else {
      $sent = wp_mail($to, $subject, strip_tags($content), $headers, $anexo);
    }

    if($sent) {
      //message sent!   
      echo '<h1><strong>Email sent. Thank you for applied this application</strong></h1>';
    }
    else  {
      //message wasn't sent
      echo '<h1><strong>Error. Thank you for applied this application</strong></h1>';
    }
  ?>
<?php endif; ?>
<div class="alkf_career_section alkf_career_sec_9 reveal">
  <div class="text alkf_application_content">
    <div class="application_title">
      <span class="align-underline active hover_mouse">Open applications
        <img class="line" src="<?php echo get_theme_file_uri('/www/asset/image/line-home1.png'); ?>" alt="">
      </span>
    </div>
    <?php foreach($post_list as $index => $item): ?>
    <div class="application_apply">
      <div class="application_position slider-item">
        <div class="postion_name">
          <p><?php echo $item->post_title; ?></p>
        </div>
        <div class="postion_apply">
          <button class="apply_career hover_mouse" data-id="job_index_<?php echo $index+1; ?>">
            <span class="hide_on_mobile">Apply</span>
            <span class="plus hover"></span>
            <span class="arrow hover"></span>
          </button>
        </div>
      </div>
    </div>
    <?php endforeach; ?>

  </div>
  <?php foreach($post_list as $index => $item): ?>
  <div class="job_desc" data-id="job_index_<?php echo $index+1; ?>">
    <div class="job_container">
      <button class="close_jobdesc"><img src="<?php echo get_theme_file_uri('/www/asset/image/icon-close.svg'); ?>" alt=""></button>
      <div class="job_desc_left">
        <div class="job_left_title">
          <h4><?php echo $item->post_title; ?></h4>
          <div class="desc_res">
            <h5><?php echo get_field('requirements_title', $item); ?></h5>
            <?php echo get_field('requirements', $item); ?>
          </div>
          <div class="desc_res desc_require">
            <h5><?php echo get_field('description_title', $item); ?></h5>
            <?php echo get_field('description', $item); ?>
          </div>
        </div>
      </div>
      <div class="job_desc_right">
        <form action="<?php global $post; echo get_permalink($post); ?>" method="post" enctype="multipart/form-data">
          <div class="job_desc_title">
            <h4>Apply now</h4>
          </div>
          <div class="job_desc_input">
            <input type="text" name="fullname" required placeholder="Full name">
          </div>
          <div class="job_desc_input">
            <input type="email" name="email" required placeholder="Email">
          </div>
          <div class="job_desc_input">
            <input type="number" name="phone" required placeholder="Phone number">
          </div>
          <div class="job_desc_input job_desc_text">
            <textarea placeholder="Introduction" required name="intro" type="text" rows="4" cols="50"></textarea>
          </div>
          <div class="job_desc_input file_input">
            <label for="myFileInput" class="file-input-label">Attachment</label>
            <input type="file" id="myFileInput" name="upload">
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
  <?php endforeach; ?>
</div>