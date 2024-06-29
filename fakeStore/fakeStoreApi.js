const container = document.getElementById("container");
const imageContainer = document.getElementById("imageContainer");
const image = document.getElementById("image");
const descriptionElement = document.getElementById("description");

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
        data.map((item) => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `<img src="${item.image}">
        <h1>${item.title}</h1>
        <p class="category">Category : ${item.category}</p>
        <p class="price">${item.price} $</p>
        <p class="rating">Rating: ${item.rating.rate} (${item.rating.count} reviews)</p>`;

            card.addEventListener("click", () => {
                openImage(item.image, item.description);
            });
            container.appendChild(card); // ekleme
        });
    });

const openImage = (imageUrl, description) => {
    image.src = imageUrl;
    descriptionElement.textContent = description;
    imageContainer.style.display = "flex";
};

window.onclick = (event) => {
    if (event.target == imageContainer) {
        imageContainer.style.display = "none";
    }
};
