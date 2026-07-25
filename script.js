document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const goToSignup = document.getElementById('go-to-signup');
  const goToLogin = document.getElementById('go-to-login');
  const errorBanner = document.getElementById('error-message');

  // Helper function to show errors
  function showError(message) {
    errorBanner.textContent = message;
    errorBanner.classList.remove('hidden');
  }

  function hideError() {
    errorBanner.textContent = '';
    errorBanner.classList.add('hidden');
  }

  // Toggle to Signup
  goToSignup.addEventListener('click', () => {
    hideError();
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
  });

  // Toggle to Login
  goToLogin.addEventListener('click', () => {
    hideError();
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
  });

  // Handle Login Submit
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    hideError();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (password.length < 8) {
      showError('Password must be at least 8 characters.');
      return;
    }

    // Replace this with your actual login logic
    console.log('Logging in with:', email);
    alert('Login simulation successful!');
  });

  // Handle Signup Submit
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    hideError();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (password.length < 8) {
      showError('Password must be at least 8 characters.');
      return;
    }

    // Replace this with your actual signup logic
    console.log('Creating account for:', name, email);
    alert('Signup simulation successful!');
  });
});