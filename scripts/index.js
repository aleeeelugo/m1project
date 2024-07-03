/*Clase Activity */

class Activity {
    constructor(id, title, description, imgUrl){
        this.id = id; 
        this.title=title; 
        this.description = description; 
        this.imgUrl = imgUrl; 
    }
}

/* Clase Repository */
class Repository {
    constructor(){
        //Propiedad Activities para almacenar las actividades
        this.activities = []; 
    }

    //Método getAllActivities
  getAllActivities(){
        //Nos va devolver el arreglo con las actividades
        return this.activities;
    }

    
    //Método createActivity
    //Va a instanciar una actividad con los datos correspondientes 
   createActivity(id, title, description, imgUrl){
        const newActivity = new Activity(id, title, description, imgUrl);
        this.activities.push(newActivity);
    }

    //Método deleteActivity
    deleteActivity(id){
       console.log("Delete activity");
       this.activities = this.activities.filter(function(activity){
            //activity.id === id; 
            //console.log(activity.id !== id);
            return activity.id !== id;
       });
       return this.activities; // Retorna el arreglo actualizado después de eliminar
    }
     

}

/*
const activityList = new Repository(); 

activityList.createActivity("001", "Ver series", "Lorem Ipsum", "www.pexels.com");
activityList.createActivity("002", "Hacer ejercicio", "Lorem Ipsum", "www.pexels.com");
activityList.createActivity("003", "Comer", "Lorem Ipsum", "www.pexels.com"); */


/* console.log(activityList.getAllActivities());
console.log(activityList.deleteActivity("003"));

activityList.createActivity("003", "Dibujar", "Lorem Ipsum", "www.pexels.com");
console.log(activityList.getAllActivities()); */


function createActivityCard(activity){
    const { title, description, imgUrl} = activity;

    //Crear elemento card 
    const card = document.createElement("div");
    card.classList.add("card"); 

    const imgActivity = document.createElement("img");
    imgActivity.classList.add("imgActivity");

    const h3 = document.createElement("h3");
   
    const spanCheck = document.createElement("span");
    spanCheck.classList.add("check"); 
    const imgIconCheck = document.createElement("img");
    imgIconCheck.classList.add("icon-chek"); 
    imgIconCheck.src="images/icon-check.png";
    
    const p = document.createElement("p"); 
    p.classList.add("descripcion");
 

    const divBtn = document.createElement("div"); 
    divBtn.classList.add("botones");

    const btnIconEdit = document.createElement("a"); 
    const btnIconTrash = document.createElement("a"); 

    btnIconEdit.classList.add("icon-edit");
    btnIconTrash.classList.add("icon-trash");

    const imgIconList = document.createElement("img"); 
    const imgIconTrash = document.createElement("img"); 

    imgIconList.src="images/icon-list.png";
    imgIconTrash.src="images/icon-trash.png";

    //Asignar valores innerHTML
    h3.innerHTML=title;
    p.innerHTML=description; 
    imgActivity.src=imgUrl;

    //Agregar los elementos a card
    card.appendChild(imgActivity); 
    h3.appendChild(spanCheck); 
    spanCheck.appendChild(imgIconCheck);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(divBtn);
    btnIconEdit.appendChild(imgIconList);
    btnIconTrash.appendChild(imgIconTrash);
    divBtn.appendChild(btnIconEdit);
    divBtn.appendChild(btnIconTrash);
    card.appendChild(divBtn);

    
console.log(card);
return card; 

};

//Usar la función con una instancia de Activity
const myActivity = new Activity; 
const activityCard = createActivityCard(myActivity); 


function renderAllActivities(repository, containerID){
//Seleccionar el contenedor de cards
 const container = document.getElementById(containerID);
 
//Vaciar el contenedor de cards 
 container.innerHTML="";  

 //Obtener el listado de actividades completo
 const activities = repository.getAllActivities(); 

//Mapear el listado de actividades para convertirlas en elementos HTML 
const activityCards = activities.map(createActivityCard); 

//Appendear todos los elementos HTML (las cards) dentro del contenedor  
activityCards.forEach((card)=>{
    container.appendChild(card);
})


}

//Crear instancia de Repositoriy
const activityList = new Repository(); 

//Crear algunas actividades 
activityList.createActivity("001", "Ver series", "Lorem Ipsum", "www.pexels.com");
activityList.createActivity("002", "Hacer ejercicio", "Lorem Ipsum", "www.pexels.com");
activityList.createActivity("003", "Comer", "Lorem Ipsum", "www.pexels.com");

//Llamar a la función para renderizar todas las actividades en el contenedor  con la clase cardList 
renderAllActivities(activityList, "cardList"); 


const formToDo = document.getElementById("formToDo");

//formToDo.addEventListener("submit",handlerForm);

function handlerForm(repository, containerId){
   
    //Seleccionar los fields del form 
    const inptActividad = document.getElementById("inpt_actividad"); 
    const descriptionField = document.getElementById("descriptionField"); 
    const inptImagen = document.getElementById("inpt_imagen");  

    //Tomar los valores ingresados en los inputs
    const title = inptActividad.value; 
    const description = descriptionField.value; 
    const imgUrl  = inptImagen.value; 


    //Validación de datos 
    if(!title || !description || !imgUrl  ){
        alert("No puedes enviar un formulario vacío o completa todos los campos.");
        return; 
    } 

    // Llamar al método correspondiente de la instancia de Repository para crear una nueva actividad
        const id = repository.getAllActivities().length + 1; // Asignar un ID único basado en la longitud actual
        repository.createActivity(id, title, description, imgUrl);

    // Invocar la función que implementamos anteriormente para "refrescar" el contenedor de actividades
        renderAllActivities(repository, containerId);

    // Limpiar los inputs después de agregar la actividad
    inptActividad.value = '';
    descriptionField.value = '';
    inptImagen.value = '';

}
  // Ejemplo de uso: agregar un event listener al botón
    const repository = new Repository();

    document.getElementById('addActivityButton').addEventListener('click', (e) => {
    e.preventDefault(); 
    handlerForm(repository, 'cardList');

}); 



