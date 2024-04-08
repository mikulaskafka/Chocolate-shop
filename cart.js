const addToCartButtons = document.querySelectorAll(
  ".add-to-cart-btn"
);

addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const chocolateCard = 
      event.target.parentElement;
    const allChocolateCards =
      document.querySelectorAll('body .chocolate-card');
    const chocolateCardIndex =
      allChocolateCards.indexOf(chocolateCard);
    const chocolateName =
      chocolateCard.querySelector("h3").textContent;
    const chocolatePrice =
      chocolateCard.querySelector("p").textContent;
    const chocolateList =
      window.location.pathname.includes("/products.html") ? "Explore our chocolates" : "Featured Chocolates";

window.dataLayer = window.dataLayer || [];

dataLayer.push({
  event: "add_to_cart",
  currency: "USD",
  value: chocolatePrice,
  ecommerce: {
    items: [
      {
        item_name: chocolateName,
        item_brand: "The Chocolate Shop",
        item_category: "Chocolates",
        item_list_name: chocolateList,
        index: chocolateCardIndex
      }
    ],
  },
});
    
    alert(`Added ${chocolateName} to the cart`);
  
  });
});
