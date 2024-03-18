const addToCartButtons = document.querySelectorAll(
  ".add-to-cart-btn"
);

addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const chocolateCard = event.target.parentElement;
    const chocolateName =
      chocolateCard.querySelector("h3").textContent;

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
 'productName': `${chocolateName}`
 });
    
    alert(`Added ${chocolateName} to the cart`);
  });
});
