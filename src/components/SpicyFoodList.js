import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  
  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [ ...foods, newFood];
    setFoods(newFoodArray);
    console.log(newFood);
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li> 
  ));
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );

  
  function handleLiClick(id) {
    const food = foods.map((food)) 
    const newFoodArray = foods.filter((food) => food.id !== id);
    [1, 2, 3].filter((number) => number !== 3);
    setFoods(newFoodArray);


    if (food.id === id) {
      return {
        ...food,
        heatLevel: food.heatLevel + 1,
      };
    } else {
      return food;
    }
  };
  /*{setFoods(newFoodArray);*/

}


export default SpicyFoodList;
