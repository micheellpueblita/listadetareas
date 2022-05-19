//const agregar = document.getElementById("agregar"); //agregamos constantes
const input = document.getElementById("input"); //onjeto
//const option = document.getElementsById("materia"); 
const materia = document.getElementById("materia"); //es la parte del select 
const tareas = document.getElementById("tareas"); 
const materiaNueva = document.getElementById("materiaNueva"); //es el div en el html 
//const opcion = document.getElementById("biologia"); 

agregar.addEventListener("click", (evento) =>{
  tareas.innerHTML += (materia.value+  ": " + input.value); 
  tareas.innerHTML += "<button class='boton'>Borrar</button> <br/> <br/>  <button class= 'botoncompl'>Marcar como completada</button>"; 
}); 

console.log(materia.innerHTML); 
//console.log(materia.innerHTML += ('<option value="'+(materiaCreada.value) + '" id = " ' + materiaCreada.value + '"> '+ materiaCreada.value + '</option>')); 

//aquí tratamos de agregar la materia al select pero no pudimos LOL 
agregar.addEventListener("click", (evento) =>{ //aqui insertamos el input 
  if(materia.value == "otro")
  {
    materiaNueva.innerHTML += "<input type='text' id='materiaCreada' placeholder='Materia'>";//aqui desplegamos el input con un nuevo id
    const materiaCreada = document.getElementById("materiaCreada"); //aqui agregamos las constante nueva del nuevo id creado
    console.log(materiaCreada.value); 
  }
});

tareas.addEventListener("click", (evento) => {
  console.log(evento.target);
    if(evento.target.className === 'boton'){ //sabemos q es un botón 
         evento.target.parentElement.outerHTML = '';
    };
    if(evento.target.className === 'botoncompl'){ //sabemos q es un botón 
         evento.target.parentElement.style.color= 'red';
    };
});
