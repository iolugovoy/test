function Slider(slider) {
	this.prev = slider.querySelector('[data-slider-prev]');
	this.next = slider.querySelector('[data-slider-next]');
	this.currentSlide = 0;
	this.slides = [].slice.call(slider.querySelectorAll('[data-slide]'));
	this.prev.addEventListener('click', this.showPrev.bind(this));
	this.next.addEventListener('click', this.showNext.bind(this));
}

Slider.prototype.showPrev = function() {
	if (this.currentSlide == 0){
		this.currentSlide = (this.slides.length - 1);
	} else {
		this.currentSlide -= 1;
	}
	this.update();
}

Slider.prototype.showNext = function() {
	if (this.currentSlide == (this.slides.length - 1)){
		this.currentSlide = 0;
	} else {
		this.currentSlide += 1;
	}
	this.update();
}

Slider.prototype.update = function() {
	var that = this;
	this.slides.forEach(function(slide, i) {	
		if (that.currentSlide === i) {
			slide.classList.add('active');
		} else {
			slide.classList.remove('active');
		}
	});
}

var sliderElement = document.querySelector('[data-slider]');
	slider = new Slider(sliderElement);
