
// Date displayed in the footer Thursday, May 10, 2021
  let d = new Date();
  document.querySelector('#copyrightyear').textContent = d.getFullYear();

  //select the element to manipulate
  const datefield = document.querySelector("#updated");

  //current date with that object
  const now = new Date();
  const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

  datefield.innerHTML = `<em>${fulldate}</em>`;


// Responsive Hamburger button for the menu items
  const hamburgerButton = document.querySelector('.hamburger');
  const navigation = document.querySelector('.navigation');

  // add the callback function () is a shortcut, arrow function is => in modern javascript (see js_arrow_function in w3 schools), the false is a kickback to the event listener.
  hamburgerButton.addEventListener('click', () =>
  {navigation.classList.toggle('hide')}, false
  );


//If the menu is shown and then the window is resized, avoid problems by
  // the 760 or the 32.5em
  window.onresize = () => {if (window.innerWidth > 760) navigation.classList.remove('hide')};

  //function toggleMenu() {
  //console.log(document.getElementById("navigation").classList);
  //document.getElementById("navigation").classList.toggle("hide");
  //document.getElementsByClassName("navigation")[0].classList.toggle("responsive");

  // document.getElementById("primaryNav").classList.toggle("hide");

