//interaccion en el carrito de compras del encabezado
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

//validar el formulario//

const formulario = document.querySelector('#formulario');
const nameInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

formulario.addEventListener("submit", (event) =>{
    event.preventDefault();


    //verificar si el nombre esta vacío
    if (nameInput.value === "") {
        alert("Por favor, completar su nombre");
        return;
    }

    //verificar si el e-mail esta completo e si es válido
    if (emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, complete su e-mail");
        return;
    }

    //verificar si la contraseña esta completa
    if(!validatePassword(passwordInput.value)){
        alert("Contraseña mínimo con 8 digítos");
        return;
    }

    //se todos los campos estuvieran completos, enviar el formulario
    formulario.submit();
})

//función que valida e-mail

function isEmailValid(email){
    //crear un regex para validar email
    const emailRegex = new RegExp(
        //usuario20@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)){
        return true;
    }

    return false;
}

//función que valida la contraseña
function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        //contraseña válida
        return true
    }
    //contraseña inválida
    return false
}