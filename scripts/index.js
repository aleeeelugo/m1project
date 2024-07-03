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


const activityList = new Repository(); 

activityList.createActivity("001", "Ver series", "Lorem Ipsum", "www.pexels.com");
activityList.createActivity("002", "Hacer ejercicio", "Lorem Ipsum", "www.pexels.com");
activityList.createActivity("003", "Comer", "Lorem Ipsum", "www.pexels.com");


console.log(activityList.getAllActivities());
console.log(activityList.deleteActivity("003"));

activityList.createActivity("003", "Dibujar", "Lorem Ipsum", "www.pexels.com");
console.log(activityList.getAllActivities());

//Función que convierte instancia de Activity en HTML 
const formToDo = document.getElementById("formToDo");

formToDo.addEventListener("submit",createCard);

function createCard(e){
    e.preventDefault(); 
    //const {id, title, description, imgUrl} = obj;

    //Llamar campos del form 
    const inptActividad = document.getElementById("inpt_actividad"); 
    const descriptionField = document.getElementById("descriptionField"); 
    const inptImagen = document.getElementById("inpt_imagen");  

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

    //Agregar card a la lista
    const cardList = document.querySelector(".cardList");
    cardList.appendChild(card);  


    //Validación de datos 
    if(inptActividad.value !== "" && descriptionField.value !== "" ){
        h3.textContent=inptActividad.value; 
        p.textContent=descriptionField.value; 
        imgActivity.src="images/image-placeholder-todo.png";

        //Limpiar campos
        inptActividad.value=""; 
        descriptionField.value=""; 
        inptImagen.value="";

    } else {
        alert("No puedes enviar un formulario vacío o completa todos los campos.");
        card.remove();
    }


    /*
      <div class="card">
                <img class="imgActivity" src="images/image-placeholder-todo.png">
                <h3><span class="check"><img class="icon-chek" src="images/icon-check.png"></span>Comer</h3>
                <p class="descripcion">Comer milanesas </p>
                <div class="botones">
                    <a class="icon-edit" href="#"><img src="images/icon-list.png"></a>
                    <a class="icon-trash" href="#"><img src="images/icon-trash.png"></a>
                </div>
            </div>
    */
console.log(card);

};

