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