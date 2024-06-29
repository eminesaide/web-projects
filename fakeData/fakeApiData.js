const container = document.getElementById("container");
const imageContainer = document.getElementById("imageContainer");
const image = document.getElementById("image");

//https://api.escuelajs.co/api/v1/products
fetch("https://jsonplaceholder.typicode.com/photos?_limit=50")
    .then((response) => response.json())
    .then((data) => {
        data.map((item) => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `<img src="${item.thumbnailUrl}" alt="${item.title}">
            <p>${item.title}</p>`;
            //tıklandığında resmi aç
            card.addEventListener("click", () => {
                console.log("karta tıklandı", item.url);
                openImage(item.url);
            });
            container.appendChild(card); // ekleme
        });
        console.log(data);
    });

const openImage = (imageUrl) => {
    console.log("açılacak resim url", imageUrl);
    image.src = imageUrl;
    imageContainer.style.display = "flex";
};

window.onclick = (event) => {
    if (event.target == imageContainer) {
        imageContainer.style.display = "none";
    }
};
