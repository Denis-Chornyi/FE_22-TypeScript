// const menu = [
//   { name: "Margherita", price: 8 },
//   { name: "Pepperoni", price: 10 },
//   { name: "Hawaiian", price: 10 },
//   { name: "Veggie", price: 9 },
// ];

// let cashInRegister = 100;

// let nextOrderId = 1;

// const orderQueue = [];

// const addNewPizza = (pizzaObj) => {
//   menu.push(pizzaObj);
// };

// const placeOrder = (pizzaName) => {
//   const selectedPizza = menu.find((pizza) => pizza.name === pizzaName);
//   cashInRegister += selectedPizza.price;
//   const newOrder = {
//     id: (nextOrderId += 1),
//     pizza: selectedPizza,
//     status: "ordered",
//   };
//   orderQueue.push(newOrder);
//   return newOrder;
// };

// const completeOrder = (orderId) => {
//   const order = orderQueue.find((order) => order.id === orderId);
//   order.status = "completed";
//   return order;
// };

// addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 });
// addNewPizza({ name: "BBQ Chicken", cost: 12 });
// addNewPizza({ name: "Spicy Sausage", cost: 11 });

// placeOrder("Chicken Bacon Ranch");

// completeOrder("1");

// console.log("Menu", menu);
// console.log("Cash in register", cashInRegister);
// console.log("Order queue", orderQueue);