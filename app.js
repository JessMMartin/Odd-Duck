"use strict";
console.log("test");
const productContainer = document.getElementById("container");

const resultButton = document.getElementById("button");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

let clicks = 0;

const maxClicksAllowed = 5;

function randomNumber() {
  let result = Math.floor(Math.random() * allProducts.length);
  console.log(result, `result of randomNum function`);
  return result;
}

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

const allProducts = [];

function renderProducts() {
  let product1 = randomNumber();
  let product2 = randomNumber();
  let product3 = randomNumber();
  console.log(product1, product2, product3, `Three at the begining`);

  if (product1 === product2) {
    product2 = randomNumber();
  }
  if (product1 === product3) {
    product3 = randomNumber();
  }

  if (product2 === product3) {
    product3 = randomNumber();
  }
  console.log(product1, product2, product3, `All three at the end`);
  image1.src = allProducts[product1].src;
  image2.src = allProducts[product2].src;
  image3.src = allProducts[product3].src;
  image1.alt = allProducts[product1].name;
  image2.alt = allProducts[product2].name;
  image3.alt = allProducts[product3].name;
  allProducts[product1].views++;
  allProducts[product2].views++;
  allProducts[product3].views++;
}

function handleProductClick(event) {
  if (event.target === productContainer) {
    alert("to select click on an image");
  } else {
    clicks++;
  }

  let clickedProduct = event.target.alt;
  for (let i = 0; i < allProducts.length; i++) {
    if (clickedProduct === allProducts[i].name) {
      allProducts[i].click++;
      break;
    }
  }
}

if (clicks === maxClicksAllowed) {
  productContainer.removeEventListener("click", handleProductClick);
  productContainer.className = "no-voting";
  resultsButton.addEventListener("click", renderChart);
  resultsButton.className = "clicks-allowed";
} else {
  renderProducts();
}

function renderResults() {
  // console.log("Your results are in!");
  let ul = document.querySelector("ul");
  for (let i = 0; i < allProducts.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${allProducts[i].name} had ${allProducts[i].views} views and was clicked ${allProducts[i].clicks} times.`;
    ul.appendChild(li);
  }
}

const bag = new Product("Bag", "./img/bag.jpg");
const banana = new Product("Banana", "./img/banana.jpg");
const bathroom = new Product("Bathroom", "./img/bathroom.jpg");
const boots = new Product("boots", "./img/boots.jpg");
const breakfast = new Product("breakfast", "./img/breakfast.jpg");
const bubblegum = new Product("bubblegum", "./img/bubblegum.jpg");
const chair = new Product("Chair", "./img/chair.jpg");
const cthulhu = new Product("Cthulhu", "./img/cthulhu.jpg");
const dogduck = new Product("Dog-Duck", "./img/dog-duck.jpg");
const dragon = new Product("Dragon", "./img/dragon.jpg");
const pen = new Product("pen", "./img/pen.jpg");
const petsweep = new Product("Pet-Sweep", "./img/pet-sweep.jpg");
const scissors = new Product("Scissors", "./img/scissors.jpg");
const shark = new Product("Shark", "./img/shark.jpg");
const sweep = new Product("Sweep", "./img/sweep.png");
const tauntaun = new Product("Tauntaun", "./img/tauntaun.jpg");
const unicorn = new Product("Unicorn", "./img/unicorn.jpg");
const watercan = new Product("Water-Can", "./img/water-can.jpg");
const wineglass = new Product("Wine-Glass", "./img/wine-glass.jpg");

productContainer.addEventListener("click", handleProductClick);

// allProducts.push(
//   bag,
//   banana,
//   bathroom,
//   boots,
//   breakfast,
//   bubblegum,
//   chair,
//   cthulhu,
//   dogduck,
//   dragon,
//   pen,
//   petsweep,
//   scissors,
//   shark,
//   sweep,
//   tauntaun,
//   unicorn,
//   watercan,
//   wineglass
// );

console.log(allProducts);
// function renderChart() {
//   const productNames = [];
//   const productViews = [];
//   const productClicks = [];
// }
// for (let i = 0; i < allProducts.length; i++) {
//   productNamesNames.push(allProducts[i].name);
//   productViewsViews.push(allProducts[i].views);
//   productClicks.push(allProducts[i].clicks);

// const data = {
//   labels: productNames,
//   datasets: [
//     {
//       label: "clicks",
//       data: productClicks,
//       backgroundColor: ["#42032C"],
//       borderColor: ["#D36B00"],
//       borderWidth: 1,
//     },
//     {
//       label: "views",
//       data: productViews,
//       backgroundColor: ["#D36B00"],
//       borderColor: ["#42032C"],
//       borderWidth: 1,
//     },
//   ],
// };

// const config = {
// type: "bar",
// data: data,
// };
renderProducts();
// const productChart = document.getElementById("chart");
// const myChart = new Chart(productChart, config);
