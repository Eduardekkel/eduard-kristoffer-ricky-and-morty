export function createCharacterCard(image, name, status, type, occurrences) {
  /*console.log(
    "Parameters Create Character Card, ",
    "\nimage",
    image,
    "\nname",
    name,
    "\nstatus",
    status,
    "\ntype",
    type,
    "\noccurrences",
    occurrences
  );*/
  const dynamicCards = document.createElement("li");
  dynamicCards.classList.add("card-container");
  dynamicCards.innerHTML = `
    <ul class="card-container" data-js="card-container">
        <li class="card">
          <div class="card__image-container">
            <img
              class="card__image"
              src="${image}"
              alt="${name}"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${status}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${type}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${occurrences}</dd>
            </dl>
          </div>
        </li>
      </ul>
    `;
  return dynamicCards;
}
