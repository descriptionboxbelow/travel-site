import $ from 'jquery';

class Modal {
  constructor() {
    // select any and all DOM elements we'll work with
    this.openModalButton = $(".open-modal");
    // select the main modal DIV that we'll want to reveal
    this.modal = $(".modal");
    // select the modal "X" button
    this.closeModalButton = $(".modal__close");
    // call the events() method as soon as the page loads
    this.events();
  }

  events(){
    // look for clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this)); //.bind(this) ensures continuity for the "this" keyword
    // look for clicking the x close modal button
    this.closeModalButton.click(this.closeModal.bind(this));
    // pushes ANY key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e){
    if (e.keyCode == 27){ // keyCode == 27 === ESP key
      this.closeModal();
    }
  }

  openModal(){
    this.modal.addClass("modal--is-visible");
    // we return false because the header "Get in Touch" button is a link element.
    // when clicking a link element with href="#", browser will scroll up to top of page
    // return false prevents this behavior
    return false;
  }

  closeModal(){
  this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
