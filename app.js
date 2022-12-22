import { liveInput } from "./Helpers/liveInputSearcher.js";

liveInput.tomarLiveInput();
liveInput.clickIconoBuscador();

let cardsContainer = document.querySelectorAll(".cards-container");
const emergente2 = document.getElementById("emergente2");

const linkVerProducto = () => {
  document.querySelectorAll(".link-producto").forEach((elem) =>
    elem.addEventListener("click", function clickeo(e) {
      console.log(e.target.closest(".cards-container").id);
      console.log(e.target.closest(".card").id);
      let categoriaProd = e.target.closest(".cards-container").id;
      console.log("categoria del product:", categoriaProd);
      let idProd = e.target.closest(".card").id;

      window.location.href = `./Pages/Productos/Vista-producto/vista_producto.html?id=${idProd}&categoria=${categoriaProd}`;
      console.log("el evento fue en =>", this); //this se usa acá para que tome todo el elemento el click, siosi en function() nombrada, no anonima xq con e.target solo trae el elemento, el this, es mas global
    })
  );
};

//carga a cada card por section la data-------
cardsContainer.forEach((elem) => {
  fetch(`https://json-server-db.onrender.com/productos?categoria=${elem.id}`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((el) => {
        let card = `
      <div class="card" id='${el.id}'>
      <div class="img-name">
       <div class="card-img">
        <img src="${el.img}" />
       </div>
      <p class="p-productName">${el.productName}</p>
       </div>
      <div class="precio-link">
        <p class="p-precio">$${el.precio}</p>
        <a class="link-producto">Ver producto</a>
      </div>
   </div>
   `;

        elem.innerHTML += card;
      });

      linkVerProducto()
    });
});

//cada link "ver todo->" de los productos
const linkVerTodo = document.querySelectorAll(".linkVerTodo");
linkVerTodo.forEach((el) => el.addEventListener("click", getElement));
//----------------------------------------------------------------------------------------------------------------------------

//crea el "ver todos los productos" en overlay
function getElement(e) {
  const node = e.target.parentNode.parentNode.parentNode.parentNode;
  console.log(node);
  const clone = node.cloneNode(true);

  let div = document.createElement("div");
  div.classList.add("emergente");
  let span = document.createElement("span");
  span.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  div.appendChild(span);
  div.appendChild(clone);
  document.body.prepend(div);
  let cardsContainer = document.querySelectorAll(".cards-container");

  //maneja el click para cerrar "X" el overlay con los productos
  function closeSpan() {
    div.style.display = "none";
    cardsContainer.forEach((el) => el.classList.remove("cardsC-cambio"));
    document.body.classList.remove("no-scroll");
    card.forEach((el) => {
      el.classList.remove("cardC-cambio");
    });
    div.remove();
  }
  span.addEventListener("click", closeSpan);

  const productos = document.querySelector(".productos");
  const card = document.querySelectorAll(".card");

  document.body.classList.add("no-scroll");
  cardsContainer.forEach((el) => el.classList.add("cardsC-cambio"));
  card.forEach((el) => {
    el.classList.add("cardC-cambio");

    linkVerProducto()
  });
}

//btn-"ver consolas-HERO"
const btnRedir = document.getElementById("btn-redir");
const consolas = document.getElementById("consolas");

//"ver consolas" del HERO
btnRedir.addEventListener("click", () => {
  window.location.href = "./index.html#consolas";
  setTimeout(() => {
    consolas.style.outline = "4px dashed red";
    consolas.style.backgroundColor = "#2a7be475";
  }, 50);
  setTimeout(() => {
    window.scrollTo(0, window.scrollY - 300);
    consolas.style.outline = "none";
    consolas.style.backgroundColor = "transparent";
  }, 1000);
});

//---------------------------------------------------------------------------------------------------------------------------

//botones para mover las cards de izq a derecha
let pageLeft = document.querySelectorAll(".pageLeft");
let pageRight = document.querySelectorAll(".pageRight");
const i = document.querySelectorAll(".productos span.pageLeft");

pageLeft.forEach((el, key, array) => {
  if (key == 0) {
    el.addEventListener("click", () => {
      cardsContainer[key].scrollTo(
        cardsContainer[key].scrollLeft - cardsContainer[key].clientWidth,
        0
      );
      setTimeout(() => {
        array[key].classList.add("pageAnimate");
      }, 10);
      array[key].classList.remove("pageAnimate");
      setTimeout(() => {}, 5000);
    });
  } else if (key == 1) {
    el.addEventListener("click", () => {
      cardsContainer[key].scrollTo(
        cardsContainer[key].scrollLeft - cardsContainer[key].clientWidth,
        0
      );
      setTimeout(() => {
        array[key].classList.add("pageAnimate");
      }, 10);
      array[key].classList.remove("pageAnimate");
    });
  } else if (key == 2) {
    el.addEventListener("click", () => {
      cardsContainer[key].scrollTo(
        cardsContainer[key].scrollLeft - cardsContainer[key].clientWidth,
        0
      );
      setTimeout(() => {
        array[key].classList.add("pageAnimate");
      }, 10);
      array[key].classList.remove("pageAnimate");
    });
  }
});

