const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

export function createSearchBar() {
  const searchBar = document.createElement("form");
  searchBar.classList.add("search-bar");
  searchBar.dataset.js = "search-bar";
  searchBarContainer.appendChild(searchBar);

  const inputField = document.createElement("input");
  inputField.classList.add("search-bar__input");
  inputField.name = "query";
  inputField.type = "text";
  inputField.placeholder = "search characters";
  inputField.setAttribute("aria-label", "character name");
  searchBar.appendChild(inputField);

  const searchButton = document.createElement("button");
  searchButton.classList.add("search-bar__button");
  searchButton.setAttribute("aria-label", "search for character");
  searchBar.appendChild(searchButton);

  const searchIcon = document.createElement("img");
  searchIcon.classList.add("search-bar__icon");
  searchIcon.src = "./assets/portal-gun-rick-and-morty.png";
  searchIcon.alt = "";
  searchButton.appendChild(searchIcon);

  return searchBar;
}
