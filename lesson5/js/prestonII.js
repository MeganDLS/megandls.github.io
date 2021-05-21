// Date displayed in the footer Thursday, May 10, 2021
let d = new Date();
document.querySelector('#copyrightyear').textContent = d.getFullYear();

//select the element to manipulate
const datefield = document.querySelector("#updated");

//current date with that object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;



// Hamburger


//If the menu is shown and then the window is resized, avoid problems by
  // the 760 or the 32.5em
  window.onresize = () => {if (window.innerWidth > 760) navigation.classList.remove('hide')};


//getDay() and display: block; query selector all is an option.
if (d.getDay() == 5) {
    document.querySelector('.banner');
}