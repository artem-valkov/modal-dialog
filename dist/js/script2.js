$.fn.modals = function modal() {
  const pageModal = document.querySelectorAll('[data-page]');
  const runModal = document.querySelectorAll('[data-run]');
  const contentModal = document.querySelectorAll('[data-content]');
  const primaryBtn = document.querySelectorAll('[data-primarybtn]');
  const secondaryBtn = document.querySelectorAll('[data-secondarybtn]');
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  const closeBtn = document.createElement('a');
  closeBtn.className = 'ModalPage__close';
  closeBtn.innerHTML = '<img src="images/icon-popup-close.svg">';

  for (let m = 0; m < runModal.length; m++) {
    const modal = contentModal[m];
    const page = pageModal[m];
    function windowModal() {
      modal.classList.remove('hide');
      page.appendChild(overlay);
      modal.appendChild(closeBtn);
    }
    function closeModal() {
      modal.classList.add('hide');
      page.removeChild(overlay);
      modal.removeChild(closeBtn);
    }
    runModal[m].addEventListener('click', () => {
      windowModal(modal, page);
    });
    primaryBtn[m].addEventListener('click', () => {
      closeModal(modal, page);
      setTimeout("alert('hi')", 250);
    });
    secondaryBtn[m].addEventListener('click', () => {
      closeModal(modal, page);
    });
    closeBtn.addEventListener('click', () => {
      closeModal(modal, page);
    });
    overlay.addEventListener('click', () => {
      closeModal(modal, page);
    });
  }
};
