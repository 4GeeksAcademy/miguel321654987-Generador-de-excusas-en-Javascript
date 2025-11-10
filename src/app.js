import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  function genExcusaAleatoria(params) {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    let numberWho = Math.floor(Math.random() * who.length);
    let numberAction = Math.floor(Math.random() * action.length);
    let numbereWhat = Math.floor(Math.random() * what.length);
    let numberWhen = Math.floor(Math.random() * when.length);

    return who[numberWho] + ' ' + action[numberAction] + ' ' + what[numbereWhat] + ' ' + when[numberWhen];
  }
  document.getElementById("excusa").innerText = genExcusaAleatoria()
};
window.onload()

