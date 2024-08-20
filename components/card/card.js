// const imageSrc = "CHANGE"
// const altValue = "CHANGE"
// const nameCharacter = "CHANGE"
// const statusType = "CHANGE"
// const typeValue = "CHANGE"
// const occurrencesValue = "CHANGE"

export function createCharacterCard(
  imageSrc,
  altValue,
  nameCharacter,
  statusType,
  typeValue,
  occurrencesValue
) {
  const dynamicCards = `
    <ul class="card-container" data-js="card-container">
        <li class="card">
          <div class="card__image-container">
            <img
              class="card__image"
              src="${imageSrc}"
              alt="${altValue}"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${nameCharacter}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${statusType}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${typeValue}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${occurrencesValue}</dd>
            </dl>
          </div>
        </li>
      </ul>
    `;
  return dynamicCards;
}

// document.body.innerHTML += dynamicCards - nicht vergessen zu appenden falls das nicht woanders passiert
