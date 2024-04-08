document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

  addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const chocolateCard = button.closest('.chocolate-card');
      const chocolateName = chocolateCard.querySelector("h3").textContent;
      const chocolatePrice = chocolateCard.querySelector("p").textContent.replace(/[^0-9.]/g, '');
      const chocolateList = window.location.pathname.includes("/products.html") ? "Explore our chocolates" : "Featured Chocolates";

      window.dataLayer = window.dataLayer || [];

      dataLayer.push({
        event: "add_to_cart",
        currency: "USD",
        value: parseFloat(chocolatePrice),
        ecommerce: {
          items: [{
            item_name: chocolateName,
            item_brand: "The Chocolate Shop",
            item_category: "Chocolates",
            item_list_name: chocolateList,
            // Assuming the index is needed for something specific, though it's not the position in the document.
            index: index + 1 // 1-based index
          }]
        },
      });

      alert(`Added ${chocolateName} to the cart`);
    });
  });
});
