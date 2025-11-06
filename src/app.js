import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  function excusaAleatoria(params) {

    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    let indiceWho = Math.floor(Math.random() * who.length);
    let indiceAction = Math.floor(Math.random() * action.length);
    let indiceWhat = Math.floor(Math.random() * what.length);
    let indiceWhen = Math.floor(Math.random() * when.length);

    return who[indiceWho] + ' ' + action[indiceAction] + ' ' + what[indiceWhat] + ' ' + when[indiceWhen];
  }

  document.getElementById("excuse").innerText = excusaAleatoria()

};

window.onload()

