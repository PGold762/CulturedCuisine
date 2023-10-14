const { create } = require("domain");

const signupFormHandler = async (event) => {
  event.preventDefault();

  const response = await fetch('/api/users/signout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }

  const firstName = document.querySelector('#first-name').value.trim();
  const lastName = document.querySelector('#last-name').value.trim();
  const email = document.querySelector('#sign-up-email').value.trim();
  const password = document.querySelector('#sign-up-password').value.trim();
  const createButton = document.querySelector('#create-button').value;

  if (firstName && lastName && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const signout = async () => {

};


const createButton = document.querySelector('#create-button');
const signupForm = document.querySelector('.sign-up-form');

createButton.addEventListener('click', signupFormHandler);
signupForm.addEventListener('submit', signupFormHandler);

// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   // Collect values from the signup form
//   const firstName = document.querySelector('#first-name').value.trim();
//   const lastName = document.querySelector('#last-name').value.trim();
//   const email = document.querySelector('#sign-up-email').value.trim();
//   const password = document.querySelector('#sign-up-password').value.trim();

//   if (firstName && lastName && email && password) {
//     // Send a POST request to the API endpoint for user creation
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ firstName, lastName, email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       // If successful, redirect the browser to the profile page
//       document.location.replace('/profile');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// const createButton = document.querySelector('#create-button');
// const signupForm = document.querySelector('.sign-up-form');

// createButton.addEventListener('click', signupFormHandler);
// signupForm.addEventListener('submit', signupFormHandler);
