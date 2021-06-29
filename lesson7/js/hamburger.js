//HAMBURGER MENU BUTTON

const hamburgerButton = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburgerButton.addEventListener('click', () =>
{navigation.classList.toggle('hide')}, false
);

window.onresize = () => {
  if (window.innerWidth > 760) navigation.classList.remove('hide')
};
