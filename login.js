//adding event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2 get the email address inside the email input field
    // use .value to get text from an input field
    const emailField=  document.getElementById('user-email');
    const email = emailField.value;
    

    // step-3: get password
    // 3.1: set id on the html element
    // 3.c: get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // Danger: DO NOT VERIFY email password on the client side verify it in server side this is for practice only
    // step-4: verify email and password
    if(email === 'bank@ctg.com' && password === 'secret' ){
        window.location.href = 'bank.html'

    }
    else{
        alert('invalid user');
    }


});