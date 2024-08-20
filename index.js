const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
const page = 1;
const searchQuery = "";

import { createCharacterCard } from "./components/card/card.js";

async function fetchCharacters() {
  try {
    cardContainer.innerHTML = "";
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const response = await fetch(url);
    console.log("response", response);

    const responseJSON = await response.json(); //converting our response to JSON to gain access to the data we want
    console.log("responseJSON", responseJSON); // console logging the actual data

    const dataItems = responseJSON.results;
    console.log("dataItems", dataItems);

    dataItems.forEach((dataItem) => {
      console.log("dataItem", dataItem);
      const cards = createCharacterCard(
        dataItem.image,
        dataItem.name,
        dataItem.status,
        dataItem.type,
        dataItem.episode.length
      );
      cardContainer.append(cards);
    });
  } catch (error) {
    console.log("Sheeesh! Something wrong happened! - ", error);
  }
}

fetchCharacters();

// Add an event listener on each of the next and prev buttons which do the following
// - it is prevented that the page index could go higher than the max page index or below 1
// - the page index is increased / decreased
// - the fetchCharacters function is called
// Update the pagination display each time characters are fetched to show the current page
// index and the current max page index.

nextButton.addEventListener("click", () => {
  console.log("button is clicked");
});
