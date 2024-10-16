//          ------------ DROPDOWN BOTONES DE IDIOMAS Y TENDENCIAS  ------------

// Recuperar botones e items selecionables
const botonIdiomasTop = document.getElementById("language-btn1");
const botonIdiomasBottom = document.getElementById("language-btn2");
const spanishOptionTop = document.getElementById("spanish-option1");
const englishOptionTop = document.getElementById("english-option1");
const spanishOptionBottom = document.getElementById("spanish-option2");
const englishOptionBottom = document.getElementById("english-option2");
const botonRegion = document.getElementById("button-region");
const botonSeleccion = document.getElementById("button-seleccion");
const spainOption = document.getElementById("spain-option");
const globalOption = document.getElementById("global-option");
const pelisOption = document.getElementById("pelis-option");
const seriesOption = document.getElementById("series-option");

// Inicializar una variable para seguir la opción seleccionada del dropdown comenzando por la primera.
let opcionActivada1 = spanishOptionTop;
let opcionActivada2 = spanishOptionBottom;
let opcionActivada3 = spainOption;
let opcionActivada4 = globalOption;
let opcionActivada5 = pelisOption;
let opcionActivada6 = seriesOption;

// *** BOTON IDIOMAS (HEADER) ***

// Función flecha para mostrar y ocultar el desplegable del boton del header
botonIdiomasTop.addEventListener("click", () => {
  botonIdiomasTop.classList.toggle("active"); // Resaltar el botón después del click

  const dropdown1 = document.getElementById("dropdown1");
  dropdown1.classList.toggle("active"); // Activa y desactiva el desplegable
});

// Función para seleccionar una opción
function opcionActiva1(opcion) {
  opcionActivada1.classList.remove("selected"); // Eliminar la clase selected de la opción preseleccionada
  opcion.classList.add("selected"); // Agregar la clase selected a la nueva opcion
  opcionActivada1 = opcion; // Actualizar la opción activada
}

// Hover en "Español"
spanishOptionTop.addEventListener("mouseover", function () {
  opcionActiva1(spanishOptionTop);
});

// Hover en "English"
englishOptionTop.addEventListener("mouseover", function () {
  opcionActiva1(englishOptionTop);
});

// *** BOTON REGION (SECCION TENDENCIAS) ***

// Función flecha para mostrar y ocultar el desplegable del boton
botonRegion.addEventListener("click", () => {
  botonRegion.classList.toggle("active"); // Resaltar el botón después del click

  const dropdownLeft = document.getElementById("dropdown-left");
  dropdownLeft.classList.toggle("active"); // Activa y desactiva el desplegable
});

// Función para seleccionar una opción
function opcionActiva3(opcion) {
  opcionActivada3.classList.remove("selected"); // Eliminar la clase selected de la opción preseleccionada
  opcion.classList.add("selected"); // Agregar la clase selected a la nueva opcion
  opcionActivada3 = opcion; // Actualizar la opción activada
}

// Hover en "Español"
spainOption.addEventListener("mouseover", function () {
  opcionActiva3(spainOption);
});

// Hover en "English"
globalOption.addEventListener("mouseover", function () {
  opcionActiva3(globalOption);
});

// *** BOTON SELECCION (SECCION TENDENCIAS) ***

// Función flecha para mostrar y ocultar el desplegable del boton
botonSeleccion.addEventListener("click", () => {
  botonSeleccion.classList.toggle("active"); // Resaltar el botón después del click

  const dropdownRight = document.getElementById("dropdown-right");
  dropdownRight.classList.toggle("active"); // Activa y desactiva el desplegable
});

// Función para seleccionar una opción
function opcionActiva4(opcion) {
  opcionActivada5.classList.remove("selected"); // Eliminar la clase selected de la opción preseleccionada
  opcion.classList.add("selected"); // Agregar la clase selected a la nueva opcion
  opcionActivada5 = opcion; // Actualizar la opción activada
}

// Hover en "Español"
pelisOption.addEventListener("mouseover", function () {
  opcionActiva4(pelisOption);
});

// Hover en "English"
seriesOption.addEventListener("mouseover", function () {
  opcionActiva4(seriesOption);
});

// *** BOTON IDIOMAS (FOOTER) ***

// Función flecha para mostrar y ocultar el desplegable del boton del footer
botonIdiomasBottom.addEventListener("click", () => {
  botonIdiomasBottom.classList.toggle("active"); // Resaltar el botón después del click

  const dropdown2 = document.getElementById("dropdown2");
  dropdown2.classList.toggle("active"); // Activa y desactiva el desplegable
});

// Función para seleccionar una opción
function opcionActiva2(opcion) {
  opcionActivada2.classList.remove("selected"); // Eliminar la clase selected de la opción preseleccionada
  opcion.classList.add("selected"); // Agregar la clase selected a la nueva opcion
  opcionActivada2 = opcion; // Actualizar la opción activada
}

