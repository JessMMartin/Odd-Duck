"use strict";
const productContainer = document.getElementById("container");

const resultButton = document.getElementById("button");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

let clicks = 0;

const maxClicksAllowed = 19;

function randomNumber() {
  let result = Math.floor(Math.random() * allItems.length);
  console.log(result, `result of randomNum function`);
  return result;
}

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.views = 0;
  allItems.push(this);
}

let allItems = [];

function renderProducts() {
  let product1 = randomNumber();
  let product2 = randomNumber();
  let product3 = randomNumber();

  if (product1 === product2) {
    product2 = randomNumber();
  }
  if (product1 === product3) {
    product3 = randomNumber();
  }

  if (product2 === product3) {
    product3 = randomNumber();
  }

  image1.src = allItems[product1].src;
  image2.src = allItems[product2].src;
  image3.src = allItems[product3].src;
  image1.alt = allItems[product1].name;
  image2.alt = allItems[product2].name;
  image3.alt = allItems[product3].name;
  allItems[product1].views++;
  allItems[product2].views++;
  allItems[product3].views++;
}

function handleProductClick(event) {
  if (event.target === productContainer) {
    alert("to select click on an image");
  } else {
    clicks++;
  }

  let clickedProduct = event.target.alt;
  for (let i = 0; i < allItems.length; i++) {
    if (clickedProduct === allItems[i].name) {
      allItems[i].clicks++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    productContainer.removeEventListener("click", handleProductClick);
    productContainer.className = "no-voting";
    resultButton.addEventListener("click", renderChart());
    resultButton.className = "clicks-allowed";
  } else {
    console.log(allItems);
    renderProducts();
  }
}

function renderResults() {
  // console.log("Your results are in!");
  let ul = document.querySelector("ul");
  for (let i = 0; i < allItems.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${allItems[i].name} had ${allItems[i].views} views and was clicked ${allItems[i].clicks} times.`;
    ul.appendChild(li);
  }
}

new Product("Bag", "./img/bag.jpg");
new Product("Banana", "./img/banana.jpg");
new Product("Bathroom", "./img/bathroom.jpg");
new Product("boots", "./img/boots.jpg");
new Product("breakfast", "./img/breakfast.jpg");
new Product("bubblegum", "./img/bubblegum.jpg");
new Product("Chair", "./img/chair.jpg");
new Product("Cthulhu", "./img/cthulhu.jpg");
new Product("Dog-Duck", "./img/dog-duck.jpg");
new Product("Dragon", "./img/dragon.jpg");
new Product("pen", "./img/pen.jpg");
new Product("Pet-Sweep", "./img/pet-sweep.jpg");
new Product("Scissors", "./img/scissors.jpg");
new Product("Shark", "./img/shark.jpg");
new Product("Sweep", "./img/sweep.png");
new Product("Tauntaun", "./img/tauntaun.jpg");
new Product("Unicorn", "./img/unicorn.jpg");
new Product("Water-Can", "./img/water-can.jpg");
new Product("Wine-Glass", "./img/wine-glass.jpg");

productContainer.addEventListener("click", handleProductClick);

console.log(allItems);
function renderChart() {
  const productNames = [];
  const productViews = [];
  const productClicks = [];

  for (let i = 0; i < allItems.length; i++) {
    productNames.push(allItems[i].name);
    productViews.push(allItems[i].views);
    productClicks.push(allItems[i].clicks);
  }
  const data = {
    labels: productNames,
    datasets: [
      {
        label: "clicks",
        data: productClicks,
        backgroundColor: ["#42032C"],
        borderColor: ["#D36B00"],
        borderWidth: 1,
      },
      {
        label: "views",
        data: productViews,
        backgroundColor: ["#D36B00"],
        borderColor: ["#42032C"],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
  };
  const productChart = document.getElementById("chart");
  const myChart = new Chart(productChart, config);
}
renderProducts();
