import { liveInput } from "../../../Helpers/liveInputSearcher.js";

liveInput.tomarLiveInput();
liveInput.clickIconoBuscador();

let cardsContainer = document.querySelectorAll(".cards-container");

const pageLeft = document.querySelectorAll(".pageLeft");
const pageRight = document.querySelectorAll(".pageRight");
const i = document.querySelectorAll(".productos span.pageLeft");

//botones para IZQ y derecha en cards-container
pageLeft.forEach((el, key, array) => {
  if (key == 0) {
    el.addEventListener("click", () => {
      cardsContainer[key].scrollTo(
        cardsContainer[key].scrollLeft - cardsContainer[key].clientWidth,
        0
      );
      // cardsContainer[key].style.overflow="visible"
      setTimeout(() => {
        array[key].classList.add("pageAnimate");
      }, 10);
      array[key].classList.remove("pageAnimate");
      setTimeout(() => {
        // cardsContainer[key].style.overflow="hidden"
      }, 5000);
      // console.log(array[key]);
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
// ---------------------------------------------------------------------------------------------------------
//se repite de Agregar producto
const tomarIDUrl = () => {
  const urlConID = new URL(window.location);
  let idParam = urlConID.searchParams.get("id");
  console.log(idParam);
  return idParam;
};

//se repite de Agregar producto
const tomarSeccionUrl = () => {
  const urlConID = new URL(window.location);
  console.log(urlConID);
  let seccion = urlConID.searchParams.get("categoria");
  return seccion;
};

const vistaProducto = document.querySelector(".vista-prod");
console.log(vistaProducto);

//toma la data de la URL y con fetch trae el producto y rellena
fetch(`https://json-server-db.onrender.com/productos/${tomarIDUrl()}`)
  .then((res) => res.json())
  .then(
    (data) =>
      (vistaProducto.innerHTML = `
    <div class="producto-indiv">
          <div class="producto-indiv__img">
            <img src="${data.img}" alt="img-producto" />
          </div>
          <div class="producto-indiv__texto">
            <h1>${data.productName}</h1>
            <p>$${data.precio}</p>
            <p>
            ${data.descripcion}
            </p>
          </div>
        </div>
    `)
  );
//llena la data relacionada a la seccion en "productos relacionados"
let cardsContainer2 = document.querySelector(".cards-container");
fetch(`https://json-server-db.onrender.com/productos?categoria=${tomarSeccionUrl()}`)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((el) => {

      cardsContainer2.innerHTML += `
      <div class="card" id='${el.id}'>
      <div class="img-name">
       <div class="card-img">
        <img src="${el.img}" />
       </div>
      <p class="p-productName">${el.productName}</p>
       </div>
      <div class="precio-link">
        <p class="p-precio">$${el.precio}</p>
        <a>Ver producto</a>
      </div>
   </div>
    `;})

    document.querySelectorAll("a").forEach((elem) =>
      elem.addEventListener("click", function clickeo(e) {
        let categoriaProd = tomarSeccionUrl();
        let idProd = e.target.closest(".card").id;

        window.location.href = `./vista_producto.html?id=${idProd}&categoria=${categoriaProd}`;
        console.log("el evento fue en =>", this); //this se usa acá para que tome todo el elemento el click, siosi en function() nombrada, no anonima xq con e.target solo trae el elemento, el this, es mas global
      })
    );
    });


      