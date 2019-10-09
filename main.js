//JavaScript
// decalre a variable
const selectElement = (e) => document.querySelector(e)

// call the function
selectElement('.mobile-menu').addEventListener('click', () => {
  // select header and toggle(on and off) class of active
  selectElement('header').classList.toggle('active');
})