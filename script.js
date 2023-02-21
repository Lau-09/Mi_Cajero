/* Datos
{Mali contraseña 2020, saldo = 200}
{Gera contraseña 1010, saldo = 290}
{Maui contraseña 0505, saldo = 67}
La primer letra siempre en mayuscula
*/
/* saldo minimo en las cuentas 10, saldo maximo 990 */

/* let cuentas = [
    {user: "Mali", password: "2020", saldo: 200},
    {user: "Gera", password: "1010", saldo: 290},
    {user: "Maui", password: "0505", saldo: 67}
]
*/

let usuarioMali = {
    user: Mali,
    password: 2020,
    saldo: 200,
};

let usuarioGera = {
    user: Gera,
    password: 1010,
    saldo: 290,
};

let usuarioMaui = {
    user: Maui,
    password: 0505,
    saldo: 67,
};

let usuarios = {
    Mali: usuarioMali,
    Gera: usuarioGera,
    Maui: usuarioMaui
};

let infoMali = usuarios.Mali;
let infoGera = usuarios.Gera;
let infoMaui = usuarios.Maui;

function login() {
    
    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;
    console.log(user);
    console.log(password);
    console.log(typeof user);
    console.log(typeof password);

    if ( user == "Mali" && password == "2020") {
        window.location ="about.html"
        console.log(infoMali);
        return false;
    } else if ( user == "Gera" && password == "1010"){
        window.location ="about.html"
        console.log(infoGera);
        return false;
    } else if ( user == "Maui" && password == "0505"){
        window.location ="about.html"
        console.log(infoMaui);
        return false;
    }
    else {
        alert("Tu usuario o contraseña son incorrectas");
        return false;
    }

}

let boton1 = document.getElementById(boton_1);
let boton2 = document.getElementById(boton_2);
let boton3 = document.getElementById(boton_3);

boton1.addEventListener("click", function saldo() {
    if ( user == "Mali" && password == "2020") {
        window.location ="about.html"
        return false;
    } else if ( user == "Gera" && password == "1010"){
        window.location ="about.html"
        console.log(infoGera);
        return false;
    } else if ( user == "Maui" && password == "0505"){
        window.location ="about.html"
        console.log(infoMaui);
        return false;
    }
    else {
        alert("Tu usuario o contraseña son incorrectas");
        return false;
    }
});

let saldoExistente;
let saldoAIngresar;
let saldoARetirar;

function ingresos(cantidad) {
    let nuevoSaldo = saldoExistente + saldoAIngresar;
    
    console.log("El nuevo saldo es: " + nuevoSaldo);
}

function retiros(cantidad) {
    let nuevoSaldo = saldoExistente + saldoARetirar;
    
    console.log("El nuevo saldo es: " + nuevoSaldo);
}
