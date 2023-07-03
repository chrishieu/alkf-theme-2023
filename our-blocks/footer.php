<?php 
$menuParameters = array(
	'menu' => 'side-menu',
	'container'       => false,
	'echo'            => false,
	'items_wrap'      => '%3$s',
	'depth'           => 0,
);
$links = strip_tags(wp_nav_menu( $menuParameters ), '<a>' );
$parts= preg_split('/(?=<a)|(?<=\/a>)/', trim($links));
$newparts = array();

foreach($parts as $i => $item) {
	if (trim($item) != '') {
		$newparts[] = $item;
	}
}

$project_parent_terms = get_terms( array(
	'taxonomy'   => 'group',
	'hide_empty' => true,
	'parent' => 0
) );

$excludeids = array();
foreach($project_parent_terms as $item) {
	$excludeids[] = $item->term_id;
}

$project_child_terms = get_terms( 'group', array( 'exclude'  => $excludeids) );


?>

<div class="job_desc popup_menu_work" data-id="pop_menu_work">
	<button class="close_jobdesc close_popMenuWork"><img src="<?php echo get_theme_file_uri('/www/asset/image/icon-close.svg'); ?>" alt=""></button>
	<div class="full_showSection">
		<header class="header headerMenuPopJS">
			<div class="container">
				<div class="header-wrap">
					<div class="header-quote">
						<a href="<?php echo get_home_url(); ?>" class="header-logo">
							<img src="<?php echo get_theme_file_uri('/www/asset/image/logo-header.svg'); ?>" alt="" />
						</a>
						<p>Design built on legacy</p>
					</div>
					<div class="header-cta">
						<a role="button" class="apply_career menu_pop_work" data-id="pop_menu_work">Works</a>
					</div>
					<div class="header-btn">
						<div class="header-search">
							<form action="#" method="get">
								<label class="header-search-wrap">
									<div class="header-search-icon">
										<?php $search_link = get_field('search_link', 'options'); ?>
										<a href="<?php echo $search_link['url']; ?>">
											<img src="<?php echo get_theme_file_uri('/www/asset/image/icon-search.svg'); ?>" alt="" />
										</a>
									</div>
									<input type="search" name="s" class="rs-form header-search-inp"
										placeholder="" />
									<?php echo $newparts[1]; ?>
								</label>
							</form>
						</div>

						<div class="header-lang">
							<span class="lang-active">EN</span>
							<div class="lang-list">
								<a href="#" class="lang-item">FR</a>
								<a href="#" class="lang-item">VN</a>
							</div>
						</div>

						<div class="header-menu-btn headerMenuPopOpen">
							<div class="line"></div>
							<div class="line"></div>
							<div class="line"></div>
							<div class="line"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="header-menu">
				<div class="container">
					<div class="header-menu-wrap">
						<div class="header-menu-left">
							<div class="header-menu-close headerClose">
								<img src="<?php echo get_theme_file_uri('/www/asset/image/icon-close.svg'); ?>" alt="" />
							</div>
							<div class="header-menu-info">
								<div class="title-h2">Contact</div>
								<div class="content">
									<a href="mailto:architect@alkf.com">architect@alkf.com</a>
									<a href="#">(852) 2525 0008</a>
								</div>
							</div>
							<div class="header-menu-info">
								<div class="title-h2">Office</div>
								<div class="content">
									<a href="https://goo.gl/maps/zJvfad9Frf4UT2yw5">
									19/F, Universal Trade Centre <br />
									3 Arbuthnot Road <br />
									Central, Hong Kong
									</a>
								</div>
							</div>
						</div>
						<div class="header-menu-right">
							<div class="menu">
								<?php
								wp_nav_menu(
									array(
										'menu' => 'main-menu',
										'container' => '',
									));
								?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<div class="content_menu_works">
			<ul class="col_st">
				<?php foreach($project_parent_terms as $item): ?>
					<li><a href="<?php echo get_term_link($item); ?>"><?php echo $item->name; ?></a></li>
				<?php endforeach; ?>
			</ul>
			<ul class="col_nd">
				<?php foreach($project_child_terms as $item): ?>
					<li><a href="<?php echo get_term_link($item); ?>"><?php echo $item->name; ?></a></li>
				<?php endforeach; ?>
			</ul>
			<ul class="col_rd">
				<li><?php echo $newparts[0]; ?></li>
			</ul>
		</div>
	</div>
</div>

<footer class="footer">
	<div class="container">
		<div class="footer-row section-pri">
			<div class="col-4">
				<div class="title-h2">Join us.</div>
			</div>
			<div class="col-4">
				<div class="footer-info">
					<div class="title-h2">
						<span class="align-underline active">
							Contact
							<img src="<?php echo get_theme_file_uri('/www/asset/image/line-home12.png'); ?>" alt="" class="line" />
						</span>
					</div>
					<div class="content">
						<a href="mailto:architect@alkf.com">architect@alkf.com</a>
						<a href="#">(852) 2525 0008</a>
					</div>
				</div>
			</div>
			<div class="col-4">
				<div class="footer-info">
					<div class="title-h2">
						<span class="align-underline active">
							Office
							<img src="<?php echo get_theme_file_uri('/www/asset/image/line-home13.png'); ?>" alt="" class="line" />
						</span>
					</div>
					<div class="content">
						<a href="https://goo.gl/maps/zJvfad9Frf4UT2yw5">
							19/F, Universal Trade Centre <br />
							3 Arbuthnot Road <br />
							Central, Hong Kong
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="footer-copyright">
				© 2022 Andrew Lee King Fun & Associates Architects Ltd.
			</div>
			<div class="footer-url">
				<a href="#"> Back to top</a>
				<a href="#"> Policy</a>
				<a href="#"> Site by Align</a>
			</div>
		</div>
	</div>
</footer>