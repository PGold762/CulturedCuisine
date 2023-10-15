// const { create } = require("domain");
document.addEventListener("DOMContentLoaded", () => {

const signupFormHandler = async (event) => {
  event.preventDefault();
console.log("Form submit initiated");


  const firstName = document.querySelector('#first-name').value.trim();
  const lastName = document.querySelector('#last-name').value.trim();
  const email = document.querySelector('#sign-up-email').value.trim();
  const password = document.querySelector('#sign-up-password').value.trim();
  const createButton = document.querySelector('#create-button').value;

  if (firstName && lastName && email && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log("Registration successful");
      document.location.replace('/signin');
    } else {
      console.log("Registration failed");
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
});
