document.addEventListener("DOMContentLoaded", async function() {
    async function fetchComponent(path) {
        const response = await fetch(path);
        return await response.text();
    }

    const searchBarHtml = await fetchComponent('components/search-bar.html');
    document.getElementById('search-bar').innerHTML = searchBarHtml;

    const products = [
        { name: "Product 1", price: "$10", image: "assets/cake1.jpg" },
        { name: "Product 2", price: "$20", image: "assets/cake6.jpeg" },
        { name: "Product 3", price: "$30", image: "assets/cake3.jpg" },
        { name: "Product 4", price: "$40", image: "assets/cake4.jpg" },
        { name: "Product 5", price: "$10", image: "assets/cake5.webp" },
        
    ];

    const sliderHtml = await fetchComponent('components/slider.html');
    document.getElementById('slider').innerHTML = sliderHtml;

    const footerHtml = await fetchComponent('components/footer.html');
    document.getElementById('footer').innerHTML = footerHtml;

    const productCardTemplate = await fetchComponent('components/product-card.html');
    const productList = document.getElementById('product-list');

    function renderProduct(product) {
        let productHtml = productCardTemplate
            .replace(/{{image}}/g, product.image)
            .replace(/{{name}}/g, product.name)
            .replace(/{{price}}/g, product.price);
        productList.innerHTML += productHtml;
    }

    products.forEach(product => renderProduct(product));

    document.getElementById('search').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        productList.innerHTML = '';
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
        filteredProducts.forEach(product => renderProduct(product));
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider .slides img');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 3000);
});
