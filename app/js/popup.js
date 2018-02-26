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