"use strict";

const burgerLayerElement = document.querySelector(".food-layers");
const btns = document.querySelector(".tugma");
const totalPriceEl = document.querySelector(".total-price");

let totalSum = 2;
totalPriceEl.textContent = totalSum;

function renderLayer(img, idOfElement, price) {
  if (img != "" && idOfElement != "") {
    const burgerImage = document.createElement("img");
    burgerImage.className = "image-layer";
    burgerImage.alt = "burger Layer Image";
    burgerImage.src = img;
    totalPriceEl.textContent = price;
    burgerImage.id = idOfElement;
    burgerLayerElement.append(burgerImage);
  }
}

const images = {
  image1: "../burger-layers/cheese.svg",
  image2: "../burger-layers/meat.svg",
  image3: "../burger-layers/onion.svg",
  image4: "../burger-layers/salad.svg",
  image5: "../burger-layers/tomato.svg",
  image6: "../burger-layers/pickle.svg",
};

function removeLayer(idOfElement, price) {
  if (idOfElement != "" && price != "") {
    const removingElement = document.getElementById(idOfElement);
    burgerLayerElement.removeChild(removingElement);
    totalPriceEl.textContent = totalSum;
  }
}

btns.addEventListener("click", (e) => {
  const button = e.target.className;
  const id = String(Math.floor(Math.random() * 10) + 1);
  switch (button) {
    case "cheese-button":
      renderLayer(images.image1, id, (totalSum += 2));
      break;
    case "meat-button":
      renderLayer(images.image2, id, (totalSum += 5));
      break;

    case "onion-button":
      renderLayer(images.image3, id, (totalSum += 1));
      break;

    case "salad-button":
      renderLayer(images.image4, id, (totalSum += 1));
      break;

    case "tomato-button":
      renderLayer(images.image5, id, (totalSum += 2));
      break;

    case "pickle-button":
      renderLayer(images.image5, id, (totalSum += 3));
      break;

    default:
      renderLayer("");
  }
});

burgerLayerElement.addEventListener("click", (e) => {
  const id = e.target.id;
  removeLayer(id, totalPriceEl);
});
