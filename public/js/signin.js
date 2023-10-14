const signinFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the sign in form
    const email = document.querySelector('#email-sign-in').value.trim();
    const password = document.querySelector('#password-sign-in').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/signin', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signinButton = document.querySelector('#sign-in-button');
  const signinForm = document.querySelector('.sign-up-form');
  
  signinButton.addEventListener('click', signinFormHandler);
  signinForm.addEventListener('submit', signinFormHandler);