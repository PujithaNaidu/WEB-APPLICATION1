// listen for auth status changes 

auth.onAuthStateChanged(user => {

    if (user) {
        console.log('user logged in:', user);
    }
    else {
        console.log('user logged out');
    }
})



// signup 

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {

    // preventing  the default refreshing page
    e.preventDefault();

    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    // const name = signupForm['Name'].value;


    // console.log(email, password);

    // signup User

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        // After entering the details we want to close the form so were using modal.getinstance.close()
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();

    });

});

// log out 

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut()
});


// login form 

const loginform = document.querySelector('#login-form');
loginform.addEventListener('submit', (e) => {
    e.preventDefault;

    const email = loginform['login-email'].value;
    const password = loginform['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        // console.log(cred.user);

        // close the login modal and reset the form

        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginform.reset();
    });
});