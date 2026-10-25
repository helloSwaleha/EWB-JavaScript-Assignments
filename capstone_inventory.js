console.log("--- Initializing Inventory System ---");

const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

const productNameInput = prompt("Enter a new product name:", "Monitor");
const productPriceInput = prompt("Enter the product price:", "150");

const productName = productNameInput === null ? "" : productNameInput.trim();
const productPrice = Number(productPriceInput);

if (
  productName === "" ||
  productPriceInput === null ||
  productPriceInput.trim() === "" ||
  !Number.isFinite(productPrice) ||
  productPrice < 0
) {
  console.log("Invalid product details. Please enter a name and a valid non-negative price.");
} else {
  inventory.push({ name: productName, price: productPrice });
}

function getCategory(price) {
  let priceRange;

  if (price < 100) {
    priceRange = "budget";
  } else if (price < 200) {
    priceRange = "standard";
  } else {
    priceRange = "premium";
  }

  switch (priceRange) {
    case "budget":
      return "Budget";
    case "standard":
      return "Standard";
    default:
      return "Premium";
  }
}

function calculateInventoryValue(items, taxRate = 0) {
  let total = 0;
  for (const item of items) {
    if (!Number.isFinite(item.price) || item.price < 0) {
      continue; 
    }
    total += item.price;
  }
  return total + total * taxRate;
}

const applyDiscount = (price, discountRate = 0) =>
  price - price * discountRate;

console.log("\n--- Processing Inventory Roster (forEach) ---");
inventory.forEach((item) => {
  console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`);
});

const totalValue = calculateInventoryValue(inventory);
const discountedLaptopPrice = applyDiscount(inventory[0].price, 0.10);

console.log("\n--- Financial Analytics ---");
console.log(`Total Inventory Value: $${Number(totalValue.toFixed(2))}`);

const affordableItems = inventory.filter((item) => item.price < 200);
console.log(
  `Filtered Affordable Items (Under $200): ${JSON.stringify(
    affordableItems.map((item) => item.name)
  )}`
);

const reportList = inventory.map((item) => `${item.name.toUpperCase()}: $${item.price}`);
console.log(`Formatted Report List: ${JSON.stringify(reportList)}`);
console.log(`Laptop price after 10% discount (demo): $${Number(discountedLaptopPrice.toFixed(2))}`);
