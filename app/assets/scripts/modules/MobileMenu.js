import $ from 'jquery';

class MobileMenu {
	constructor(){
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();

	}

	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	//toggleClass is a jquery method
	//we don't want the this keyword to equal the element that
	//triggered the event

	toggleTheMenu(){
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
	}

}

export default MobileMenu;