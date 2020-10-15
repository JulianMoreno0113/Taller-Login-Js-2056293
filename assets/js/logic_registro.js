console.log('**REGISTRAR USUARIO**');

// Declaro las variables que se reciben del formulario de registro
const botonIn = document.getElementById('botonIn');
const nombre = document.getElementById('nombre');
const nombreuser = document.getElementById('nombreuser');
const pass = document.getElementById('pass');
let nombres = [];
let nombreusers =[];
let passwords = [];

const GuardarNombre  = () =>{

    nombres.push(nombre.value);

    let nombresG = JSON.stringify(nombres);
    localStorage.setItem('Nombres',nombresG);

    let nombresa = localStorage.getItem('Nombres');

    

}

const GuardarNombreUser  = () =>{

    nombreusers.push(nombreuser.value);

    let nombresuG = JSON.stringify(nombreusers);
    localStorage.setItem('NombreUser',nombresuG);


    let nombreusera = localStorage.getItem('NombreUser');



}
const GuardarPass  = () =>{

    passwords.push(pass.value);

    let passG = JSON.stringify(passwords);
    localStorage.setItem('contraseña',passG);


    let passworda = localStorage.getItem('contraseña');



}

botonIn.addEventListener('click', () => {

    GuardarNombre();
    GuardarNombreUser();
    GuardarPass();

  });



