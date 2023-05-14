//Dark mode

// const checkbox = document.getElementById("checkbox")
// checkbox.addEventListener("change", () => {
//   document.body.classList.toggle("dark")
// })


//Autoexpand

// function getScrollHeight(elm){
//   var savedValue = elm.value
//   elm.value = ''
//   elm._baseScrollHeight = elm.scrollHeight
//   elm.value = savedValue
// }

// function onExpandableTextareaInput({ target:elm }){
//   // make sure the input event originated from a textarea and it's desired to be auto-expandable
//   if( !elm.classList.contains('autoExpand') || !elm.nodeName == 'TEXTAREA' ) return
  
//   var minRows = elm.getAttribute('data-min-rows')|0, rows;
//   !elm._baseScrollHeight && getScrollHeight(elm)

//   elm.rows = minRows
//   rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16)
//   elm.rows = minRows + rows
// }

// // global delegated event listener
// document.addEventListener('input', onExpandableTextareaInput)


//Preguntar y responde

// var boton = document.getElementById("enviar");
// var textarea = document.getElementById("pregunta");
// var p = document.getElementById("respuesta");

// boton.addEventListener("click", function() {
//   var texto = textarea.value;
//   var palabra = 'PN1455'; // Palabra que se busca en el textarea

//   if (texto.includes(palabra)) { // Si la palabra se encuentra en el texto
//     p.style.display = "block";
//    } else {
//     p.style.display = "none";
//    }
// });