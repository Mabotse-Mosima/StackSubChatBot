// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
}

// Form Toggle Functionality
function toggleForm(formType) {
    const buttonBox = document.querySelector('.button-box');
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
    const signinBtn = document.querySelector('.toggle-btn:nth-child(1)');
    const signupBtn = document.querySelector('.toggle-btn:nth-child(2)');
    
    if (formType === 'signin') {
        buttonBox.classList.remove('signup-mode');
        signinForm.classList.add('active');
        signupForm.classList.remove('active');
        signinBtn.classList.add('active');
        signupBtn.classList.remove('active');
    } else {
        buttonBox.classList.add('signup-mode');
        signinForm.classList.remove('active');
        signupForm.classList.add('active');
        signinBtn.classList.remove('active');
        signupBtn.classList.add('active');
    }
}

// Form Validation and Submission
function signIn() {
    const email = document.getElementById('emailaddress1').value;
    const password = document.getElementById('password1').value;
    
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Here you would typically make an API call
    console.log('Signing in with:', email, password);
    // Redirect or show success message
}

function signUp() {
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('emailaddress').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('cpassword').value;
    const termsChecked = document.querySelector('#signup-form .check-box').checked;
    
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (!termsChecked) {
        alert('Please agree to the terms and conditions');
        return;
    }
    
    // Here you would typically make an API call
    console.log('Signing up:', { firstName, lastName, email, password });
    // Redirect or show success message
}

// Email Form Submission
const emailForm = document.querySelector('.email-form');
if (emailForm) {
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        
        if (!email) {
            alert('Please enter your email address');
            return;
        }
        
        // Here you would typically make an API call
        console.log('Submitted email:', email);
        // Redirect or show success message
    });
}

// Initialize the form to show signin by default
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.button-box')) {
        toggleForm('signin');
    }
});

// Form Validation for Sign In
document.getElementById('signin-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('emailaddress1').value;
    const password = document.getElementById('password1').value;
    
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Here you would typically make an API call
    console.log('Signing in with:', email, password);
    // Redirect to dashboard or show success message
    // window.location.href = 'dashboard.html';
});



// Password toggle visibility
const passwordToggle = document.querySelector('.password-toggle');
const passwordInput = document.getElementById('password');

if (passwordToggle && passwordInput) {
    passwordToggle.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        passwordToggle.innerHTML = type === 'password' ? '👁️' : '👁️‍🗨️';
    });
}

// Form validation
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email) {
        alert('Please enter your email address');
        return;
    }
    
    if (!password) {
        alert('Please enter your password');
        return;
    }
    
    // Here you would typically make an API call
    console.log('Login attempt with:', { email, password });
    
    // Redirect after successful login
    // window.location.href = 'dashboard.html';
});