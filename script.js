//Gjør som at elementer fra HTML blir hentet ved hjelp av query selector
const inputField = document.querySelector("#inputField");
const addButton = document.querySelector("#addButton");
const todoList = document.querySelector("#todoList");
console.log(inputField, addButton, todoList);

//legger til event listener på "legg til" knappen
addButton.addEventListener("click", function () {
  console.log("Legg til knappen er trykket!");

  //henter value fra input-feltet
  const inputFieldValue = inputField.value;
  console.log(inputFieldValue);

  //oppretter et nytt "li" (listeelement) og legger til input value som tekst
  const todoItem = document.createElement("li");
  todoItem.textContent = inputFieldValue;
  todoList.appendChild(todoItem);

  //tømmer input value feltet etter at en to-do er lagt til
  inputField.value = "";

  //oppretter en "ferdig" knapp som markeres som ferdig når den er trykket på
  const doneItem = document.createElement("button");
  doneItem.textContent = "Ferdig";
  todoItem.appendChild(doneItem);
  doneItem.addEventListener("click", function () {
    console.log("Ferdig knapp er trykket!");

    //legger til eller fjerner klassen "done"
    if (todoItem.classList.contains("done")) {
      todoItem.classList.remove("done");
    } else {
      todoItem.classList.add("done");
    }
  });

  //oppretter en delete-knapp som fjerner gjøremål når den er markert som ferdig 
  const deleteItem = document.createElement("button");
  deleteItem.textContent = "Slett";
  todoItem.appendChild(deleteItem);
  deleteItem.addEventListener("click", function () {
    console.log("Slett knapp er trykket!");

    //sjekker om oppgaven er "done" når før den blir slettet
    if (todoItem.classList.contains("done")) {
      todoItem.remove();
    } else {
      alert("Gjøremålet må markeres ferdig før sletting");
    }
  });
});



// #Query selector: det er en metode som har ansvar for å hente HTML-elementer ved hjelp av css-selector

// #Create element: lager nye HTML-elementer i JavaScript

// #appendChild: legger til et nytt element som child av et eksisterende element

// #addEventListener: ser etter hendelser som tastetrykk, klikk etc. og utfører en funksjon når hendelsen skjer