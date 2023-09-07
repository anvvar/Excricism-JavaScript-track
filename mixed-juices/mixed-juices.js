// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time = 0;
  switch (name) {
    case "Pure Strawberry Joy":
      time = 0.5;
      break;
    case "Energizer":
    case "Green Garden":
      time = 1.5;
      break;
    case 'All or Nothing':
      time = 5;
      break;
    case 'Tropical Island':
      time = 3;
      break;
      default:
      time = 2.5;
  }
  return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {

  let count = 0;
  while(wedgesNeeded > 0 && count < limes.length){
    switch(limes[count]){
      case 'small': wedgesNeeded -=  6;
      break;
      case 'medium' : wedgesNeeded-=8;
      break;
      case 'large': wedgesNeeded -=10;
      break;
    }
    count++
  } 
  return count;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let index=0;
  while(timeLeft>0)
  {
    timeLeft-= timeToMixJuice(orders[index])
     orders.shift();
  }
  return orders;
}
