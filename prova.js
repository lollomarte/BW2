let CreateButton = document.querySelector(".CreateButton");
let Body = document.querySelector("body");

let allMenuarray = [
  {
    title: "Podcast",
    image: "./assets/img/Mika_cover-nuovo-album-041019.jpeg",
  },
  {
    title: "Creato per te",
    image: "./assets/img/Mika_cover-nuovo-album-041019.jpeg",
  },
  {
    title: "Nuove uscite",
    image: "./assets/img/Mika_cover-nuovo-album-041019.jpeg",
  },
  {
    title: "Pop",
    image: "./assets/img/Mika_cover-nuovo-album-041019.jpeg",
  },
  {
    title: "Hip Hop",
    image: "./assets/img/Mika_cover-nuovo-album-041019.jpeg",
  },
  {
    title: "Dance / Elettronica",
    image: "./assets/img/Mika_cover-nuovo-album-041019.jpeg",
  },
  {
    title: "Latina",
    image: "./assets/img/Mika_cover-nuovo-album-041019.jpeg",
  },
  {
    title: "Classifiche",
    image: "./assets/img/Mika_cover-nuovo-album-041019.jpeg",
  },
];
let colors = [
  "linear-gradient(0deg,rgba(224, 61, 0, 1) 0%,rgba(217, 59, 0, 1) 33%,rgba(224, 61, 0, 1) 62%,rgba(221, 73, 18, 1) 100%)",
  "linear-gradient(0deg, rgba(60,58,152,0.9458158263305322) 0%, rgba(60,58,152,1) 33%, rgba(60,58,152,1) 62%, rgba(60,58,152,0.9206057422969187) 100%);",
  "linear-gradient(0deg, rgba(181,0,54,1) 0%, rgba(250,1,75,1) 33%, rgba(254,0,75,1) 62%, rgba(228,0,68,1) 100%);",
  "linear-gradient(0deg, rgba(30,144,33,1) 0%, rgba(28,156,31,1) 33%, rgba(23,149,26,1) 62%, rgba(33,143,36,1) 100%);",
  "linear-gradient(0deg, rgba(158,94,8,1) 0%, rgba(175,108,17,1) 33%, rgba(175,108,17,1) 62%, rgba(171,104,13,1) 100%)",
  "linear-gradient(0deg,rgba(224, 61, 0, 1) 0%,rgba(217, 59, 0, 1) 33%,rgba(224, 61, 0, 1) 62%,rgba(221, 73, 18, 1) 100%);",
  "linear-gradient(0deg, rgba(181,0,54,1) 0%, rgba(250,1,75,1) 33%, rgba(254,0,75,1) 62%, rgba(228,0,68,1) 100%);",
  "linear-gradient(0deg, rgba(108,82,124,1) 0%, rgba(151,104,181,1) 33%, rgba(151,104,181,1) 62%, rgba(118,86,139,1) 100%);",
];

let SearchMenu = function () {
  // genera il container per tutto il contenuto sotto
  let AllCArdContainer = document.createElement("div");
  AllCArdContainer.classList.add("Attachtobody", "row", "justify-content-evenly", "bg-black", "px-3");
  Body.appendChild(AllCArdContainer);

  // genera il titolo Cerca
  let TitleForTheFooter = document.createElement("h3");
  TitleForTheFooter.classList.add("fs-2", "text-white", "my-4");
  TitleForTheFooter.innerText = "Cerca";
  AllCArdContainer.appendChild(TitleForTheFooter);

  // genera il DIV che contine l'input
  let InputContainer = document.createElement("div");
  InputContainer.classList.add("d-flex", "align-items-center", "mb-4");
  AllCArdContainer.appendChild(InputContainer);

  //genera il BUTTON vicino l'input
  let ButtonForSearching = document.createElement("button");
  ButtonForSearching.classList.add("ButtonForSearching");
  ButtonForSearching.innerHTML =
    ButtonForSearching.innerHTML +
    `<i class="bi bi-search"></i>
  `;
  InputContainer.appendChild(ButtonForSearching);

  // genera l'input di ricerca
  let InputForSearch = document.createElement("input");
  InputContainer.appendChild(InputForSearch);

  //genera il p Sfoglia tutto
  let PforTheFooter = document.createElement("p");
  PforTheFooter.innerText = "Sfoglia tutto";
  PforTheFooter.classList.add("text-white", "text-center");
  AllCArdContainer.appendChild(PforTheFooter);

  // genera un DIV che contiene solo le card
  let OnlyCardContaoner = document.createElement("div");
  OnlyCardContaoner.classList.add("row", "gap-3", "mb-3");
  AllCArdContainer.appendChild(OnlyCardContaoner);

  allMenuarray.forEach((singleCard, index) => {
    OnlyCardContaoner.innerHTML =
      OnlyCardContaoner.innerHTML +
      `<div class="CardSearchMobile" style="background: ${colors[index % colors.length]}">
      <div>
        <h4>${singleCard.title}</h4>
      </div>
      <div class="imgContSearchMobile"><img src="${singleCard.image}" alt="" /></div>
    </div>`;
  });
};
CreateButton.addEventListener("click", SearchMenu);
