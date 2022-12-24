import { liveInput } from "./Helpers/liveInputSearcher.js";

liveInput.tomarLiveInput();
liveInput.clickIconoBuscador();

let cardsContainer = document.querySelectorAll(".cards-container");
const emergente2 = document.getElementById("emergente2");

const linkVerProducto = () => {
  document.querySelectorAll(".link-producto").forEach((elem) =>
    elem.addEventListener("click", function clickeo(e) {
      let categoriaProd = e.target.closest(".cards-container").id;
      let idProd = e.target.closest(".card").id;

      window.location.href = `./Pages/Productos/Vista-producto/vista_producto.html?id=${idProd}&categoria=${categoriaProd}`; //this se usa acá para que tome todo el elemento el click, siosi en function() nombrada, no anonima xq con e.target solo trae el elemento, el this, es mas global
    })
  );
};

//carga a cada card por section la data-------
cardsContainer.forEach((elem) => {
  fetch(`https://json-server-db2.onrender.com/productos?categoria=${elem.id}`)
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