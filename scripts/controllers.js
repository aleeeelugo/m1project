//Controllers.js
//Crear card desde js
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
 

   /*  const divBtn = document.createElement("div"); 
    divBtn.classList.add("botones");

    const btnIconEdit = document.createElement("a"); 
    const btnIconTrash = document.createElement("a"); 

    btnIconEdit.classList.add("icon-edit");
    btnIconTrash.classList.add("icon-trash");

    const imgIconList = document.createElement("img"); 
    const imgIconTrash = document.createElement("img"); 

    imgIconList.src="images/icon-list.png";
    imgIconTrash.src="images/icon-trash.png"; */

    //Asignar valores innerHTML
    h3.innerHTML=title;
    p.innerHTML=description; 
     // Verificar que imgUrl tenga un valor válido
     if (imgUrl) {
        imgActivity.src = imgUrl;
    } else {
        imgActivity.src = "images/image-placeholder-todo.png"; // Ruta a una imagen predeterminada
    }

    //Agregar los elementos a card
    card.appendChild(imgActivity); 
    h3.appendChild(spanCheck); 
    spanCheck.appendChild(imgIconCheck);
    card.appendChild(h3);
    card.appendChild(p);
     /* 
    card.appendChild(divBtn);
   btnIconEdit.appendChild(imgIconList);
    btnIconTrash.appendChild(imgIconTrash);
    divBtn.appendChild(btnIconEdit);
    divBtn.appendChild(btnIconTrash);
    card.appendChild(divBtn); */

    
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

//Llamar a la función para renderizar todas las actividades en el contenedor  con la clase cardList 
renderAllActivities(activityList, "cardList"); 
