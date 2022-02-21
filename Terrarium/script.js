// Closure to store data, in this case to store each
// referenced plant element DOM
// Ejm:
function displayCandy() {
  // variable which closure addCandy() could access when we call the closure so many times
  let candy = ["jellybeans"];
  function addCandy(candyType) {
    candy.push(candyType);
  }
  addCandy("gumdrops");
}
displayCandy();

// ****************************************

// * DragElement: Permite mover el elemento DOM a ciertas posiciones
// DragElement usa closures mediante funciones ya definidas para que estos
// closures "pointerDrag" puedan acceder a las posiciones y saber si ya había
// algún elemento en ellas o no. ASí obtenermos una especie de memoría de aquellos
// elementos que ya fueron arrastrados y colocados y cuales no. Agregando, quitando y reposicionando plantas.
function dragElement(terrariumElement) {
  //establecer 4 posiciones para posicionar en la pantalla
  //
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  // "Onpointerdown" Event se dispara cuando se presiona un botón, o en nuestro caso, se toca un elemento Img que se puede arrastrar
  // No usamos onClick, porque la idea es arrastrar el elemento, no clickearlo
  // A este evento le asignamos una Handled Event Function "pointerDrag"
  terrariumElement.onpointerdown = pointerDrag;

  // ??????????????????????????????????????????????????
  // * pointerDrag: Es el Event Handled Function de onpointerdown, recibe como parámetro el evento, lo usaremos como closure
  function pointerDrag(e) {
    /*
     * e.preventDefault() evita que ocurran los eventos predeterminados que normalmente ocurren en el puntero hacia abajo. En este
     * este tipo de Eventos, recordemos que se puede propagar hacia los elemento DOM padres
     */
    e.preventDefault();
    console.log(e);
    /*
     * e.clientX
     * e.clientY
     * Capturan la posición las coordenadas X e Y de la planta en el momento que la toca, necesitamos ahora arrastrarlas
     */
    pos3 = e.clientX;
    pos4 = e.clientY;
    // Onpointermove y onpointerup son partes de la misma API que onpointerdown
    //  indicando que desea que la planta se arrastre junto con el puntero mientras la mueve
    // para este evento, le agregamos otro closure "elementDrag"
    document.onpointermove = elementDrag;
    // que el gesto de arrastre se detenga cuando anule la selección de la planta
    // para este evento, le agregamos otro closure "stopElementDrag"
    document.onpointerup = stopElementDrag;
  }
  // ??????????????????????????????????????????????????

  // ??????????????????????????????????????????????????

  // * elementDrag: Es el Event Handled Function de onpointermove, recibe como parámetro el evento, lo usaremos como closure
  function elementDrag(e) {
    // Llamamos a las variables del outer scope de la función dragElement()
    /*
     *  reasigna pos1 haciéndolo igual a pos3 (que configuró anteriormente como e.clientX) menos el valor actual de e.clientX. Realiza una operación similar a pos2.
     * Luego, restablece pos3 y pos4 a las nuevas coordenadas X e Y del elemento
     */
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    console.log(pos1, pos2, pos3, pos4);
    /**
     * OffsetTop y offsetLeft son propiedades CSS que establecen la posición de un elemento basándose en la de su padre; su padre puede ser cualquier elemento que no esté posicionado como "estático".
     */
    terrariumElement.style.top = terrariumElement.offsetTop - pos2 + "px";
    terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + "px";
  }

  // ??????????????????????????????????????????????????

  // * stopElementDrag: Es el Event Handled Function de onpointerup, recibe como parámetro el evento, lo usaremos como closure

  function stopElementDrag() {
    /**
     * restablece los eventos "onpointerup" y "onpointermove" para que pueda reiniciar el progreso de su planta comenzando a arrastrarla nuevamente, o comenzar a arrastrar una nueva planta.
     */
    document.onpointerup = null;
    document.onpointermove = null;
  }

  // ??????????????????????????????????????????????????
}

dragElement(document.getElementById("plant1"));
dragElement(document.getElementById("plant2"));
dragElement(document.getElementById("plant3"));
dragElement(document.getElementById("plant4"));
dragElement(document.getElementById("plant5"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant7"));
dragElement(document.getElementById("plant8"));
dragElement(document.getElementById("plant9"));
dragElement(document.getElementById("plant10"));
dragElement(document.getElementById("plant11"));
dragElement(document.getElementById("plant12"));
dragElement(document.getElementById("plant13"));
dragElement(document.getElementById("plant14"));
