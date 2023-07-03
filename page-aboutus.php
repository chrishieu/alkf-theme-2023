<?php
// Template Name: About us
global $post;
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="Cache-control" content="no-cache" />
	<link rel="icon" type="image/png" href="<?php echo get_theme_file_uri('/www/fav.png'); ?>" />
	<link rel="stylesheet" href="<?php echo get_theme_file_uri('/www/asset/font/graphiklcg/style.css'); ?>" />
	<link rel="stylesheet" href="<?php echo get_theme_file_uri('/www/css/header/responsive.css'); ?>" />
	<link rel="stylesheet" href="<?php echo get_theme_file_uri('/www/css/footer/responsive.css'); ?>" />
	<link rel="stylesheet" href="<?php echo get_theme_file_uri('/www/css/custom.css'); ?>" />
	<title>ALKF - ABOUT US</title>
</head>

<body>
  <?php include get_stylesheet_directory()."/our-blocks/header.php"; ?>
	<main class="main">
		<div class="alkf_project_aboutUs">
			<div class="container">
				<!-- head title -->
				<div class="alkf_aboutUs_section alkf_aboutUs_sec_1 reveal">
					<div class="alkf_aboutUs_title">
						<h1 class="title_h1">
							<?php echo get_field('headline', $post); ?>
						</h1>
					</div>
					<div class="alkf_aboutUs_banner sh_100img hover_mouse">
						<?php $hero_image = get_field('hero_image', $post); ?>
						<img src="<?php echo $hero_image['url']; ?>" />
					</div>
				</div>
				<div class="about_us_content reveal">
					<!-- ok -->
					<div class="alkf_aboutUs_section alkf_aboutUs_sec_2 reveal">
						<div class="alkf_aboutUs_main_contents">
							<div class="col_text">
								<div class="text_top">
									<p><?php echo get_field('highlight_title', $post); ?></p>
								</div>
								<div class="text_bot">
									<p><?php echo get_field('highlight_text', $post); ?></p>
								</div>
							</div>
							<div class="col_img">
								<?php $highlight_image = get_field('highlight_image', $post); 
									$img_type = array('st', 'nd', 'rd');
								?>
								<?php foreach($highlight_image as $i => $img): ?>
								<div class="img_<?php echo $img_type[$i]; ?>">
									<img src="<?php echo $img['sizes']['4_6_small']; ?>" />
								</div>
								<?php endforeach; ?>
							</div>
							
						</div>
					</div>
					<div class="alkf_block_slider_about reveal">
						<div class="alkf_insights_slider text">
							<div class="slider1">
								<div class="slider-container insightSlider">
									<?php foreach($highlight_image as $i => $img): ?>
									<div class="item item_small">
										<div class="img">
											<img src="<?php echo $img['sizes']['4_6_small']; ?>" alt="" title="">
										</div>
									</div>
									<?php endforeach; ?>
								</div>
							</div>
						</div>
					</div>
					<div class="aboutUs_text_atMob">
						<p><?php echo get_field('highlight_title', $post); ?></p>
					</div>
					<!-- ok -->

					<!-- add -->
					<?php 
					$quote_author_image = get_field('quote_author_image', $post); 
					$quote_author_image_2 = get_field('quote_author_image_2', $post); 
					?>
					<div class="alkf_mobile_text_2 alkf_career_section alkf_career_sec_2 reveal">
						<div class="alkf_career_about pd_bot277">
							<div class="alkf_career_about_img text hide_on_mobile">
								<div class="mobile_career_founder">
									<img src="<?php echo $quote_author_image['sizes']['4_6_small']; ?>" />
								</div>
							</div>

							<div class="alkf_career_about_contents hide_on_mobile text">
								<div class="alkf_career_main_contents">
									<p><?php echo get_field('quote_text', $post); ?></p>
								</div>
								<div class="alkf_career_name pd_top120 hide_on_mobile text">
									<p><?php echo get_field('quote_author', $post); ?>, <?php echo get_field('quote_author_position', $post); ?></p>
								</div>
							</div>
						</div>
					</div>
					<div class="founder_mob hide_on_desktop border_bottom">
						<div class="dl_grid">
							<div class="img_fd">
								<img src="<?php echo $quote_author_image['sizes']['4_6_small']; ?>" />
							</div>
                            <div class="alkf_career_about_contents text">
                                <div class="alkf_career_main_contents">
	                                <?php echo get_field('quote_text', $post); ?>
                                <div>
                                <div class="alkf_career_name pd_top120 text">
                                    <p>
		                                <?php
		                                $quote_author = get_field('quote_author', $post);
		                                $quote_author_position = get_field('quote_author_position', $post);
		                                echo $quote_author . ', ' . $quote_author_position;
		                                ?>
                                    </p>
                                </div>
                            </div>
						</div>
