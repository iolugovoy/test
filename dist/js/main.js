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

function PopUp(popup, openBtn) {
	this.close = popup.querySelector('[data-popup-close]');
	this.popup = popup;
	console.log(this.close);
	this.close.addEventListener('click', this.closePopup.bind(this));
	openBtn.addEventListener('click', this.showPopup.bind(this));

}

PopUp.prototype.showPopup = function() {
	this.popup.style.display = "flex";
	this.popup.classList.add("visible");
}

PopUp.prototype.closePopup = function(){
	this.popup.style.display = "none";
	this.popup.classList.remove("visible");
}

var popupElem = document.querySelector('[data-popup]');
var openElem = document.querySelector('[data-popup-open]');
	popup = new PopUp(popupElem, openElem);