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


 const agregarClick = () => {
    const inputNumber = document.querySelector("#input-number");
    let number = inputNumber.value;
    let sonIguales = false;
    
    for (let i = 0; i < pizzas.length; i++) {
      if (pizzas[i].id == number) {
        console.log("hola");

      const contenedor = document.querySelector(".contenedor");
        
                const h3 = document.createElement("h3");
                h3.classList.add("nombre-pizza");
                h3.innerText = pizzas[i].nombre;
        
                const img = document.createElement("img");
                img.classList.add("imagen-pizza");
                img.src = pizzas[i].imagen;
        
                const p = document.createElement("p");
                p.classList.add("precio-pizza");
                p.textContent = pizzas[i].precio;
        
                contenedor.appendChild(h3);
                contenedor.appendChild(img);
                contenedor.appendChild(p);

                return;
      }
      else if (inputNumber.value.trim() === ""){
        console.log("el contenedor esta vacio");
        return;
      }
    }
    
    console.log("bye");

  
} 


/*
<h3>Pizza</h3>
            <img src="img/4quesos.png" alt="">
            <p>$1500</p> 

*/

