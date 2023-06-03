document.addEventListener("DOMContentLoaded", function () {
	setTimeout(function () {
		try {
			removeClassOnClick('.close_jobdesc', 'active_pop', '.job_desc');

			removeClassOnClick('.close_jobdesc', 'disabled_scroll', 'html');

			removeClassOnClick('.close_jobdesc', 'disabled_scroll', 'body');

		} catch {
			console.error('removeClassOnClick is not working!');
		}
		try {
			swiperRun();
		} catch {
			console.error('swiperRun is not working!');
		}
		try {
			openPopup('.apply_career');
		} catch {
			console.error('openPopup is not working!');
		}
		try {
			addLabelFocusListeners();
		} catch {
			console.error('addLabelFocusListeners is not working!');
		}
		try {
			toggleClassOnClick('.award_content_mobile .align-underline', 'active')
		} catch {
			console.error('toggleClassOnClick is not working!');
		}
		try {
			toggleClassOnDataId('project_submenu', 'active_submenu');
		} catch {
			console.error('toggleClassOnDataId is not working!');
		}
		try {
			header();
		} catch {
			console.error('Header is not working!');
		}
		try {
			hero();
		} catch {
			console.error('hero is not working!');
		}
		try {
			loader();
		} catch {
			console.error('loader is not working!');
		}
		try {
			swiper();
		} catch {
			console.error('swiper is not working!');
		}
		try {
			scrollTrigger();
		} catch {
			console.error('scrollTrigger is not working!');
		}
		try {
			hover();
		} catch {
			console.error('scrollTrigger is not working!');
		}
		try {
			window.addEventListener("scroll", reveal);
		} catch {
			console.error('reveal is not working!');
		}
		try {
			makeSliderDraggable('.slider1', 'horizontal', 1);
			makeSliderDraggable('.slider2', 'horizontal', 2);
			makeSliderDraggable('.slider3', 'horizontal', 3);
		} catch {
			console.error('makeSliderDraggable is not working!');
		}
	}, 500)
});