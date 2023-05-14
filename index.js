const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];




const error = (msj) => {
  const contenedor = document.querySelector(".contenedor");
    contenedor.innerHTML = "";

  const inputNumber = document.querySelector("#input-number");
  inputNumber.classList.add("msj-error");

  const contenedorError = document.querySelector(".contenedor-error");
  contenedorError.innerHTML = "";
  
  const small = document.createElement("small");
  small.classList.add("msj-error");
  small.innerText = msj;

  contenedorError.appendChild(small);
}
    
const LS_DATOS = "LS_DATOS";


 const mostrarPizza = (pizza) => {

  const contenedor = document.querySelector(".contenedor");
    contenedor.innerHTML = "";

  const div = document.createElement("div");
           div.classList.add("contenedor-pizza");
        
            const h3 = document.createElement("h3");
            h3.classList.add("nombre-pizza");
            h3.innerText = pizza.nombre;
    
            const img = document.createElement("img");
            img.classList.add("imagen-pizza");
            img.src = pizza.imagen;
    
            const p = document.createElement("p");
            p.classList.add("precio-pizza");
            p.textContent = pizza.precio;

            contenedor.appendChild(div);
            div.appendChild(h3);
            div.appendChild(img);
            div.appendChild(p);

 }

 const buscarPizza = () => {
    const inputNumber = document.querySelector("#input-number");
    let number = inputNumber.value;
    inputNumber.classList.remove("msj-error");

    const contenedorError = document.querySelector(".contenedor-error");
    contenedorError.innerHTML = "";

    if (number.trim() === ""){
      error("Ingresa un numero");
      return;
    }

    
    for (let i = 0; i < pizzas.length; i++) {
      const pizza = pizzas[i];
      if (pizza.id == number) {

        mostrarPizza(pizza);
        ingredientesPizza(pizza);

            localStorage.setItem(LS_DATOS,JSON.stringify(pizza));
            return;
      }
    }
    
    error("No se encontro pizza con ese numero");

  
} 

init = () => {

  const pizzaString = localStorage.getItem(LS_DATOS);
  if(pizzaString !== null){
    const pizza = JSON.parse(pizzaString);
    mostrarPizza(pizza);
  }
  
}

init();

ingredientesPizza = (pizza) => {

  const contenedor = document.querySelector(".contenedor-pizza");

  const p = document.createElement("p");
            p.classList.add("ingredientes");
            p.innerText = pizza.ingredientes;

 contenedor.appendChild(p);
}
