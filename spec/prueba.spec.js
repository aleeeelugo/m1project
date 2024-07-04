//Se importan las clases desde nuestro documento de modelos 

/*
- Repository y Activity deberían ser una clase 
- Debería tener una instancia de la clase Repository
- Debería tener un método llamado getAllActivities 
- Debería tener un método llamado createActivity
- Debería tener un método llamado deleteActivity

*/

const {Activity, Repository, activityList} = require("../scripts/models");



//Describe sirve para unificar varios test - String
//Verificar Repository
describe("Test de Repository", function () {
  //It define que será y se llama a un callback 
  it("Repository debe ser una clase", function () {
    //Expect y Matcher
    expect(typeof Repository).toBe("function"); //Verificar que sea una clase
  });
});
 

//Verificar Activity
describe("Test de Activity", function () {
  //It define que será y se llama a un callback 
  it("Activity debe ser una clase", function () {
    //Expect y Matcher
    expect(typeof Activity.prototype.constructor).toBe("function"); //Verificar que sea una clase
  });
});
 

//Verificar Instancia de Repository
describe("Test de Instancia Repository", function () {
  //It define que será y se llama a un callback 
  it("Repository debe tener una instancia", function () {
    //Expect y Matcher
    expect(activityList instanceof Repository).toBe(true); //Verificar que tenga una instancia
  });
});

//Debería tener un método llamado getAllActivities
describe("Test de getAllActivities", function () {
  //It define que será y se llama a un callback 
  it("Debería tener un método llamado getAllActivities", function () {
    //Expect y Matcher
    expect(activityList.getAllActivities).toBeDefined(); //Verificar que texista el método
  });
});

//Debería tener un método llamado createActivity
describe("Test de createActivity", function () {
  //It define que será y se llama a un callback 
  it("Debería tener un método llamado createActivity", function () {
    //Expect y Matcher
    expect(activityList.createActivity).toBeDefined(); //Verificar que exista el método
  });
});

//Debería tener un método llamado deleteActivity
describe("Test de deleteActivity", function () {
  //It define que será y se llama a un callback 
  it("Debería tener un método llamado deleteActivity", function () {
    //Expect y Matcher
    expect(activityList.deleteActivity).toBeDefined(); //Verificar que exista el método
  });
});

