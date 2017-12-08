// Get modal element
var modal = document.getElementById('simpleModal');
// Get open madal button and singup menu item
var modalBtn = document.getElementsByClassName('modalBtn');
console.log(modalBtn);
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click on each element with class 'modalBtn'
for (var i=0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', openModal);
}

// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
  modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}


// Script to validate email and phone number

// Set vars for email vailidate
var form = document.getElementsByTagName('form')[0];
var email = document.getElementById('email');
var error = document.querySelector('.error');
console.log(error);
// var tel = document.getElementById('tel');

// tel.addEventListener('tel', function (event) {
//   if (!tel.value.match(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/)) {
//     error.innerHTML = "";
//     error.className = "error";
//   }
// },false);


email.addEventListener('input', function (event) {
  if (email.validity.valid) {
    error.innerHTML = "";
    error.className = "error";
  }
}, false);

form.addEventListener("submit", function (event) {
  if (!email.validity.valid) {
    error.innerHTML = "Please enter a valid address.";
    error.className = "error active";
    event.preventDefault();
  }
},false);

// Script to vailidate phone Number

// Set vars for phone number
  var terror = document.querySelector('#tel');
  console.log(terror);
var tel = document.getElementById('tel');

console.log(tel);


function validatePhone () {
  if (!tel.value.match(/^[0-9]{10}$/)) {
    terror.innerHTML = "";
    terror.className = "telError";
    console.log('function on');
    return false;
  }

  if (tel.value.match(/^[0-9]{10}$/)) {
    terror.innerHTML = "";
    terror.className = "correct";
    console.log('correct input');
    return true;
  }
};
