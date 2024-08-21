const navigation = document.querySelector('[data-js="navigation"]');

export function createPagination() {
  const pagination = document.createElement("span");
  pagination.classList.add("navigation__pagination");
  pagination.textContent = ``;

  navigation.appendChild(pagination);

  return pagination;
}
