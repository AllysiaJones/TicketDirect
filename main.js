function movieChoice (movieTitle) {
    localStorage.setItem("movie", movieTitle);
}

function removeForm (formId) {
    document.getElementById(formId).style.display = "none";
    document.getElementById("container").classList.remove("blur");
}

function showPassword () {
    let toggle = document.getElementById("password_option");
    document.getElementById("form_email").removeAttribute("required");
    document.getElementById("form_password").removeAttribute("required");

    if (toggle.innerHTML == "Show") {
        toggle.innerHTML = "Hide";
        document.getElementById("form_password").type = "text";
    }
    else {
        toggle.innerHTML = "Show";
        document.getElementById("form_password").type = "password";
    }
}

function forgotPassword(){
    removeForm("sign_in_form");
    document.getElementById("forgot_password_form").style.display = "block";
    document.getElementById("container").classList.add("blur");
}

function confirmAccount () {
    let userEmail = document.getElementById("form_email").value;
    localStorage.setItem("email", userEmail);
    let userPassword = document.getElementById("form_password").value;
    localStorage.setItem("password", userPassword);
    accountStatus();
}

function accountStatus () {
    if(localStorage.getItem("email") != ""){
        removeForm();
        let tabs = document.getElementsByClassName("nav_links");
        tabs[3].innerHTML = "Sign Out";
        tabs[4].innerHTML = "My Account";
    }
} 

function signOut() {
    if(this.innerHTML == "Sign Out"){
        let tabs = document.getElementsByClassName("nav_links");
        tabs[3].innerHTML = "Sign In";
        tabs[4].innerHTML = "Sign Up";
    }
}

function checkPasswords() {
    if (document.getElementById("password1").value == document.getElementById("password2").value ){
        document.getElementById("password_message").style.color = "green";
        document.getElementById("password_message").innerHTML = "Passwords Match!";
        document.getElementById("forgot_password_button").disabled = false;
        return true;
    }
    else {
        document.getElementById("password_message").style.color = "red";
        document.getElementById("password_message").innerHTML = "Passwords do not match";
        document.getElementById("forgot_password_button").disabled = true;
        return false;
    }
}

function storeNewPassword() {
    alert("saving new password");
    localStorage.setItem("userEmail", document.getElementById("forgot_password_email").value);
    localStorage.setItem("newPassword", document.getElementById("password1").value);
    // saveNewPassword(document.getElementById("forgot_password_email").value, document.getElementById("password1").value);
    // removeForm("sign_in_form"); not working
    alert(localStorage.getItem("userEmail") + localStorage.getItem("newPassword"));
    return false;
}

function checkEmail(emailId) {
    let userEmail = document.getElementById(emailId).value
    if(userEmail.includes(".com")) {
        if(foundEmail(userEmail)) {
            document.getElementById("email_message").innerHTML = "Correct Email Entered!"
            document.getElementById("email_message").style.color = "green";
            document.getElementById("forgot_password_button").disabled = false;
        }
        else {
            document.getElementById("email_message").innerHTML = "Incorrect Email"
            document.getElementById("email_message").style.color = "red";
            document.getElementById("forgot_password_button").disabled = true;
        }
        
    }
}