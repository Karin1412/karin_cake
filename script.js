document.addEventListener("DOMContentLoaded", function() {
    const searchBarComponent = `
        <input type="text" id="search" placeholder="Search products...">
    `;

    const productCardComponent = (product) => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button class="buy-now">Buy Now</button>
        </div>
    `;

    const products = [
        { name: "Product 1", price: "$10", image: "assets/cake1.jpg" },
        { name: "Product 2", price: "$20", image: "assets/cake2.png" },
        { name: "Product 3", price: "$30", image: "assets/cake3.jpg" },
        { name: "Product 4", price: "$40", image: "assets/cake4.jpg" }
    ];

    document.getElementById('search-bar').innerHTML = searchBarComponent;

    const productList = document.getElementById('product-list');
    products.forEach(product => {
        productList.innerHTML += productCardComponent(product);
    });

    document.getElementById('search').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        productList.innerHTML = '';
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
        filteredProducts.forEach(product => {
            productList.innerHTML += productCardComponent(product);
        });
    });
});
