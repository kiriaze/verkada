const lazyload = (params = {}) => {

	// to preventing content reflow, height or padding required for img tags or parent selectors otherwise they collapse:

	// usage:
	// <div class="lazyload">
	// 	<img src="" data-src="" />
	// </div>
	// .lazyload {
	// 	width: 100%;
	// 	position: relative;
	// 	@include responsive-ratio(1200, 600, true);
	// 	img {
	// 		position: absolute;
	// 		top: 0;
	// 		left: 0;
	// 		width: 100%;
	// 		height: 100%;
	// 	}
	// }
	// .lazyloaded {
	// 	opacity: 1;
	// }
	
	// params = {
	// 	selector: '.lazyload',
	// 	offset: '0px 0px 0px 0px' // pos val triggers %/px before elem in view, neg val triggers after elem is %/px in view
	// }

	// let nested   = params.nested || false;
	let selector = params.selector || '.lazyload';
	let offset   = params.offset || '0px 0px 0px 0px';
	const images = document.querySelectorAll(selector);
	
	const config = {
		rootMargin: offset,
		threshold: 0
	}; 
	
	const handleIntersection = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.intersectionRatio > 0) {
				if ( entry.target.dataset.src ) {

					// loadImage(entry.target);

					// or
					let elem = entry.target;
					let src  = elem.dataset.src;
					elem.tagName === 'IMG' ?
						elem.src = src :
						elem.style.backgroundImage = 'url('+ src +')';
					elem.classList.add('lazyloaded');

				} else {

					// loadImage(entry.target.querySelector('[data-src]'));

					// or
					let elem = entry.target.querySelector('[data-src]');
					let src  = elem ? elem.dataset.src : '';
					if ( elem ) {
						elem.tagName === 'IMG' ?
							elem.src = src :
							elem.style.backgroundImage = 'url('+ src +')';
						elem.classList.add('lazyloaded');
					}
					
				}
				observer.unobserve(entry.target);
			}
		})
	}
	
	const observer = new IntersectionObserver(handleIntersection, config);

	// const loadImage = (image) => {
	// 	const src = image.dataset.src;
	// 	fetchImage(src).then(() => {
	// 		image.tagName === 'IMG' ?
	// 			image.src = src :
	// 			image.style.backgroundImage = 'url('+ src +')'; // these makes 2 requests..
	// 		image.classList.add('lazyloaded');
	// 	})
	// }

	// const fetchImage = (url) => {
	// 	return new Promise((resolve, reject) => {
	// 		const image = new Image();
	// 		image.src = url; // these makes 2 requests..
	// 		image.onload = resolve;
	// 		image.onerror = reject;
	// 	});
	// }

	// images.forEach(image => {
	// 	observer.observe(image)
	// });

	// older browsers
	for (let i = 0; i < images.length; ++i) {
		observer.observe(images[i]);
	}

};

export default lazyload;