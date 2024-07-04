//Index.js
/* //Crear instancia de Repositoriy
const activityList = new Repository(); 

//Crear algunas actividades 
activityList.createActivity("001", "Ver series", "Lorem Ipsum", "www.pexels.com");
activityList.createActivity("002", "Hacer ejercicio", "Lorem Ipsum", "www.pexels.com");
activityList.createActivity("003", "Comer", "Lorem Ipsum", "www.pexels.com"); */


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

