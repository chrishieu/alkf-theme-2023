<?php 
$menuParameters = array(
	'menu' => 'side-menu',
	'container'       => false,
	'echo'            => false,
	'items_wrap'      => '%3$s',
	'depth'           => 0,
);
$links = strip_tags(wp_nav_menu( $menuParameters ), '<a>' );
$parts1= preg_split('/(?=<a)|(?<=\/a>)/', trim($links));
$parts = array_values(array_filter($parts1, fn($value) => !is_null(trim($value)) && trim($value) !== ''));
$newparts = array();

$new_effect_for_menu = ' role="button" class="apply_career menu_pop_work" data-id="pop_menu_work" ';

foreach($parts as $i => $item) {
	if (trim($item) != '') {
		if ($i == 0) {
			$item = substr_replace($item, $new_effect_for_menu, 2, 0); 
		}
		$newparts[] = $item;
	}
}
?>
<header class="header headerJS">
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
							<input type="search" name="s" class="rs-form header-search-inp" placeholder="" />
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

				<div class="header-menu-btn headerOpen">
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
					<div>
						<a href="<?php echo get_home_url(); ?>" class="header-logo">
							<img src="<?php echo get_theme_file_uri('/www/asset/image/logo-header.svg'); ?>" alt="" />
						</a>
					</div>
					<div class="header-menu-close headerClose">
						<img src="<?php echo get_theme_file_uri('/www/asset/image/icon-close.svg'); ?>" alt="" />
					</div>
					<div class="header-menu-info">
						<div class="title-h2">Contact</div>
						<div class="content">
							<a href="#">architect@alkf.com</a>
							<a href="#">(852) 2525 0008</a>
						</div>
					</div>
					<div class="header-menu-info">
						<div class="title-h2">Office</div>
						<div class="content">
							19/F, Universal Trade Centre <br />
							3 Arbuthnot Road <br />
							Central, Hong Kong
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
<div class="align-loader loaderJS"></div>
<div class="cursor-follow">
	<div class="cursor-view">
		<span>
			View
		</span>
	</div>
	<div class="cursor-click">
		<div class="cursor-inner">
			<span class="cursor-text">
				<span class="js-cursor-text">Click</span>
				<span class="js-cursor-text__clone">Click</span>
			</span>
		</div>
	</div>
	<div class="cursor-drag">
		<div class="cursor-inner">
			<span class="cursor-text">
				<span class="js-cursor-text">Drag</span>
				<span class="js-cursor-text__clone">Drag</span>
			</span>
		</div>
	</div>
	<div class="cursor-soon">
		<span>
			Soon
		</span>
	</div>
</div>