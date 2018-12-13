/**
 * removeForm function.
 * gets the id of the form and removes the form and blur effect on homepage
 * @param {string} formId 
 */
function removeForm(formId) {
    document.getElementById(formId).style.display = "none";
    if (formId == "sign_in_form") {
        document.getElementById("container").classList.remove("blur");
    }
}

/**
 * showPassword function.
 * toggles the password between showing and hiding the password
*/
function showPassword() {
    let toggle = document.getElementsByClassName("password_option")[0];
    document.getElementsByClassName("form_email")[0].removeAttribute("required");
    document.getElementsByClassName("form_password")[0].removeAttribute("required");
    if (toggle.innerHTML == "Show") {
        toggle.innerHTML = "Hide";
        document.getElementById("password").type = "text";
    }
    else {
        toggle.innerHTML = "Show";
        document.getElementById("password").type = "password";
    }
}

/**
 * forgotPassword function.
 * if user selects that they forgot their password, display the form and keep blur effect on home page
 * @param {string} pageName 
 */
function forgotPassword(pageName) {
    document.getElementById("forgot_password_form").style.display = "block";
    if (pageName == "index.html") {
        document.getElementById("container").classList.add("blur");
    }
}

/**
 * accountStatus function.
 * when each page loads, have the correct navigation links shown based on if signed in or not
 */
function accountStatus() {
    if (localStorage.getItem("signedIn") == "true") {
        signIn();
    }
    else {
        signOut();
    }
}

/**
 * changeStatus function.
 * updates the locally stored signedIn item based on if the user is signed in or not
 * @param {string} status 
 */
function changeStatus(status){
    if(status == "signIn"){
        localStorage.getItem("signedIn") == "true";
    }
    else {
        localStorage.getItem("signedIn") == "false";
    }
}

/**
 * signIn function.
 * changes the navigation links to the signed in option
 * locally stores signedIn item as true
 * changes the status of signedIn item
 * @return {boolean} false for on submit call on form 
 */
function signIn() {
    let tabs = document.getElementsByClassName("nav_links");
    tabs[2].innerHTML = "Sign Out";
    tabs[3].innerHTML = "My Account";
    localStorage.setItem("signedIn", "true");
    changeStatus("signIn");
    return false;
}

/**
 * signOut function.
 * changes the navigation links to the signed out option
 * locally stores signedIn item as false
 * changes the status of signedIn item 
 */
function signOut() {
    let tabs = document.getElementsByClassName("nav_links");
    tabs[2].innerHTML = "Sign In";
    tabs[3].innerHTML = "Sign Up";
    localStorage.setItem("signedIn", "false");
    changeStatus("signOut");
}

/**
 * checkPasswords function.
 * checks the password and confirm password on the sign up and forgot password forms
 * displays if the passwords are the same or not and once they are the same, enables button to continue
 */
function checkPasswords() {
    if (document.getElementById("password1").value == document.getElementById("password2").value) {
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