pageRight.forEach((el, key, array) => {
  console.log();
  if (key == 0) {
    el.addEventListener("click", () => {
      cardsContainer[key].scrollTo(
        cardsContainer[key].scrollLeft + cardsContainer[key].clientWidth,
        0
      );
      setTimeout(() => {
        array[key].classList.add("pageAnimate");
      }, 10);
      array[key].classList.remove("pageAnimate");
    });
  } else if (key == 1) {
    el.addEventListener("click", () => {
      cardsContainer[key].scrollTo(
        cardsContainer[key].scrollLeft + cardsContainer[key].clientWidth,
        0
      );
      setTimeout(() => {
        array[key].classList.add("pageAnimate");
      }, 10);
      array[key].classList.remove("pageAnimate");
    });
  } else if (key == 2) {
    el.addEventListener("click", () => {
      cardsContainer[key].scrollTo(
        cardsContainer[key].scrollLeft + cardsContainer[key].clientWidth,
        0
      );
      setTimeout(() => {
        array[key].classList.add("pageAnimate");
      }, 10);
      array[key].classList.remove("pageAnimate");
    });
  }
});
//--------------------------------------------------------------------------------------------------------------------------

// });

// console.log(nombresTodosProductos);

// nombresTodosProductos.filter(elem=>)

// toma la data en vivo del searcher y filtra por las coincidencias

// const tomarLiveInput = () => {
//   let nombresTodosProductos = [];
//   fetch(`http://localhost:3000/productos`)
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((el) =>
//         nombresTodosProductos.push({
//           id: el.id,
//           nombre: el.productName,
//           img: el.img,
//           categoria: el.categoria,
//           descripcion: el.descripcion,
//         })
//       );
//     });

//   const searchBar = document.querySelector(".matchSearch");
//   const loginButton = document.querySelector(".nav__menu-btn");

//   // nombresTodosProductos;
//   let inputSearchBar = document.getElementById("searchBar");
//   let divSearchBarItems = document.createElement("div");
//   divSearchBarItems.classList.add("divSearchBarItems");
//   searchBar.appendChild(divSearchBarItems);

//   inputSearchBar.addEventListener(
//     "keydown",
//     () => (divSearchBarItems.innerHTML = "")
//   );

//   inputSearchBar.addEventListener("blur", (e) => {
//     e.target.value = "";
//     inputSearchBar.style.width = "100%";
//     setTimeout(() => {
//       divSearchBarItems.innerHTML = "";
//       loginButton.classList.remove("invisible");
//       loginButton.classList.add("visible");
//     }, 100);
//   });

//   inputSearchBar.addEventListener("focus", () => {
//     inputSearchBar.value = "";
//     inputSearchBar.style.width = "100%";

//     loginButton.classList.remove("visible");
//     loginButton.classList.add("invisible");
//   });

//   inputSearchBar.addEventListener("input", (e) => {
//     nombresTodosProductos.map((el) => {
//       let elMayus = el.nombre.toUpperCase();

//       let inputValueMayus = e.target.value.toUpperCase();
//       if (elMayus.includes(inputValueMayus) && e.target.value.length > 0) {
//         divSearchBarItems.innerHTML += `<div class="item-searchBar" id="${el.id}" data-categoria="${el.categoria}">
//           <div>
//            <img src="${el.img}" alt="" width="40" height="40"/>
//           </div>
//            <div>
//             <span>${el.nombre}</span>
//            </div>
//          </div>
//         `;
//         // console.log(document.querySelectorAll(".item-searchBar"));
//         document.querySelectorAll(".item-searchBar").forEach((elem) =>
//           elem.addEventListener("click", function clickeo(e) {
//             console.log(e.target.closest("[data-categoria]"));
//             console.log(this.dataset.categoria);

//             // })
//             window.location.href = `http://localhost:5500/assets/productos/vista-producto/vista_producto.html?id=${this.id}&categoria=${this.dataset.categoria}`;
//             console.log("el evento fue en =>" + this.id); //this se usa acá para que tome todo el elemento el click, siosi en function() nombrada, no anonima xq con e.target solo trae el elemento, el this, es mas global
//           })
//         );

//         console.log(`coincide con ${inputValueMayus}:` + elMayus);
//       } else if (e.target.value == "") divSearchBarItems.innerHTML = "";
//     });
//   });
// };

// tomarLiveInput();

// let mediaQueryTablet = window.matchMedia("(max-width: 760px)");

// const spanBuscar = document.querySelector(".nav__menu-search span");
// const inputBuscar = document.querySelector(".nav__menu-search input");
// const divBusqueda = document.querySelector(".matchSearch");

// spanBuscar.addEventListener("click", () => {
//   inputBuscar.style.width = "100%";
//   inputBuscar.focus();
// });
