let username;
let passwd;
let email;
function TryRegister(){
    if (document.getElementById("password_t").textContent == document.getElementById("c_password_t").textContent) {
        if (document.getElementById("email_t").textContent == document.getElementById("c_email_t").textContent) {
            username = document.getElementById("username_t").textContent;
            email = document.getElementById("email_t").textContent;
            passwd = document.getElementById("password_t").textContent;
            document.cookie = `username=${username};email=${email};passwd=${passwd};`;
        }
        else {
            alert("Los correos no coinciden");
        }
    }
    else{
        alert("Las contraseñas no coinciden");
    }
}