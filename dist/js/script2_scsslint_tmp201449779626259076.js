(function () {
  const runModal = document.querySelectorAll('[data-run]');
  const contentModal = document.querySelectorAll('[data-content]');
  const primaryBtn = document.querySelectorAll('[data-primarybtn]');
  const secondaryBtn = document.querySelectorAll('[date-secondarybtn]');



  function contentShow(button) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      for (let c = 0; c < contentModal.length; c++) {
        if (button.dataset.run === contentModal[c].dataset.content) {
          contentModal[c].classList.remove('hide');
        }
      }
    });
  }
  function showModal() {
    for (let r = 0; r < runModal.length; r++) {
      const button = runModal[r];
      contentShow(button);
    }
  }

  showModal();
}());
