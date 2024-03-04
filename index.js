const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
// FUNCIONES

console.log("▂ ▃ ▅ ▆ █ PRIMER EJERCICIO █ ▆ ▅ ▃ ▂ ");
const impar = (x) => {
  const neoArray = x.filter((x) => x.id % 2 === 1);
  let str = "Las pizzas impares son: ";
  for (let i = 0; i < neoArray.length; i++) {
    str += neoArray[i].nombre + "... ";
  }
  console.log(str);
};
impar(pizzas);
console.log("▂ ▃ ▅ ▆ █ SIGUIENTE EJERCICIO █ ▆ ▅ ▃ ▂ ");
const precio = (x, precio) => {
  const neoArray = x.filter((x) => x.precio < precio);
  neoArray.forEach((x) =>
    console.log(
      `La pizza que cuesta menos de $${precio} es la ${x.nombre}, su valor es de $${x.precio}.`
    )
  );
};
precio(pizzas, 600);
console.log("▂ ▃ ▅ ▆ █ SIGUIENTE EJERCICIO █ ▆ ▅ ▃ ▂ ");
const nombrePrecio = (arry) => {
  arry.forEach((x) =>
    console.log(`Nombre: ${x.nombre}, su valor es $${x.precio}`)
  );
};
nombrePrecio(pizzas);
console.log("▂ ▃ ▅ ▆ █ SIGUIENTE EJERCICIO █ ▆ ▅ ▃ ▂ ");

// const nombreIngredientes = (arry) => {
//   let str = "La ";
//   let str2 = " contiene ";
//   for (let i = 0; i < arry.length; i++) {
//     str += arry[i].nombre + str2 + arry[i].ingredientes;
//     console.log(str);
//     str = "La ";
//   }
// };
// nombreIngredientes(pizzas);

// pizzas.forEach((x) =>
//     console.log(`La ${x.nombre}, contiene ${x.ingredientes}`)
//   );

const nombre_precio = (ary) => {
  for (let i = 0; i < ary.length; i++) {
    console.log(`La ${ary[i].nombre} contiene:`);
    ary[i].ingredientes.forEach((x) => console.log(`++ ${x}`));
  }
};
nombre_precio(pizzas);
