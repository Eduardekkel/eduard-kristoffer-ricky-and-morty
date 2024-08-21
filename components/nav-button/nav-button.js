const navigation = document.querySelector('[data-js="navigation"]');

export function createNextButton(onClick) {
  const nextButton = document.createElement("button");
  nextButton.classList.add("button--next");
  nextButton.textContent = "next";
  navigation.appendChild(nextButton);

  return nextButton;
}

export function createPrevButton() {
  const prevButton = document.createElement("button");
  prevButton.classList.add("button--prev");

  prevButton.textContent = "previous";
  navigation.appendChild(prevButton);

  return prevButton;
}
