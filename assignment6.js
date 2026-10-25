const products =[
    { name: "Laptop", price : 800},
    { name: "Mouse", price : 25},
    {name: "Keyboard", price: 45}
];
 console.log("-- All Products (forEach) --");
 products.forEach(function(product){
 console.log("Item: " + product.name + " - Price: $" + product.price);
 }
)

console.log("Products Under $50:");

const affordableProducts = products.filter(function(product) {
    return product.price < 50;
});

console.log(affordableProducts);

console.log("Product Tags:");

const productTags = products.map(function(product) {
    return product.name.toUpperCase() + " costs $" + product.price;
});

console.log(productTags);