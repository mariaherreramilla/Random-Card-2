window.onload = function() {
    let pinta_random = "";
    let numero_random = "";
    let button = document.getElementById("button");
    let pinta = document.getElementById("pinta");
    let pinta2 = document.getElementById("pinta2");
    let numero = document.getElementById("numero");
    let pull_pinta = ["♦", "♥", "♠", "♣"];
  
    let pull_numero = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
  
    button.addEventListener("click", e => {
      pinta_random = Math.floor(Math.random() * (4 - 0)) + 0;
      numero_random = Math.floor(Math.random() * (13 - 0)) + 0;
      numero.innerHTML = pull_numero[numero_random];
      pinta.innerHTML = pull_pinta[pinta_random];
      pinta2.innerHTML = pull_pinta[pinta_random];
      if (pinta_random == 2 || pinta_random == 3) {
        pinta.classList.add("text-dark");
        pinta2.classList.add("text-dark");
        numero.classList.add("text-dark");
        pinta.classList.remove("text-red");
        pinta2.classList.remove("text-red");
        numero.classList.remove("text-red");
      } else {
        pinta.classList.add("text-red");
        pinta2.classList.add("text-red");
        numero.classList.add("text-red");
        pinta.classList.remove("text-dark");
        pinta2.classList.remove("text-dark");
        numero.classList.remove("text-dark");
      }
    });
  };
  