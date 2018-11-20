(function () {
  // const button = document.querySelector('.RunModal');
  const content = document.querySelector('.ModalPage__content');
  const back = document.querySelector('.ModalPage');
  const btns = document.querySelectorAll('[data-hide]');
  const uninstall = document.querySelector('.ModalPage__redbtn');
  const install = document.querySelector('.ModalPage__greenbtn');
  const mainImage = document.querySelector('ModalPage_warning');

  const buttons = document.querySelectorAll('[data-modal]');
  const modalcontent = document.querySelectorAll('[data-content]');
  const primaryBtn = document.querySelectorAll('[data-primarybtn]');
  const secondaryBtn = document.querySelectorAll('[data-secondarybtn]');

  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  const closeBtn = document.createElement('a');
  closeBtn.className = 'ModalPage__close';
  closeBtn.innerHTML = '<img src="images/icon-popup-close.svg">';

/*
  close(buttonClose);
  function close(buttonClose) {
    buttonClose.addEventListener('click', (event) => {
        if (event.target === secondaryBtn) {
          modalcontent.classList.add('hide');
          console.log('test');
      }
    });
  }
*/


  function applyButton(button) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      for (let m = 0; m < modalcontent.length; m++) {
        if (button.dataset.modal === modalcontent[m].dataset.content) {
          modalcontent[m].classList.remove('hide');
          modalcontent[m].insertBefore(closeBtn, mainImage);
          back.appendChild(overlay);
        }
      }
    });
  }
  function showModal() {
    for (let b = 0; b < buttons.length; b++) {
      const button = buttons[b];
      applyButton(button);
    }
  }

  showModal();

}());
