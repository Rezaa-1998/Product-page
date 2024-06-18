const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const priceButton = document.getElementById("search-price-button");

// Search products by name
const searchHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();
  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    product.style.display = "block";
    if (!productName.includes(searchValue)) product.style.display = "none";
  });
};
searchInput.addEventListener("keyup", searchHandler);

// Changing the class of the selected button and removing it from the previous button
const changeClass = (filter) => {
  buttons.forEach((button) =>
    button.dataset.filter == filter
      ? button.classList.add("selected")
      : button.classList.remove("selected")
  );
};

// Filter products by category
const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  changeClass(filter);
  products.forEach((product) => {
    const itemCategory = product.children[0].dataset.category;
    product.style.display = "block";
    if (filter == "all") return;
    if (filter != itemCategory) product.style.display = "none";
  });
};
buttons.forEach((button) => button.addEventListener("click", filterHandler));

// Search products by price
const priceHandler = (event) => {
  const searchPrice = event.target.parentElement.children[0].value;
  products.forEach((product) => {
    product.style.display = "block";
    if (searchPrice == "") return;
    const productPrice = product.children[2].innerText.split(" ")[1];
    if (productPrice !== searchPrice) product.style.display = "none";
  });
};
priceButton.addEventListener("click", priceHandler);
