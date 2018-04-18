import $ from 'jquery';

class Modal {

	constructor(){
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events(){

		//clicking the open modal button

		this.openModalButton.click(this.openModal.bind(this));

		//clicking the x close modal button

		this.closeModalButton.click(this.closeModal.bind(this));

		//pushes any key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e){
		if(e.keyCode === 27){
			this.closeModal();
		}
	}

	openModal(){
		this.modal.addClass("modal--is-visible");
		//the header "Get in Touch" button is a link element
		//and if you click an link element that has an href
		//value of '#', the browser automatically scrolls to 
		//the top of the page which we don't want

		return false;
	}

	closeModal(){
		this.modal.removeClass("modal--is-visible");
	}






}

export default Modal;