<!--						<div class="dl_grid">-->
<!--							<div class="empty"></div>-->
<!--							<div class="img_fd">-->
<!--								<img src="--><?php //echo $quote_author_image_2['sizes']['4_6_small']; ?><!--" />-->
<!--							</div>-->
<!--						</div>-->
					</div>

					<?php $quote_image = get_field('quote_image', $post); ?>
					<div class="alkf_mobile_text_3 alkf_career_section alkf_career_sec_3 reveal hide_on_mobile">
						<div class="alkf_career_banner sh_797 pd_bot112 text border_bottom">
							<img src="<?php echo $quote_image['sizes']['16_9_medium']; ?>" />
						</div>
					</div>

					<div class="alkf_mobile_text_4 alkf_career_section alkf_career_sec_4 reveal">
						<div class="alkf_career_about pd_bot277 text">
							<div class="alkf_career_about_contents">
								<div class="alkf_career_strategies">
									<div class="strategies_title">
										<p><?php echo get_field('quote_title_2', $post); ?></p>
									</div>
									<div class="strategies_des pd_bot48">
										<p><?php echo get_field('quote_brief_2', $post); ?></p>
									</div>
                                    <div class="img_fd hide_on_desktop">
                                        <img src="<?php echo $quote_author_image_2['sizes']['4_6_small']; ?>" />
                                    </div>
								</div>
								<!-- <div class="alkf_career_about_img hide_on_desktop">
									<img src="./asset/image/career/founder-2.jpg" />
								</div> -->
								<div class="alkf_career_main_contents alkf_career_main_strategies">
									<p><?php echo get_field('quote_text_2', $post); ?></p>
								</div>
								<div class="alkf_career_name pd_top120">
									<p><?php echo get_field('quote_author_2', $post); ?></p>
								</div>
							</div>
							<div class="alkf_career_about_img hide_on_mobile">
								<img src="<?php echo $quote_author_image_2['sizes']['4_6_small']; ?>" />
							</div>
						</div>
						<?php $quote_banner_mobile = get_field('quote_banner_mobile', $post); ?>
						<div class="alkf_mobile_text_3 alkf_career_section alkf_career_sec_3 reveal hide_on_desktop">
							<div class="alkf_career_banner sh_797 pd_bot112 text">
								<img src="<?php echo $quote_banner_mobile['sizes']['4_6_small']; ?>" />
							</div>
						</div>
						<div class="vision-row text">
							<?php foreach(get_field('quote_vision_2', $post) as $item): ?>
							<div class="col-4">
								<div class="vision-item">
									<div class="number"><?php echo $item['number']; ?></div>
									<div class="txt"><?php echo $item['text']; ?></div>
									<img class="line" src="<?php echo get_theme_file_uri('/www/asset/image/line-curve.png'); ?>" alt="" />
								</div>
							</div>
							<?php endforeach; ?>
						</div>
					</div>

					<?php $quote_author_image_3 = get_field('quote_author_image_3', $post); ?>
					<div class="alkf_mobile_text_5 alkf_career_section alkf_career_sec_5 reveal">
						<div class="alkf_career_about pd_bot277 text">
							<div class="alkf_career_about_img text hide_on_mobile">
								<img src="<?php echo $quote_author_image_3['sizes']['4_6_small']; ?>" />
							</div>
							<div class="alkf_career_about_contents">
								<div class="alkf_career_strategies">
									<div class="strategies_title people_diff_title">
										<p><?php echo get_field('quote_title_3', $post); ?></p>
									</div>
									<div class="strategies_des pd_bot48 ">
										<p><?php echo get_field('quote_brief_3', $post); ?></p>
									</div>
                                    <div class="alkf_career_about_img hide_on_desktop">
                                        <img src="<?php echo $quote_author_image_2['sizes']['4_6_small']; ?>" />
                                    </div>
								</div>
								<div class="alkf_career_main_contents alkf_career_people_contents  pd_top48 ">
									<p><?php echo get_field('quote_text_3', $post); ?></p>
								</div>
								<div class="alkf_career_name pd_top120 ">
									<p><?php echo get_field('quote_author_3', $post); ?></p>
								</div>
							</div>
						</div>
					</div>

					<?php $quote_image_3 = get_field('quote_image_3', $post); ?>
					<div class="alkf_career_section alkf_career_sec_6 reveal">
						<div class="text alkf_career_banner sh_797 pd_bot112 border_bottom">
							<img src="<?php echo $quote_image_3['sizes']['16_9_medium']; ?>" />
						</div>
					</div>
					<!-- end add new -->
					<div class="alkf_aboutUs_section alkf_aboutUs_sec_4 reveal">
						<div class="alkf_aboutUs_people text">
							<?php 
							$bod = get_field('bod', $post); 
							$bod1 = $bod2 = array();
							if(count($bod) <= 2) {
								$bod1 = $bod;
							} else {
								$bod1 = array($bod[0], $bod[1]);
								unset($bod[0]);
								unset($bod[1]);
								$bod2 = array_chunk($bod, 4);
							}
							?>
							<!-- s1 -->
							<div class="alkf_people alkf_people_s1 pd_top87 alkf_grid_1_1 hover_mouse">
								<div class="alkf_people_50">
									<div class="alkf_title">
										<span class="align-underline active hover_mouse text">
											Our People
											<img class="line" src="<?php echo get_theme_file_uri('/www/asset/image/line-home5.png'); ?>" alt="">
										</span>
									</div>
									<div class="alkf_role text">
										<p>Board of Directors</p>
									</div>
								</div>
								<div class="alkf_people_50 alkf_grid_1_1">
									<?php foreach( $bod1 as $item): ?>
									<div class="alkf_img">
										<img src="<?php echo $item['avatar']['sizes']['1_1_xs_small']; ?>" />
										<div class="about_name_alkf">
											<ul>
												<li class="name"><?php echo $item['name']; ?></li>
												<li class="level"><?php echo $item['position']; ?></li>
												<li class="qualification"><?php echo $item['bio']; ?>
												</li>
											</ul>
										</div>
									</div>
									<?php endforeach; ?>
								</div>
							</div>
							<!-- s2 -->
							<?php if(count($bod2) > 0): ?>
								<?php foreach($bod2 as $big_4): $small_2 = array_chunk($big_4, 2); ?>
								<div class="alkf_people alkf_people_s2 pd_top26 alkf_grid_1_1 hover_mouse">
									<?php foreach($small_2 as $dou): ?>
									<div class="alkf_people_50 alkf_grid_1_1">
										<?php foreach($dou as $item): ?>
										<div class="alkf_img">
											<img src="<?php echo $item['avatar']['sizes']['1_1_xs_small']; ?>" />
											<div class="about_name_alkf">
												<ul>
													<li class="name"><?php echo $item['name']; ?></li>
													<li class="level"><?php echo $item['position']; ?></li>
													<li class="qualification"><?php echo $item['bio']; ?>
												</ul>
											</div>
										</div>
										<?php endforeach; ?>
									</div>
									<?php endforeach; ?>
								</div>
								<?php endforeach; ?>
							<?php endif; ?>
							<!-- s3 -->
							<?php 
							$directors = get_field('directors', $post); 
							$directors1 = $directors2 = array();
							if(count($directors) <= 2) {
								$directors1 = $directors;
							} else {
								$directors1 = array($directors[0], $directors[1]);
								unset($directors[0]);
								unset($directors[1]);
								$directors2 = array_chunk($directors, 4);
							}
							?>
							<div class="alkf_people alkf_people_s3 pd_top239 alkf_grid_1_1 hover_mouse">
								<div class="alkf_people_50 alkf_grid_1_2">
									<div class="alkf_role text max_content">
										<p>Deputy Directors</p>
									</div>
									<div class="alkf_role text min_content">
										<p class="alkf_role_before">Associate Directors</p>
									</div>
								</div>
								<div class="alkf_people_50 alkf_grid_1_1">
									<?php foreach( $directors1 as $item): ?>
									<div class="alkf_img">
										<img src="<?php echo $item['avatar']['sizes']['1_1_xs_small']; ?>" />
										<div class="about_name_alkf">
											<ul>
												<li class="name"><?php echo $item['name']; ?></li>
												<li class="level"><?php echo $item['position']; ?></li>
												<li class="qualification"><?php echo $item['bio']; ?>
												</li>
											</ul>
										</div>
									</div>
									<?php endforeach; ?>
								</div>
							</div>
							<!-- s4 -->
							<?php if(count($directors2) > 0): ?>
								<?php foreach($directors2 as $big_4): $small_2 = array_chunk($big_4, 2); ?>
								<div class="alkf_people alkf_people_s2 pd_top26 alkf_grid_1_1 hover_mouse">
									<?php foreach($small_2 as $dou): ?>
									<div class="alkf_people_50 alkf_grid_1_1">
										<?php foreach($dou as $item): ?>
										<div class="alkf_img">
											<img src="<?php echo $item['avatar']['sizes']['1_1_xs_small']; ?>" />
											<div class="about_name_alkf">
												<ul>
													<li class="name"><?php echo $item['name']; ?></li>
													<li class="level"><?php echo $item['position']; ?></li>
													<li class="qualification"><?php echo $item['bio']; ?>
												</ul>
											</div>
										</div>
										<?php endforeach; ?>
									</div>
									<?php endforeach; ?>
								</div>
								<?php endforeach; ?>
							<?php endif; ?>
							<!-- s5 -->
							<?php 
							$senior_associates = get_field('senior_associates', $post); 
							$senior_associates1 = $senior_associates2 = array();
							if(count($senior_associates) <= 2) {
								$senior_associates1 = $senior_associates;
							} else {
								$senior_associates1 = array($senior_associates[0], $senior_associates[1]);
								unset($senior_associates[0]);
								unset($senior_associates[1]);
								$senior_associates2 = array_chunk($senior_associates, 4);
							}
							?>
							<div class="alkf_people alkf_people_s5 pd_top239 alkf_grid_1_1 hover_mouse">
								<div class="alkf_people_50"></div> <!-- div col hide -->
								<div class="alkf_people_50 ">
									<div class="alkf_role max_width_321 pd_bot115 text">
										<p>Senior Associates</p>
									</div>
									<div class="alkf_grid_1_1 pd_top115">
										<?php foreach( $senior_associates1 as $item): ?>
										<div class="alkf_img">
											<img src="<?php echo $item['avatar']['sizes']['1_1_xs_small']; ?>" />
											<div class="about_name_alkf">
												<ul>
													<li class="name"><?php echo $item['name']; ?></li>
													<li class="level"><?php echo $item['position']; ?></li>
													<li class="qualification"><?php echo $item['bio']; ?>
													</li>
												</ul>
											</div>
										</div>
										<?php endforeach; ?>
									</div>
								</div>
							</div>
							<?php if(count($senior_associates2) > 0): ?>
								<?php foreach($senior_associates2 as $big_4): $small_2 = array_chunk($big_4, 2); ?>
								<div class="alkf_people alkf_people_s2 pd_top26 alkf_grid_1_1 hover_mouse">
									<?php foreach($small_2 as $dou): ?>
									<div class="alkf_people_50 alkf_grid_1_1">
										<?php foreach($dou as $item): ?>
										<div class="alkf_img">
											<img src="<?php echo $item['avatar']['sizes']['1_1_xs_small']; ?>" />
											<div class="about_name_alkf">
												<ul>
													<li class="name"><?php echo $item['name']; ?></li>
													<li class="level"><?php echo $item['position']; ?></li>
													<li class="qualification"><?php echo $item['bio']; ?>
												</ul>
											</div>
										</div>
										<?php endforeach; ?>
									</div>
									<?php endforeach; ?>
								</div>
								<?php endforeach; ?>
							<?php endif; ?>
							<!-- s6 -->
							<?php 
							$deputy_director = get_field('deputy_director', $post); 
							$deputy_director1 = $deputy_director2 = array();
							if(count($deputy_director) <= 2) {
								$deputy_director1 = $deputy_director;
							} else {
								$deputy_director1 = array($deputy_director[0], $deputy_director[1]);
								unset($deputy_director[0]);
								unset($deputy_director[1]);
								$deputy_director2 = array_chunk($deputy_director, 4);
							}
							?>
							<div class="alkf_people alkf_people_s6 pd_top115 alkf_grid_1_1 hover_mouse">
								<div class="alkf_people_50">
									<div class="alkf_grid_1_2">
										<div class="alkf_role text">
											<p>Technical Directors</p>
										</div>
										<div class="alkf_role max_width_457 text">
											<p class="alkf_role_before">Deputy Technical Directors</p>
										</div>
									</div>
									<div class="alkf_grid_1_1 pd_top106">
										<?php foreach( $deputy_director1 as $item): ?>
										<div class="alkf_img">
											<img src="<?php echo $item['avatar']['sizes']['1_1_xs_small']; ?>" />
											<div class="about_name_alkf">
												<ul>
													<li class="name"><?php echo $item['name']; ?></li>
													<li class="level"><?php echo $item['position']; ?></li>
													<li class="qualification"><?php echo $item['bio']; ?>
													</li>
												</ul>
											</div>
										</div>
										<?php endforeach; ?>
									</div>
								</div>
								<div class="alkf_people_50"></div> <!-- div col hide -->
							</div>
							<?php if(count($deputy_director2) > 0): ?>
								<?php foreach($deputy_director2 as $big_4): $small_2 = array_chunk($big_4, 2); ?>
								<div class="alkf_people alkf_people_s2 pd_top26 alkf_grid_1_1 hover_mouse">
									<?php foreach($small_2 as $dou): ?>
									<div class="alkf_people_50 alkf_grid_1_1">
										<?php foreach($dou as $item): ?>
										<div class="alkf_img">
											<img src="<?php echo $item['avatar']['sizes']['1_1_xs_small']; ?>" />
											<div class="about_name_alkf">
												<ul>
													<li class="name"><?php echo $item['name']; ?></li>
													<li class="level"><?php echo $item['position']; ?></li>
													<li class="qualification"><?php echo $item['bio']; ?>
												</ul>
											</div>
										</div>
										<?php endforeach; ?>
									</div>
									<?php endforeach; ?>
								</div>
								<?php endforeach; ?>
							<?php endif; ?>
							<!-- s7 -->
							<?php 
							$associates = get_field('associates', $post); 
							$associates1 = $associates2 = array();
							if(count($associates) <= 2) {
								$associates1 = $associates;
							} else {
								$associates1 = array($associates[0], $associates[1]);
								unset($associates[0]);
								unset($associates[1]);
								$associates2 = array_chunk($associates, 4);
							}
							?>
							<div class="alkf_people alkf_people_s7 pd_top82 pd_bot257 alkf_grid_1_1 hover_mouse">
								<div class="alkf_people_50"></div> <!-- div col hide -->
								<div class="alkf_people_50 ">
									<div class="alkf_role text">
										<p>Associates</p>
									</div>
									<div class="alkf_grid_1_1 pd_top82">
										<?php foreach( $associates1 as $item): ?>
										<div class="alkf_img">
											<img src="<?php echo $item['avatar']['sizes']['1_1_xs_small']; ?>" />
											<div class="about_name_alkf">
												<ul>
													<li class="name"><?php echo $item['name']; ?></li>
													<li class="level"><?php echo $item['position']; ?></li>
													<li class="qualification"><?php echo $item['bio']; ?>
													</li>
												</ul>
											</div>
										</div>
										<?php endforeach; ?>
									</div>
								</div>
							</div>
							<?php if(count($associates2) > 0): ?>
								<?php foreach($associates2 as $big_4): $small_2 = array_chunk($big_4, 2); ?>
								<div class="alkf_people alkf_people_s2 pd_top26 alkf_grid_1_1 hover_mouse">
									<?php foreach($small_2 as $dou): ?>
									<div class="alkf_people_50 alkf_grid_1_1">
										<?php foreach($dou as $item): ?>
										<div class="alkf_img">
											<img src="<?php echo $item['avatar']['sizes']['1_1_xs_small']; ?>" />
											<div class="about_name_alkf">
												<ul>
													<li class="name"><?php echo $item['name']; ?></li>
													<li class="level"><?php echo $item['position']; ?></li>
													<li class="qualification"><?php echo $item['bio']; ?>
												</ul>
											</div>
										</div>
										<?php endforeach; ?>
									</div>
									<?php endforeach; ?>
								</div>
								<?php endforeach; ?>
							<?php endif; ?>
						</div>
					</div>

					<div class="alkf_aboutUs_section alkf_aboutUs_sec_5 reveal">
						<div class="alkf_aboutUs_our_awards">
							<div class="alkf_aboutUs_subtitle">
								<p>Our</p>
								<span class="align-underline active hover_mouse">
									Awards
									<img class="line" src="<?php echo get_theme_file_uri('/www/asset/image/line-home12.png'); ?>" alt="">
								</span>
							</div>
							<div class="alkf_aboutUs_main_contents">
								<?php foreach(get_field('award_list', $post) as $item): ?>
								<div class="awards_position">
									<div class="postion_year">
										<p><?php echo $item['year']; ?></p>
									</div>
									<div class="postion_name">
										<?php echo ($item['award_detail']); ?>
									</div>
								</div>
								<?php endforeach; ?>
							</div>
						</div>
					</div>
				</div>
				<div id="bg_overlay" class="background_overlay"></div>
			</div>
		</div>
	</main>
	<?php include get_stylesheet_directory()."/our-blocks/footer.php"; ?>
	<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
	<script type="text/javascript" src="<?php echo get_theme_file_uri('/www/js/global-function.js'); ?>"></script>
	<script type="text/javascript" src="<?php echo get_theme_file_uri('/www/js/initGlobal.js'); ?>"></script>
	<script type="text/javascript" src="<?php echo get_theme_file_uri('/www/js/initCursor.js'); ?>"></script>

</body>

</html>