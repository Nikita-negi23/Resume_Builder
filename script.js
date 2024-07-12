document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.querySelector('#signUp');
    const signInButton = document.querySelector('#signIn');
    const container = document.querySelector('.container');
    
    signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });
    
    signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });
});

function toggleForms() {
    const signUpContainer = document.querySelector('.sign-up-container');
    const signInContainer = document.querySelector('.sign-in-container');
    
    if (signUpContainer.style.display === 'none') {
        signUpContainer.style.display = 'block';
        signInContainer.style.display = 'none';
    } else {
        signUpContainer.style.display = 'none';
        signInContainer.style.display = 'block';
    }
}

function login() {
    const email = document.querySelector('#loginEmail').value;
    const password = document.querySelector('#loginPassword').value;
    console.log('Logging in with:', email, password);
    // Add login logic here
}

function signup() {
    const name = document.querySelector('#signupName').value;
    const email = document.querySelector('#signupEmail').value;
    const password = document.querySelector('#signupPassword').value;
    console.log('Signing up with:', name, email, password);
    // Add signup logic here
}
