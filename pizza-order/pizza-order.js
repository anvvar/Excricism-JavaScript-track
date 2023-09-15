/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let price = 0;
  let extraprice = 0;
  switch (pizza) {
    case "Margherita":
      price = 7;
      break;
    case "Caprese":
      price = 9;
      break;
    case "Formaggio":
      price = 10;
      break;
  }

  extras.filter((option) => {
    if (option == "ExtraSauce") {
      extraprice += 1;
    }
    if (option == "ExtraToppings") {
      extraprice += 2;
    }
  });

  return Number(price + extraprice);
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce(
    (result, order) => result + pizzaPrice(order.pizza, ...order.extras),
    0
  );
}
