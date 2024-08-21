import { createCharacterCard } from "./components/card/card.js";

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
let maxPage = 42;
let page = 1;
let searchQuery = "";

// Fetching Characters
async function fetchCharacters() {
  try {
    cardContainer.innerHTML = "";
    const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
    const response = await fetch(url);
    //console.log("response", response);

    //converting our response to JSON to gain access to the data we want
    const responseJSON = await response.json();
    // console.log("responseJSON", responseJSON);

    // only show dataItems
    const dataItems = responseJSON.results;
    // console.log("dataItems", dataItems);

    // Appending the data Items to the cards
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

    // updating the maxPage in case we search for characters by name
    maxPage = responseJSON.info.pages;
    updatePagination();
  } catch (error) {
    console.log("Sheeesh! Something wrong happened! - ", error);
  }
}

// calling the fetchCharacters function to show cards with fetched data items
fetchCharacters();

// updating the pagination
function updatePagination() {
  pagination.textContent = `${page} / ${maxPage}`;
}

// Event listener for the next button
nextButton.addEventListener("click", () => {
  console.log("button is clicked");
  if (page < maxPage) {
    page++;
    updatePagination();
    fetchCharacters();
  }
});

// Event listener for the prev button
prevButton.addEventListener("click", () => {
  console.log("button is clicked");
  if (page > 1) {
    page--;
    updatePagination();
    fetchCharacters();
  }
});

// search characters by name functionality
searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery = searchBar.querySelector("input").value;
  //console.log("search:", searchQuery);
  page = 1;
  updatePagination();
  fetchCharacters();
});
