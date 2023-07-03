'use strict';
(function () {
    function openPopup(className) {
        const elements = document.querySelectorAll(`${className}`);
        // Add event listener to elements with the specified class name
        if (elements) {
            elements.forEach((element) => {
                element.addEventListener('click', () => {
                    const dataId = element.getAttribute('data-id');
                    openPopupWithDataId(dataId, "active_pop");
                });
            });
        }
    }

    function openPopupWithDataId(dataId, className) {
        // Get all elements with the specified data-id
        const elements = document.querySelectorAll(`[data-id="${dataId}"]`);
        const web = document.querySelector('html, body');
        // Iterate over each element and open the popup
        if (elements) {
            elements.forEach((element) => {
                element.classList.add(className); // Add the specified class to show the popup
                web.classList.add("disabled_scroll");
            });
        }
    }

    function removeClassOnClick(selector, className, whereToRemove) {
        const elements = document.querySelectorAll(selector);

        if (elements.length > 0) {
            elements.forEach((element) => {
                element.addEventListener("click", function () {
                    const elementsToRemove = document.querySelectorAll(whereToRemove);

                    elementsToRemove.forEach((elToRemove) => {
                        elToRemove.classList.remove(className);
                    });
                });
            });
        }
    }

    function addLabelFocusListeners(parentSelector, inputSelector, labelSelector, focusClassName) {
        const parents = document.querySelectorAll(parentSelector);

        if (parents.length > 0) {
            parents.forEach(function (parent) {
                const input = parent.querySelector(inputSelector);
                const label = parent.querySelector(labelSelector);

                if (input && label) {
                    input.addEventListener('focus', function () {
                        label.classList.add(focusClassName);
                    });

                    input.addEventListener('blur', function () {
                        if (input.value.trim() === '') {
                            label.classList.remove(focusClassName);
                        }
                    });
                }
            });
        }
    }

    function toggleClassOnDataId(className, classToAdd) {
        const elements = document.getElementsByClassName(className);
        let activeElementId = null;
        if (elements) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].addEventListener('click', function () {
                    const clickedElement = event.target;
                    const clickedElementId = clickedElement.id;

                    const dataIdElement = document.querySelector(`[data-id="${clickedElementId}"]`);
                    if (dataIdElement) {
                        if (activeElementId && activeElementId !== clickedElementId) {
                            const activeElement = document.querySelector(`[data-id="${activeElementId}"]`);
                            if (activeElement) {
                                activeElement.classList.remove(classToAdd);
                            }
                        }

                        dataIdElement.classList.toggle(classToAdd);
                        activeElementId = clickedElementId;
                    }
                });
            }
        }
    }



    function toggleClassOnClick(className, toggleClassName) {
        const elements = document.querySelectorAll(`${className}`);
        if (elements) {
            elements.forEach(element => {
                element.addEventListener('click', () => {
                    const target = element.dataset.id;
                    const removeClass = document.querySelectorAll('div:not([data-id="${target}"])');
                    removeClass.forEach(element => {
                        element.classList.remove(toggleClassName);
                    });
                    if (target) {
                        const siblings = document.querySelector(`div[data-id="${target}"]`);
                        if (siblings) {
                            siblings.classList.add(toggleClassName);
                        }
                    }
                });
            });
        }
    }

    function checkScreen() {
        const screenWidth = screen.width;
        const viewportWidth = window.innerWidth;
        const effectiveWidth = Math.min(screenWidth, viewportWidth);

        let deviceType = '';
        if (effectiveWidth < tbt_tablet) {
            deviceType = 'Mobile';
        } else if (effectiveWidth >= tbt_tablet && effectiveWidth < tbt_desktop) {
            deviceType = 'Tablet';
        } else {
            deviceType = 'Desktop';
        }

        let osType = '';
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.indexOf('win') != -1) {
            osType = 'Windows';
        } else if (userAgent.indexOf('mac') != -1) {
            osType = 'macOS';
        } else if (userAgent.indexOf('linux') != -1) {
            osType = 'Linux';
        } else if (userAgent.indexOf('android') != -1) {
            osType = 'Android';
        } else if (userAgent.indexOf('ios') != -1 || userAgent.indexOf('iphone') != -1) {
            osType = 'iOS';
        }

        return {
            width: effectiveWidth,
            device: deviceType,
            os: osType
        };
    }

    function header() {
        const header = document.querySelector('.headerJS');
        if (header) {
            const open = header.querySelector('.headerOpen');
            const close = header.querySelector('.headerClose');

            open.addEventListener('click', () => {
                header.classList.add('menu-open');
                document.querySelector('body').classList.add('no-scroll');
            });
            close.addEventListener('click', () => {
                header.classList.remove('menu-open');
                document.querySelector('body').classList.remove('no-scroll');
            });
        }
    }

    function headerMenuPop() {
        const header = document.querySelector('.headerMenuPopJS');
        console.log("ha")
        if (header) {
            console.log("hi")
            const open = header.querySelector('.headerMenuPopOpen');
            const close = header.querySelector('.headerClose');

            open.addEventListener('click', () => {
                header.classList.add('menu-open');
                document.querySelector('body').classList.add('no-scroll');
            });
            close.addEventListener('click', () => {
                header.classList.remove('menu-open');
                document.querySelector('body').classList.remove('no-scroll');
            });
        }
    }

    function hero() {
        const hero = document.querySelector('.heroJS');
        if (hero) {
            const image = hero.querySelector('.heroImg');
            const bannerText = hero.querySelector('.hero-top h1');
            const minW = image.offsetWidth;
            const minH = image.offsetHeight;

            console.log(minW);
            console.log(minH);

            const wrapper = hero.querySelector('.heroWrapper');
            wrapper.style.height =
                wrapper.offsetHeight + (wrapper.offsetHeight - minH) + 100 + 'px';

            let speed = 0.08;
            const offset = {
                W: 0,
                H: 0,
            };

            function expand() {
                offset.H += (window.pageYOffset - offset.H) * speed;
                offset.W += (window.pageYOffset - offset.W) * speed;
                if (offset.H <= window.innerHeight - minH) {
                    image.style.width = minW + offset.W + 100 + 'px';
                    image.style.height = minH + offset.H + 'px';
                    bannerText.classList.remove('hide_text');
                } else {
                    offset.H = window.innerHeight - minH;
                    offset.W = window.innerWidth - minW;
                    bannerText.classList.add('hide_text');
                }

                const animate = requestAnimationFrame(expand);
            }
            expand();
        }
    }

    function hover() {
        const hover = document.querySelectorAll('.align-hover');
        const cursor = {
            X: 0,
            Y: 0,
        };
        const pos = {
            top: 0,
            left: 0,
        };
        const speed = 0.08;
        hover.forEach((el) => {
            el.addEventListener('mousemove', (e) => {
                cursor.X = e.offsetX;
                cursor.Y = e.offsetY;
                el.classList.add('is-hover');
            });
            el.addEventListener('mouseleave', () => {
                el.classList.remove('is-hover');
            });
        });

        function follow() {
            pos.top += (cursor.Y - pos.top) * speed;
            pos.left += (cursor.X - pos.left) * speed;

            document.documentElement.style.setProperty('--hoverTop', `${pos.top}px`);
            document.documentElement.style.setProperty('--hoverLeft', `${pos.left}px`);

            const animate = requestAnimationFrame(follow);
        }
        follow();
    }


    function loader() {
        const loader = document.querySelector('.loaderJS');
        if (loader) {
            loader.classList.add('hide');
        }
    }

    function makeSliderDraggable(slide, direction = 'horizontal', scrollSpeed = 3) {
        const slider = document.querySelector(slide);
        if (slider) {
            let isDown = false;
            let start;
            let scrollStart;

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                start = direction === 'horizontal' ? e.pageX : e.pageY;
                scrollStart = direction === 'horizontal' ? slider.scrollLeft : slider.scrollTop;
            });

            slider.addEventListener('mouseleave', () => {
                isDown = false;
            });

            slider.addEventListener('mouseup', () => {
                isDown = false;
            });

            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const current = direction === 'horizontal' ? e.pageX : e.pageY;
                const distance = (current - start) * scrollSpeed;
                if (direction === 'horizontal') {
                    slider.scrollLeft = scrollStart - distance;
                } else {
                    slider.scrollTop = scrollStart - distance;
                }

                // Get the width or height of the slides depending on the direction
                const slideSize = direction === 'horizontal' ? slider.querySelector('.slider-container img').offsetWidth : slider.querySelector('.slider-container img').offsetHeight;

                // Calculate the number of visible slides depending on the direction
                const numVisibleSlides = direction === 'horizontal' ? Math.floor(slider.offsetWidth / slideSize) : Math.floor(slider.offsetHeight / slideSize);

                // Calculate the total width or height of the visible slides depending on the direction
                const visibleSlidesSize = numVisibleSlides * slideSize;

                // Calculate the minimum and maximum scroll positions depending on the direction
                const minScrollPos = direction === 'horizontal' ? 0 : slider.scrollHeight - slider.offsetHeight;
                const maxScrollPos = direction === 'horizontal' ? slider.scrollWidth - visibleSlidesSize : slider.scrollHeight - visibleSlidesSize;

                // Prevent scrolling past the minimum and maximum scroll positions depending on the direction
                if (direction === 'horizontal') {
                    if (slider.scrollLeft < minScrollPos) {
                        slider.scrollLeft = minScrollPos;
                    } else if (slider.scrollLeft > maxScrollPos) {
                        slider.scrollLeft = maxScrollPos;
                    }
                } else {
                    if (slider.scrollTop < minScrollPos) {
                        slider.scrollTop = minScrollPos;
                    } else if (slider.scrollTop > maxScrollPos) {
                        slider.scrollTop = maxScrollPos;
                    }
                }
            });
        }
    }

    function swiper() {
        let SliderDefault = document.querySelectorAll('.swiper-default');
        SliderDefault.forEach((s) => {
            // Elements
            let container = s.querySelector('.swiper-container');
            let dot = s.querySelector('.swiper-pagination');
            let next = s.querySelector('.swiper-button-next');
            let prev = s.querySelector('.swiper-button-prev');
            const effectiveWidth = Math.min(screen.width, window.innerWidth);

            if (effectiveWidth > 1200) {

                var swiper = new Swiper(container, {
                    slidesPerView: 'auto',
                    watchOverflow: true,
                    observer: true,
                    observeParents: true,
                    observeSlideChildren: true,
                    spaceBetween: 0,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    autoplay: {
                        delay: 5000,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            } else {
                // show half
                let half = s.classList.contains('half') ? 1.5 : 'auto';

                var swiper = new Swiper(container, {
                    slidesPerView: half,
                    watchOverflow: true,
                    observer: true,
                    observeParents: true,
                    observeSlideChildren: true,
                    // centeredSlides: true,
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    autoplay: {
                        delay: 5000,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                });
            }
        });
    }

    function scrollTrigger() {
        let sections = document.querySelectorAll('.scrollTrigger');
        const start = window.innerHeight / 3;
        sections.forEach((el) => {
            let animate = true;

            function underline() {
                let lines = el.querySelectorAll('.align-underline');
                if (animate) {
                    lines.forEach((line, i) => {
                        setTimeout(() => {
                            line.classList.add('active');
                        }, i * 150);
                    });
                }!animate;
            }
            let check = el.getBoundingClientRect().top;
            if (check <= start) {
                el.classList.add('active');
                underline();
            }
            window.addEventListener('scroll', () => {
                let pos = el.getBoundingClientRect().top;
                if (pos <= start) {
                    el.classList.add('active');
                    underline();
                }
            });
        });
    }

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    function customizeCursor() {
        const cursorFollow = document.querySelector('.cursor-follow');
        const cursorView = document.querySelector('.cursor-view');
        const cursorClick = document.querySelector('.cursor-click')
        const cursorDrag = document.querySelector('.cursor-drag')
        const projectViews = document.querySelectorAll('.project-view')
        const hoverElement = document.querySelectorAll('.hover_mouse');
        const hideCursors = document.querySelectorAll('.hide-cursor');
        const burgerMenuClose = document.querySelector('.menu-black__close');
        const mainSwiper = document.querySelector('.mainSwiper');
        const cursorSoon = document.querySelector('.cursor-soon');
        const projectSoon = document.querySelectorAll('.project-soon');
        const insightSwiperContainer = document.querySelectorAll('.insightSlider')

        function mouseMove(e) {
            const {
                clientX,
                clientY
            } = e;

            gsap.to(cursorFollow, 0.2, {
                x: clientX,
                y: clientY,
            })
        }

        hoverElement.forEach((item) => {

            function handleHoverIn() {
                gsap.to(cursorFollow, 0.3, {
                    scale: 2,
                })
            }

            function handleHoverOut() {
                gsap.to(cursorFollow, 0.3, {
                    scale: 0.8,
                })
            }

            item.addEventListener('mouseenter', handleHoverIn)
            item.addEventListener('mouseleave', handleHoverOut)
        })

        projectViews.forEach(item => {
            function handleMouseViewIn() {
                gsap.to(cursorFollow, 0.3, {
                    scale: 1.5,
                })
                gsap.set(cursorFollow, {
                    backgroundColor: 'black',
                    mixBlendMode: 'unset',
                    border: '1px solid black',
                })
                gsap.set(cursorView, {
                    opacity: 1
                })
            }

            function handleMouseViewOut() {
                gsap.to(cursorFollow, 0.3, {
                    scale: 0.8,
                })
                gsap.set(cursorFollow, {
                    backgroundColor: '#F7F7F7',
                    mixBlendMode: 'difference',
                    border: '1px solid #F7F7F7',
                })
                gsap.set(cursorView, {
                    opacity: 0
                })
            }
            item.addEventListener('mouseenter', handleMouseViewIn);
            item.addEventListener('mouseleave', handleMouseViewOut);
        })

        projectSoon.forEach(item => {
            function handleMouseViewIn() {
                gsap.to(cursorFollow, 0.3, {
                    scale: 1.5,
                })
                gsap.set(cursorFollow, {
                    backgroundColor: 'black',
                    mixBlendMode: 'unset',
                    border: '1px solid black',
                })
                gsap.set(cursorSoon, {
                    opacity: 1
                })
            }

            function handleMouseViewOut() {
                gsap.to(cursorFollow, 0.3, {
                    scale: 0.8,
                })
                gsap.set(cursorFollow, {
                    backgroundColor: '#F7F7F7',
                    mixBlendMode: 'difference',
                    border: '1px solid #F7F7F7',
                })
                gsap.set(cursorSoon, {
                    opacity: 0
                })
            }
            item.addEventListener('mouseenter', handleMouseViewIn);
            item.addEventListener('mouseleave', handleMouseViewOut);
        })

        hideCursors.forEach((item) => {
            function handleHideCursors(e) {
                if (e.type === 'mouseenter') {
                    gsap.to(cursorFollow, 0.3, {
                        opacity: 0,
                    })
                } else if (e.type === 'mouseleave') {
                    gsap.to(cursorFollow, 0.3, {
                        opacity: 1,
                    })
                }
            }
            item.addEventListener('mouseenter', handleHideCursors);
            item.addEventListener('mouseleave', handleHideCursors);
        })

        if (mainSwiper) {
            const handleClickCursor = (e) => {
                if (e.type === 'mouseenter') {

                    gsap.killTweensOf('.js-cursor-text');
                    gsap.killTweensOf('.js-cursor-text__clone');
                    gsap.killTweensOf(cursorFollow)


                    gsap.to(cursorFollow, 0.3, {
                        scale: 1.5,
                    })
                    gsap.set(cursorFollow, {
                        backgroundColor: 'black',
                        mixBlendMode: 'normal',
                        border: '1px solid black',
                    })
                    gsap.set(cursorClick, {
                        opacity: 1
                    })
                    gsap.set('.js-cursor-text__clone', {
                        yPercent: -100
                    })
                    gsap.fromTo('.js-cursor-text', 0.4, {
                        yPercent: 100,
                        ease: 'power4.out'
                    }, {
                        yPercent: 0,
                        ease: 'power4.out'
                    }, "-=0.05")
                } else if (e.type === 'mouseleave') {

                    gsap.killTweensOf('.js-cursor-text');
                    gsap.killTweensOf('.js-cursor-text__clone');
                    gsap.killTweensOf(cursorFollow)


                    gsap.to(cursorFollow, 0.3, {
                        scale: 0.8,
                    })
                    gsap.set(cursorFollow, {
                        backgroundColor: '#F7F7F7',
                        mixBlendMode: 'difference',
                    })
                    gsap.set(cursorClick, {
                        opacity: 0
                    })
                }
            }
            mainSwiper.addEventListener('mouseenter', handleClickCursor);
            mainSwiper.addEventListener('mouseleave', handleClickCursor);
        }

        if (insightSwiperContainer) {
            insightSwiperContainer.forEach((item) => {
                const handleClickCursor = (e) => {
                    if (e.type === 'mouseenter') {

                        gsap.killTweensOf('.js-cursor-text');
                        gsap.killTweensOf('.js-cursor-text__clone');
                        gsap.killTweensOf(cursorFollow)


                        gsap.to(cursorFollow, 0.3, {
                            scale: 1.5,
                        })
                        gsap.set(cursorFollow, {
                            backgroundColor: 'black',
                            mixBlendMode: 'normal',
                            border: '1px solid black',
                        })
                        gsap.set(cursorDrag, {
                            opacity: 1
                        })
                        gsap.set('.js-cursor-text__clone', {
                            yPercent: -100
                        })
                        gsap.fromTo('.js-cursor-text', 0.4, {
                            yPercent: 100,
                            ease: 'power4.out'
                        }, {
                            yPercent: 0,
                            ease: 'power4.out'
                        }, "-=0.05")
                    } else if (e.type === 'mouseleave') {

                        gsap.killTweensOf('.js-cursor-text');
                        gsap.killTweensOf('.js-cursor-text__clone');
                        gsap.killTweensOf(cursorDrag)


                        gsap.to(cursorFollow, 0.3, {
                            scale: 0.8,
                        })
                        gsap.set(cursorFollow, {
                            backgroundColor: '#F7F7F7',
                            mixBlendMode: 'difference',
                        })
                        gsap.set(cursorDrag, {
                            opacity: 0
                        })
                    }
                }
                item.addEventListener('mouseenter', handleClickCursor);
                item.addEventListener('mouseleave', handleClickCursor);
            });

        }
        window.addEventListener('mousemove', mouseMove)
    }

    function updSwiperNumericPagination() {
        const totalSlides = this.el.slidesQuantity;
        const index = this.realIndex + 1;
        this.el.querySelectorAll(".swiper-counter").forEach(function (counter) {
            counter.innerHTML = '<span class="count">' + index + '</span>/<span class="total">' + totalSlides + '</span>';
        });
    }

    function swiperRun() {
        var swiperContainers = document.querySelectorAll(".swiper-container");
        if (swiperContainers) {
            swiperContainers.forEach(function (container) {
                container.slidesQuantity = container.querySelectorAll(".swiper-slide").length;
                var swiper = new Swiper(container, {
                    speed: 800,
                    loop: false,
                    spaceBetween: 0,
                    centeredSlides: true,
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    pagination: {
                        clickable: true,
                        el: container.querySelector(".swiper-pagination")
                    },
                    on: {
                        init: updSwiperNumericPagination,
                        slideChange: updSwiperNumericPagination
                    }
                });

                // Add event listeners to next and previous buttons
                var nextButton = container.querySelector(".swiper-button-next");
                var prevButton = container.querySelector(".swiper-button-prev");

                nextButton.addEventListener('click', function () {
                    swiper.slideNext();
                });

                prevButton.addEventListener('click', function () {
                    swiper.slidePrev();
                });
            });
        }
    }

    function increaseOpacityOnScroll(elementId, opacityStep) {
        var element = document.getElementById(elementId);

        window.onscroll = function () {
            // Calculate the opacity based on the scroll position
            var opacity = Math.min(1, (window.scrollY / window.innerHeight) + opacityStep);

            // Update the element's opacity
            element.style.opacity = opacity;
        };
    }

    function displayFileName(selector) {
        const inputElements = document.querySelectorAll(selector);

        if (inputElements) {
            if (!inputElements || inputElements.length === 0) {
                console.error(`No elements found with selector "${selector}".`);
                return;
            }

            inputElements.forEach((inputElement) => {
                inputElement.addEventListener('change', (event) => {
                    const file = event.target.files[0];
                    const fileName = file ? file.name : 'No file selected';

                    const existingSpanElement = inputElement.nextElementSibling;

                    if (existingSpanElement && existingSpanElement.tagName === 'SPAN') {
                        existingSpanElement.textContent = fileName;
                    } else {
                        const spanElement = document.createElement('span');
                        spanElement.textContent = fileName;
                        inputElement.parentNode.insertBefore(spanElement, inputElement.nextSibling);
                    }
                });
            });
        }
    }


    window.displayFileName = displayFileName;
    window.swiperRun = swiperRun;
    window.increaseOpacityOnScroll = increaseOpacityOnScroll;
    window.customizeCursor = customizeCursor;
    window.reveal = reveal;
    window.scrollTrigger = scrollTrigger;
    window.swiper = swiper;
    window.makeSliderDraggable = makeSliderDraggable;
    window.loader = loader;
    window.hover = hover;
    window.hero = hero;
    window.header = header;
    window.headerMenuPop = headerMenuPop;
    window.toggleClassOnDataId = toggleClassOnDataId;
    window.checkScreen = checkScreen;
    window.toggleClassOnClick = toggleClassOnClick;
    window.addLabelFocusListeners = addLabelFocusListeners;
    window.openPopup = openPopup;
    window.removeClassOnClick = removeClassOnClick;
})();