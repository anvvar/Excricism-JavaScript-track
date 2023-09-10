/// <reference path="./global.d.ts" />

// @ts-check

export function cookingStatus(time) {
  return time === 0
    ? "Lasagna is done."
    : time === undefined
    ? "You forgot to set the timer."
    : "Not done, please wait.";
}
export function preparationTime(layers, time = 2) {
  return layers.length * time;
}
export function quantities(layers) {
  let noodlesCount = 0;
  let sauceCount = 0;
  for (let item of layers) {
    if (item === "noodles") {
      noodlesCount += 1;
    } else if (item === "sauce") {
      sauceCount += 1;
    }
  }
  const obj = {
    noodles: noodlesCount * 50,
    sauce: sauceCount * 0.2,
  };

  return obj;
}
export function addSecretIngredient(friendsList,myList) {
    myList.push(friendsList[friendsList.length-1]);
    
}
export function scaleRecipe(recipe,count) {
 const recipePortioned=
 {
  
 };
for(let item in recipe)
{
    let key=item;
    let value=recipe[item]*count/2;
    recipePortioned[key]=value;   
}
return recipePortioned;
}
