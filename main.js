const mongoose = require('mongoose');

const personController = require('./controllers/personController');




async function exec_checkpoint_methods() {
  try {
   
    const person = await personController.create({
      name: "John Doe",
      age: 25,
      favoriteFoods: ["pizza", "pasta"]
    });

    
    const manyPeople = await personController.createPeople([
      { name: "Mary", age: 27, favoriteFoods: ["burrito"] },
      { name: "Jane", age: 29, favoriteFoods: ["burrito", "tacos"] }
    ]);

   
    const maryPeople = await personController.findPeopelByName("Mary");

   
    const Burrito = await personController.searchBurritos();
    console.log("Burrito lovers:", Burrito);

  } catch (err) {
    console.error("Error:", err);
  }
}

exec_checkpoint_methods(); 







mongoose.connect('mongodb://127.0.0.1:27017/person ');


