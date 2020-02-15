import Swiper from 'swiper';

const carousels = () => {

	// // pagination
	// let carouselPagination = (swiper) => {

	// 	// console.log(swiper, swiper.activeIndex, swiper.passedParams.slidesPerView);
	// 	// pulled from swiper.js pagination..
	// 	let total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
	// 	let current = swiper.activeIndex || 0;
	// 	// console.log((current + 1), total, swiper.snapIndex);

	// 	current     = (current + 1) < 10 ? `0${(current + 1)}` : (current + 1);
	// 	total       = total < 10 ? `0${total}` : total;

	// 	let $pagiCurrent = swiper.el.querySelector('.carousel-pagination-current');
	// 	let $pagiTotal   = swiper.el.querySelector('.carousel-pagination-total');

	// 	let $progressBar = swiper.el.querySelector('.progress-bar__fill');

	// 	if ( $pagiCurrent ) $pagiCurrent.innerText = current;
	// 	if ( $pagiTotal ) $pagiTotal.innerText     = total;

	// 	let progress = (current / total * 100);
	// 	if ( $progressBar ) {
	// 		// $progressBar.style = `width: ${progress}%`;
	// 		$progressBar.style = `
	// 			transform: translate3d(0px, 0px, 0px) scaleX( ${(current / total)} ) scaleY(1);
	// 			transition-duration: 300ms;
	// 		`;
	// 	}
	// }

	// single item carousels
	[...document.querySelectorAll('[data-carousel="news"]')].map((el, index) => {
		let swiperInstance = new Swiper(el, {
			speed: 800,
			loop: true,
			// effect: 'fade',
			// loopedSlides: 4,
			centeredSlides: true,

			// // lazy
			// // Disable preloading of all images
			// preloadImages: false,
			// // Enable lazy loading
			// lazy: true,
			// watchSlidesVisibility: true,
			// // 

			spaceBetween: 20,
			slidesPerView: 1.5,
			// on: {
			// 	init: function() {
			// 		carouselPagination(this);
			// 	},
			// 	slideChange: function() {
			// 		carouselPagination(this);
			// 	}
			// },
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			// navigation: {
			// 	nextEl: '.carousel__next',
			// 	prevEl: '.carousel__prev',
			// },
			breakpoints: {
				1220: {
					slidesPerView: 4,
				},
				960: {
					slidesPerView: 3,
				},
				740: {
					slidesPerView: 2.5,
				},
				580: {
					slidesPerView: 2,
				},
			}
		});

		// // this or navigation param both work
		// // using below instead of navigation param incase we need extra navigation; e.g. arrows/carrots, on top of the mouse over area navigation
		// el.addEventListener('click', (e) => {
		// 	if ( e.target.matches('[data-carousel-next]') ) {
		// 		swiperInstance.slideNext();
		// 	}
		// 	if ( e.target.matches('[data-carousel-prev]') ) {
		// 		swiperInstance.slidePrev();
		// 	}
		// });

	});

}

export default carousels;