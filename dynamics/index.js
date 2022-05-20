const boton = document.getElementById("boton"); 
const input = document.getElementById("input");
const Listamaterias = document.getElementById("Listamaterias");
const lista = document.getElementById("listaTareas");
const form = document.getElementById("form");
const materiaNueva = document.getElementById("materiaNueva");
const div = document.getElementById("tareas");
var marca = document.createElement("span"); 
var crearinput = document.createElement("input"); 
let pendientes=" tareas acabadas de ";
let nombreMateria = Listamaterias.value, otraMat=0, child=0, totalTareas=0, completadas=0, conteo=0; //variables utilizadas al rededor las funciones iterativas 
crearinput.innerHTML="<input class='texto' id='otra' type='text'/>";

let nom = crearinput.innerHTML; 

Listamaterias.addEventListener("change", (evento)=>
{
    nombreMateria = Listamaterias.value;
    if(nombreMateria=="Otra"){   
        materiaNueva.appendChild(crearinput);
        otraMat=1;
        child=1;
    }
    else{
        if(child==1)
        {
            materiaNueva.removeChild(crearinput); 
           child=0;
        }
        otraMat=0;
    }
});


boton.addEventListener("click", (evento)=>{
    var tarea = input.value;
    var noimprimir = 0; 
    if(input.value == "")
    {
            alert("Necesitas ingresar una tarea.");
    }
    else{
        if(tarea != "")
        {
            if(otraMat != 1){
                lista.innerHTML += "<div id='"+conteo+"' class='tarea'>"+"<div id='ariba'><span class='boton'><strong>"+nombreMateria+"</strong></span>"+'</div>'+'<br><br><div id="izquierda">'+tarea+'</div><div id="derecha"><button class="boton"id="completar">Marcar como completada</button><button class="boton" id="borrar">Eliminar</button>'+'</div></div>';
                totalTareas++;
                if(completadas==1)
                    pendientes=" tarea pendiente de "
                else
                    pendientes=" tareas pendientes de "
                marca.innerHTML=completadas+pendientes+totalTareas;
                conteo++;
                console.log(conteo);//tareas total
            }
            else
            {
                nombreMateria=crearinput.value;
                console.log(nombreMateria);
                if((nombreMateria == "Biología") || (nombreMateria == "Pintura") || ( nombreMateria == "Computación") || ( nombreMateria ==  "Geografía") || (nombreMateria ==  "Astronomía"))
                {
                    alert("Esta materia ya se encuentra registrada."); 
                }
                else
                {
                    lista.innerHTML += "<div id='"+conteo+"' class='tarea'>"+"<div id='ariba'><span class='boton'><strong>"+nombreMateria+"</strong></span></div>"+'<br><div id="izquierda">'+ tarea + '</div><div id="derecha"><button class="boton"id="completar">Marcar como completada</button><br><button class="boton" id="borrar">Eliminar</button>'+'</div></div>';    
                    totalTareas++;
                    if(completadas==1)
                        pendientes=" tarea completa de "
                    else
                        pendientes=" tareas completadas de "
                    marca.innerHTML=completadas+pendientes+totalTareas;
                    conteo++;
                    console.log(conteo);//tareas total
                }
            }
        } 
    
    }
    console.log(nom); 
});
    
lista.addEventListener("click" , (evento)=>{

    if(evento.target.className== "boton")
    {
        id=evento.target.id; 
        if(id=="borrar"){
            
            if(evento.target.parentElement.children[0].innerHTML=="Sin terminar")
                completadas--;
                console.log(completadas);//tareas total
         
            let i=totalTareas-1;
           
            while(i>evento.target.parentElement.parentElement.id)
            {
                var crea=lista.children[i].id;
                crea--;
                lista.children[i].id=crea;
                i--; 
            }
                
            evento.target.parentElement.parentElement.remove();
            totalTareas--;
                conteo--;
        }
        if(id=="completar"){
           
             if(evento.target.innerHTML=="Marcar como completada")
            {
                completadas++;
                evento.target.parentElement.parentElement.setAttribute("style", "background-color: #F1E7CA");
                evento.target.innerHTML= "Sin terminar";
            }
            else{
                completadas--;
                evento.target.parentElement.parentElement.setAttribute("style", "background-color: #FBE8AD");
                evento.target.innerHTML = "Marcar como completada";
            }
        }
    }

    if(completadas==1)
        pendientes=" tarea completa de "
    else
        pendientes=" tareas completadas de "
    marca.innerHTML=completadas+pendientes+totalTareas;
});
div.appendChild(marca);