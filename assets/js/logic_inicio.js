console.log('**LOGIN**');

const botonEntrar = document.getElementById('botonEntrar');
const nombreuser = document.getElementById('nombreuser').value;
const pass = document.getElementById('pass').value;

let listanombres =[];


botonEntrar.addEventListener('click', () => {
   
   listanombres =  JSON.parse(localStorage.getItem('NombreUser'));

    for (let nombreU of listanombres) {
      console.log(nombreU);       
      if(nombreU == nombreuser){
         location.href = 'views/inicio.html' ;
      }else{
          console.log('ERROR CONTRASEÑA O NOMBRE DE USUARIO INCORRECTOS');
      }
   
   }


  
     
   
  });