// Hover en "Español"
spanishOptionBottom.addEventListener("mouseover", function () {
  opcionActiva2(spanishOptionBottom);
});

// Hover en "English"
englishOptionBottom.addEventListener("mouseover", function () {
  opcionActiva2(englishOptionBottom);
});

// *** Evitar el envío de formularios ***

const formTop = document.getElementById("form-top");
const formBottom = document.getElementById("form-bottom");

formTop.addEventListener("submit", function (e) {
  e.preventDefault();
});

formBottom.addEventListener("submit", function (e) {
  e.preventDefault();
});

//             --------------------- CARRUSEL PELICULAS ---------------------

const listaImagenes = document.querySelector(
  ".slider-wrapper .content-cards-pelis"
);
const botonesCarrusel = document.querySelectorAll(
  ".slider-wrapper .slide-button"
);
const deslizadorScrollbar = document.querySelector(
  ".carrusel .slider-scrollbar"
);

const scrollbarThumb = deslizadorScrollbar.querySelector(".scrollbar-thumb");
const maxScrollLeft = listaImagenes.scrollWidth - listaImagenes.clientWidth;

// Maneja la barra de desplazamiento al pulsar el mouse
scrollbarThumb.addEventListener("mousedown", (e) => {
  const startX = e.clientX; // Retorna la coordenada del cursor horizontal del mouse
  const thumbPosicion = scrollbarThumb.offsetLeft;

  // Actualiza la posición de la barra al mover el ratón
  const handleMouseMove = (e) => {
    const deltaX = e.clientX - startX;
    const newThumbPosicion = thumbPosicion + deltaX;
    const maxThumbPosicion =
      deslizadorScrollbar.getBoundingClientRect().width -
      scrollbarThumb.offsetWidth;

    // Limita el movimiento de la barra a la longitud máxima del carrusel
    const boundedPosicion = Math.max(
      0,
      Math.min(maxThumbPosicion, newThumbPosicion)
    );

    // Mueve las imágenes al desplazar la barra de scroll
    const scrollPosicion = (boundedPosicion / maxThumbPosicion) * maxScrollLeft;

    scrollbarThumb.style.left = `${boundedPosicion}px`;
    listaImagenes.scrollLeft = scrollPosicion;
  };

  // Eliminar detectores cuando se deja de pulsar el mouse
  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  // Agregar detectores de eventos para la interacción de arrastre
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
});

// Desliza las imagenes según el click de boton
botonesCarrusel.forEach((button) => {
  button.addEventListener("click", () => {
    const direccion = button.id === "move-left" ? -1 : 1;
    const cantidadScroll = listaImagenes.clientWidth * direccion;
    listaImagenes.scrollBy({ left: cantidadScroll, behavior: "smooth" });
  });
});

// Oculta o muestra los botones según el scroll
const handleBotonesCarrusel = () => {
  botonesCarrusel[0].style.display =
    listaImagenes.scrollLeft <= 0 ? "none" : "block";
  botonesCarrusel[1].style.display =
    listaImagenes.scrollLeft >= maxScrollLeft ? "none" : "block";
};

// Actualiza la posicion de la barra de scroll según scroll imágenes
const updateScrollThumbPosicion = () => {
  const scrollPosicion = listaImagenes.scrollLeft;
  const thumbPosicion =
    (scrollPosicion / maxScrollLeft) *
    (deslizadorScrollbar.clientWidth - scrollbarThumb.offsetWidth);
  scrollbarThumb.style.left = `${thumbPosicion}px`;
};

listaImagenes.addEventListener("scroll", () => {
  handleBotonesCarrusel();
  updateScrollThumbPosicion();
});

//             --------------------- CONMUTADOR FAQS --------------------

const faqs = document.querySelectorAll(".question");
console.log(faqs);

faqs.forEach((question) => {
  question.addEventListener("click", () => {
    const activeQuestion = document.querySelector(".question.active");
    const activeAnswer = document.querySelector(".answer.active");

    // Si hay una pregunta activa que no es la actual, la cerramos
    if (activeQuestion && activeQuestion !== question) {
      activeQuestion.classList.remove("active");
      activeAnswer.classList.remove("active");
      activeAnswer.style.maxHeight = "0";
      activeQuestion.querySelector("img").style.transform = "rotate(0deg)";
    }

    // Alternar la pregunta actual
    const answer = question.nextElementSibling;
    if (!question.classList.contains("active")) {
      question.classList.add("active");
      answer.classList.add("active");
      // Usamos scrollHeight para calcular el tamaño correcto
      answer.style.maxHeight = answer.scrollHeight + "px";
      question.querySelector("img").style.transform = "rotate(45deg)";
    } else {
      question.classList.remove("active");
      answer.classList.remove("active");
      answer.style.maxHeight = "0";
      question.querySelector("img").style.transform = "rotate(0deg)";
    }
  });
});
