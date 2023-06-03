<main class="main">
    <div class="form_container reveal">
        <div class="cl_form text">

        <?php 

        if (isset($_POST) && count($_POST) > 0) {

          if (!empty($_POST['your_name']) && !empty($_POST['email']) && !empty($_POST['phone'])) {
            $new_post = array(
              'post_title' => 'Contact from '.$_POST['your_name'],
              'post_status' => 'publish',
              'post_date' => date('Y-m-d H:i:s'),
              'post_type' => 'contact-form',
              'post_category' => array(0)
            );
            $post_id = wp_insert_post($new_post);
            update_field('name', $_POST['your_name'], $post_id); 
            update_field('company', $_POST['company'], $post_id); 
            update_field('email', $_POST['email'], $post_id); 
            update_field('phone', $_POST['phone'], $post_id); 
            update_field('budget', $_POST['slider_range'], $post_id); 
            update_field('ideal_timeframe', $_POST['timeframe'], $post_id); 
            update_field('word_of_mouth', $_POST['word'], $post_id); 

            $att = update_attachment('files_input', $post_id);

            update_field('upload', $att['attach_id'], $post_id);

          }

          ?>
          <h1>Receive a project</h1>
          <p>Thanks for your interest in working with us.</p>
          <?php

        } else {

        ?>

            <form enctype="multipart/form-data" method="post" >
                <!--Form 1-->
                <div class="form_wrap">
                    <div class="form_title">
                        <h1>Start a project</h1>
                        <div class="form_page_number"><span class="page_number"></span>/5</div>
                    </div>
                    <div class="form_des">
                        <p>Thanks for your interest in working with us. Please complete the details below and we'll get back to you within one business day.</p>
                    </div>
                    <div class="form_style">
                        <!--field 1-->
                        <label class="input_txt_label">What should we call you?</label>
                        <div class="input_field">
                            <input type="text" id="your_name" name="your_name" class="input_txt">
                            <div class="input_txt_effect">Your name</div>
                        </div>

                        <!--field 2-->
                        <label class="input_txt_label">What is the name of your company / organisation?</label>
                        <div class="input_field">
                            <input type="text" id="company" name="company" class="input_txt">
                            <div class="input_txt_effect">Company</div>
                        </div>

                        <!--field 3-->
                        <label class="input_txt_label">How shall we contact you?</label>
                        <div class="field_wrap">
                            <div class="input_field">
                                <input type="text" id="email" name="email" class="input_txt">
                                <div class="input_txt_effect">Email</div>
                            </div>
                            <div class="input_field">
                                <input type="text" id="phone" name="phone" class="input_txt">
                                <div class="input_txt_effect">Phone</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Form 2-->
                <div class="form_wrap">
                    <div class="form_title">
                        <h1>What can we<br>help you with?</h1>
                        <div class="form_page_number"><span class="page_number"></span>/5</div>
                    </div>
                    <div class="form_style">
                        <div class="accordion_container">
                            <div class="accordion_wrap">
                                <h4>Interior</h4>
                                <div class="line_horizontal"></div>
                                <div class="plus_sign"></div>
                            </div>
                            <div class="accordion_content">
                                1 - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad doloribus accusamus
                                sint, quis ea aliquid, similique animi illo vero ipsa eius quos, magnam nisi nam
                                sapiente explicabo omnis repellendus expedita!
                            </div>
                            <div class="accordion_wrap">
                                <h4>Landscape1</h4>
                                <div class="line_horizontal"></div>
                                <div class="plus_sign"></div>
                            </div>
                            <div class="accordion_content">
                                2 - Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </div>
                            <div class="accordion_wrap">
                                <h4>Landscape2</h4>
                                <div class="line_horizontal"></div>
                                <div class="plus_sign"></div>
                            </div>
                            <div class="accordion_content">
                                3 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, quaerat dicta
                                nisi ullam non quod maiores dolorem id ex aliquam sequi exercitationem a officia ipsam
                                esse, labore, assumenda quas maxime commodi inventore. Veniam laborum culpa non illum
                                odio in quis illo consequatur, facilis placeat id voluptate ipsum assumenda aspernatur
                                quibusdam?
                            </div>
                            <div class="accordion_wrap">
                                <h4>Landscape3</h4>
                                <div class="line_horizontal"></div>
                                <div class="plus_sign"></div>
                            </div>
                            <div class="accordion_content">
                                4 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, quaerat dicta
                                nisi ullam non quod maiores dolorem id ex aliquam sequi exercitationem.
                            </div>
                        </div>
                    </div>
                </div>
                <!--Form 3-->
                <div class="form_wrap">
                    <div class="form_title">
                        <h1>Tell us about the&nbsp;project</h1>
                        <div class="form_page_number"><span class="page_number"></span>/5</div>
                    </div>
                    <div class="form_style">
                        <div class="line pb-30"></div>
                        <!--attached files-->
                        <div class="attached_files_container">
                            <div id="attached_files_render" class="attached_files_render"></div>
                            <div class="hidden_file_input">
                                <input type="file" id="files_input" name="files_input" />
                            </div>
                        </div>
                        <div class="line"></div>
                    </div>
                </div>
                <!--Form 4-->
                <div class="form_wrap">
                    <div class="form_title">
                        <h1>What's your budget?</h1>
                        <div class="form_page_number"><span class="page_number"></span>/5</div>
                    </div>
                    <div class="form_style">
                        <div class="slider_container">
                            <div id="slider_value" class="slider_value"></div>
                            <input type="range" min="20" max="100" value="90" class="slider" id="slider_range" name="slider_range">
                            <div class="slider_number_default">
                                <h4>$20K</h4>
                                <h4>$100k</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Form 5-->
                <div class="form_wrap">
                    <div class="form_title">
                        <h1>Lastly</h1>
                        <div class="form_page_number"><span class="page_number"></span>/5</div>
                    </div>
                    <div class="form_style">
                        <!--field 1-->
                        <label class="input_txt_label">What's your ideal timeframe?</label>
                        <div class="input_field">
                            <input type="text" id="timeframe" name="timeframe" class="input_txt">
                            <div class="input_txt_effect">DD/MM/YY</div>
                        </div>
                        <!--field 2-->
                        <label class="input_txt_label">How did you hear from us?</label>
                        <div class="input_field">
                            <input type="text" id="word" name="word" class="input_txt">
                            <div class="input_txt_effect">Word of mouth</div>
                        </div>
                    </div>
                </div>
            </form>
            <!--CTA section-->
            <div class="cta_section">
                <button class="btn_cta" id="btn_back">Back</button>
                <button class="btn_cta" id="btn_next">Next</button>
            </div>
        </div>

        <?php } ?>

    </div>
</main>
