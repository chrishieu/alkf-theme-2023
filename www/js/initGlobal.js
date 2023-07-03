// window.addEventListener('load', () => {
// 	try {
// 		header();
// 	} catch {
// 		console.error('Header scroll is not working!');
// 	}
// 	try {
// 		hero();
// 	} catch {
// 		console.error('Hero is not working!');
// 	}
// 	try {
// 		scrollTrigger();
// 	} catch {
// 		console.error('Scroll trigger is not working!');
// 	}
// 	try {
// 		hover();
// 	} catch {
// 		console.error('Hover is not working!');
// 	}
// 	try {
// 		swiper();
// 	} catch {
// 		console.error('Slide not work');
// 	}
// 	try {
// 		loader();
// 	} catch {
// 		console.error('Loader is not working!');
// 	}
// 	try{
// 		reveal();
// 	}catch{
// 		console.error('Reavel not working');
// 	}

//     window.addEventListener("scroll", reveal);
// })



document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
		try {
			removeClassOnClick('.close_jobdesc', 'active_pop','.job_desc');

			removeClassOnClick('.close_jobdesc', 'disabled_scroll','html');

			removeClassOnClick('.close_jobdesc', 'disabled_scroll','body');

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
			headerMenuPop();
		} catch {
			console.error('HeaderMenuPop is not working!');
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
			window.addEventListener("scroll", reveal);
		} catch {
			console.error('reveal is not working!');
		}
		try {
			displayFileName('.myuploadfile');
		} catch {
			console.error('displayFileName is not working!');
		}
		try {
			window.addEventListener("scroll", increaseOpacityOnScroll('bg_overlay', 0.1));
		} catch {
			console.error('increaseOpacityOnScroll is not working!');
		}
		try {
			makeSliderDraggable('.slider1', 'horizontal', 1);
			makeSliderDraggable('.slider2', 'horizontal', 2);  
			makeSliderDraggable('.slider3', 'horizontal', 3);  
			makeSliderDraggable('.slider4', 'horizontal', 4);  
		} catch {
			console.error('makeSliderDraggable is not working!');
		}
	},500)
});




    

   