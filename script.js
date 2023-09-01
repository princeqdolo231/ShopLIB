let cart_container = document.getElementById("Explore-Products-Cards-Section");

let hero_Image = document.querySelector("#Image-Slider");

let store = [{
        img_src: "./airpods.jpeg",
        product_name: "Airpods",
        price: "$200.00",
        guarantee: "Last for 8 year"

    },
    {
        img_src: "./camera.jpeg",
        product_name: "Canon",
        price: "$400.00",
        guarantee: "Last for 5 year"
    },
    {
        img_src: "./mouse.jpeg",
        product_name: "Wireless Mouse",
        price: "$1500.00",
        guarantee: "Last for 10 year"

    },
    {
        img_src: "./iphone12pro.jpeg",
        product_name: "IPhone 12 Pro",
        price: "$700.00",
        guarantee: "Last for 15 year"
    }
]

// Hero Section slides
function slide() {

    let random_Index = Math.floor(Math.random() * store.length)

    hero_Image.innerHTML = `
    <div class="blur"></div>
    <div class="overlay">
        <h1>Welcome To Our Store</h1>
        <p>We sell values that you can't regret!</p>
    </div>
    <img class="HERO-SLIDER-IMG" src="${store[random_Index].img_src}">
    `
}
slide()

// Change slide after every 3 seconds
setInterval(slide, 3000)


// Product cards
for (i = 0; i < store.length; i++) {
    cart_container.innerHTML += `

    <div class="Card"> 
    <div class="">
        <img class="Card-Img" src="${store[i].img_src}">
    </div>

    <div class="Products-Card-Description">
        <h3>${store[i].product_name}</h3>
        <p>${store[i].guarantee}</p>
        <h4>${store[i].price}</h3>
    </div>
    </div> 
    `
}