(function () {
  const button = document.querySelector('.ModalPage__openbtn');
  const content = document.querySelector('.ModalPage__content');
  const back = document.querySelector('.ModalPage');
  const closeBtns = document.querySelectorAll('[data-hide]');
  const uninstall = document.querySelector('.ModalPage__content--uninstall');
  button.addEventListener('click', (event) => {
    content.classList.remove('hide');
    back.classList.add('blackbg')});

    for (let i = 0; i < closeBtns.length; i++)
    closeBtns[i].addEventListener('click', (event) => {
      content.classList.add('hide');
      back.classList.remove('blackbg')});

    back.addEventListener('click', function (event) {
      if(event.target == back) {
        content.classList.add('hide');
        back.classList.remove('blackbg');
      }});
    uninstall.addEventListener('click', (event) => {
      event.preventDefault();
      alert('hi');
      content.classList.add('hide');
      back.classList.remove('blackbg')});
})();