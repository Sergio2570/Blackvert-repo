console.log("Cargando usuarios...");
let username;
let passwd;
let galleta = document.cookie;
function TryLogin(){
    username = document.getElementById("username_box").textContent;
    passwd = document.getElementById("pwd_box").textContent;
    if (galleta.includes(username)) {
        if (galleta.includes(pwd_box)) {
            alert("Inicio de sesión correcto");
            
        }
        else {
            alert("Revise que los datos introducidos que son válidos");
        }
    }
    else{
        alert("Revise que los datos introducidos que son válidos");
    }
}