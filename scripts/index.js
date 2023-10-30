//window.addEventListener("load", inicioSesion);

let saldo = 1000;
let tries = 3;
let correctPswrd = "1234";

function mostrarSaldo() {
    const message = document.getElementById("message")
    message.textContent = `Su saldo es: ${saldo}`
}

/*function inicioSesion() {
    const pswrd = prompt("Ingrese la contraseña: ")

    while (tries > 1 && pswrd !== correctPswrd) {
        tries--
        alert(`Constraseña incorrecta le quedan ${tries}`)
        prompt("Ingrese la contraseña: ")

    }

    if (pswrd !== correctPswrd) {
        window.location.replace("/templates/block.html")
    } else {
        alert("Se ha iniciado sesión con éxito")
        mostrarSaldo()
    }

}*/


function depositar() {
    const depositar = parseFloat(prompt("Cantidad a depositar: "))

    if (isNaN(depositar) || depositar <= 0) {
        alert("Cantidad no válida")
    } else {
        saldo += depositar;
        mostrarSaldo()
    }
}

function retirar() {
    const retirar = parseFloat(prompt("Cantidad a retirar: "))

    if (isNaN(retirar) || retirar <= 0 || retirar > saldo) {
        alert("Cantidad no válida")
    } else {
        saldo -= retirar;
        mostrarSaldo()
    }
}

function transferir() {
    const transferir = parseFloat(prompt("Cantidad a transferir: "))

    if (isNaN(transferir) || transferir <= 0 || transferir > saldo) {
        alert("Cantidad no válida")
    } else {
        const cuenta = prompt("Numero de cuneta: ")

        if (/^ES\d{22}$/.test(cuenta) === false) {
            alert("Numero de cuneta no válido")
        } else {
            saldo -= transferir;
            mostrarSaldo()
        }
    }
}

function changePswrd() {
    const pswrd = prompt("Ingrese su contraseña: ")
    
    if (pswrd === correctPswrd) {
        const newPswrd = prompt("Nueva contraseña: ")
        correctPswrd = newPswrd
        console.log("La nueva contraseña es: " + correctPswrd)
    }else{
        alert("Contraseña incorrecta. No se puede cambiar la contraseña")
    }

}

function exit (){
    window.location.replace("/templates/exit.html")
}