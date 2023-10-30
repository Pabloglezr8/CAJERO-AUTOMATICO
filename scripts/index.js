/*
Autor: Pablo Gonzalez Ruiz
GitHub: https://github.com/Pabloglezr8/CAJERO-AUTOMATICO.git
*/

//cuando carga la página lo primero que se ejecuta es la funcion de iniciar sesión
window.addEventListener("load", inicioSesion);

let saldo = 1000;
let tries = 3;
let correctPswrd = "1234";

//funcion para mostrar el saldo
function mostrarSaldo() {
    const message = document.getElementById("message")
    message.textContent = `Su saldo es: ${saldo}€`
}

//funcion para iniciar sesion
function inicioSesion() {
    const pswrd = prompt("Ingrese la contraseña: ")

    while (tries > 1 && pswrd !== correctPswrd) {
        tries--
        alert(`Constraseña incorrecta le quedan ${tries}`)
        prompt("Ingrese la contraseña: ")
        return;
    }

    if (pswrd !== correctPswrd) {
        window.location.replace("/templates/block.html")
    } else {
        alert("Se ha iniciado sesión con éxito")
        mostrarSaldo()
    }

}

// funcion para ingresar dinero
function depositar() {
    const depositar = parseFloat(prompt("Cantidad a depositar: "))

    if (isNaN(depositar) || depositar <= 0) {
        alert("Cantidad no válida")
    } else {
        saldo += depositar;
        mostrarSaldo()
    }
}

//funcion para retirar dinero
function retirar() {
    const retirar = parseFloat(prompt("Cantidad a retirar: "))

    if (isNaN(retirar) || retirar <= 0 || retirar > saldo) {
        alert("Cantidad no válida")
    } else {
        saldo -= retirar;
        mostrarSaldo()
    }
}

//funcion para transferir
function transferir() {
    const transferir = parseFloat(prompt("Cantidad a transferir: "))

    if (isNaN(transferir) || transferir <= 0 || transferir > saldo) {
        alert("Cantidad no válida")
    } else {
        const cuenta = prompt("Numero de cuneta: ")

        if (/^(ES\d{22})$/.test(cuenta) === false) {
            alert("Numero de cuneta no válido")
        } else {
            saldo -= transferir;
            mostrarSaldo()
        }
    }
}

//funcion para cambiar la contraseña
function changePswrd() {
    const pswrd = prompt("Ingrese su contraseña: ")

    if (pswrd === correctPswrd) {
        const newPswrd = prompt("Nueva contraseña: ")
        correctPswrd = newPswrd
        console.log("La nueva contraseña es: " + correctPswrd)
    } else {
        alert("Contraseña incorrecta. No se puede cambiar la contraseña")
    }

}

//funcion para cuando salimos del cajero
function exit() {
    window.location.replace("/templates/exit.html")
}

