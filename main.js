function movieChoice (movieTitle) {
    localStorage.setItem("movie", movieTitle);
}

function removeForm () {
    document.getElementById("sign_in_form").style.display = "none";
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

function confirmAccount () {
    let userEmail = document.getElementById("form_email").value;
    localStorage.setItem("email", userEmail);
    let userPassword = document.getElementById("form_password").value;
    localStorage.setItem("password", userPassword);
}

function accountStatus () {
    if(localStorage.getItem("email") != null){
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

        localStorage.clear();
        sessionStorage.clear();
    }
}

document.addEventListener("DOMContentLoaded", accountStatus);
alert(localStorage.getItem("email"));