
let products = {
  coldDrinks: [
    {
       name: "Coca-Cola", 
       size: "70 g",
       price: 2.99,
       img: "./Assets/images/COCA.png"

     },
    {
       name: "Bottle of water ", 
       size: "100 g",
       price: 1.30,
       img: "./Assets/images/water_bottle_PNG98959.png"

     },
  ],
  Burgers: [
    {
      name: "HamBurger",
      size: "320 g",
      price: 4.5,
      img: "./Assets/images/pngtree-tasty-beef-burger-png-image_13165623.png",
    },
   
    {
      name: "Checken-Deluxe",
      size: "240 g",
      price: 4.25,
      img: "./Assets/images/delicious-buffalo-chicken-burger-on-transparent-background-png.png",
    },
    {
      name: "CheeseBurger",
      size: "150 g",
      price: 3.5,
      img: "./Assets/images/1024px-Cheeseburger.png",
    },
    {
      name: "Big John",
      size: "650 g",
      price: 7.25,
      img: "./Assets/images/hamburger-food-isolated-on-transparent-background-burger-generative-ai-png.png",
    },
    {
      name: "Spicy Chicken",
      size: "340 g",
      price: 2.18,
      img: "./Assets/images/ai-generated-fried-chicken-burger-free-png.png",
    },
    {
      name: "SuperStars",
      size: "250 g",
      price: 3.75,
      img: "./Assets/images/pngtree-burger-food-png-free-download-png-image_13329458.png",
    },
  ],
  Pizza: [
    {
      name: "Super Supreme",
      size: "250 g",
      price: 5.20,
      img: "./Assets/images/supreme-pizza.png",
    },
    {
      name: "Pepperoni",
      size: "350 g",
      price: 3.25,
      img: "./Assets/images/pngtree-pepperoni-pizza-isolated-illustration-ai-generative-png-image_11535530.png",
    },
    {
      name: "Margherita",
      size: "160 g",
      price: 2.18,
      img: "./Assets/images/pngtree-margherita-pizza-in-a-dish-png-image_10012685.png",
    },
    {
      name: "MixCheese",
      size: "220 g",
      price: 4.75,
      img: "./Assets/images/dd3a72e8611869ad846e87b7ed1189cc.png",
    },
    {
      name: "Dynamite Ranch Chicken",
      size: "300 g",
      price: 3.80,
      img: "./Assets/images/Pizza_Dynamite_1.png",
    },
    {
      name: "Seafood",
      size: "320 g",
      price: 7.35,
      img: "./Assets/images/pngtree-seafood-pizza-with-shrimp-squid-shellfish-png-image_11484457.png",
    },
  ],
  Wok: [
    {
      name: "Singapore Noodles",
      size: "250 g",
      price: 5.12,
      img: "./Assets/images/pngtree-singapore-noodles-png-image_13171473.png",
    },
   
    {
      name: "Cucumbers With Trumpet Mushrooms",
      size: "50 g",
      price: 2.20,
      img: "./Assets/images/pngtree-stir-fried-sea-cucumber-with-wild-mushrooms-in-xo-sauce-png-image_7017107.png",
    },
    {
      name: "Gai Lan",
      size: "250 g",
      price: 3.68,
      img: "./Assets/images/pngtree-beef-and-vegetables-stir-fry-in-black-plate-png-image_11964632.png",
    },
   
    {
      name: "Kung Pao",
      size: "250 g",
      price: 4.35,
      img: "./Assets/images/pngtree-fresh-chicken-stir-fried-with-noodles-png-image_11627325.png",
    },
    {
      name: "Asparagus Soup",
      size: "150 g",
      price: 2.01,
      img: "./Assets/images/cream-of-asparagus-soup-png-05242024-k6xz7mkz8e8sdkw8.png",
    },
    {
      name: "Sweet&Sour",
      size: "100 g",
      price: 6.33,
      img: "./Assets/images/fresh-sweet-and-sour-fried-chicken-isolated-on-transparent-background-png.png",
    },
  ],
  Desserts: [
    {
      name: "Donuts",
      size: "30 g",
      price: 2.14,
      img: "./Assets/images/assorted-pile-of-colorful-delicious-donut-isolated-on-a-transparent-background-png.png",
    },
    {
      name: "Tiramisu",
      size: "50 g",
      price: 2.14,
      img: "./Assets/images/pngtree-tiramisu-cake-isolated-png-image_13016852.png",
    },
    {
      name: "Strawberry cheesecake",
      size: "50 g",
      price: 2.14,
      img: "./Assets/images/pngtree-strawberry-cheesecake-dessert-png-image_11342180.png",
    },
    {
      name: "Lemon Tart",
      size: "100 g",
      price: 2.14,
      img: "./Assets/images/pngtree-a-sophisticated-fruit-tart-adorned-with-vibrant-berries-png-image_11890881.png",
    },
  ],
  Pasta: [
    {
      name: "Redsauce",
      size: "150 g",
      price: 3.70,
      img: "./Assets/images/ai-generated-pasta-with-tomato-sauce-in-a-bowl-free-png.png",
    },
  ],
};

let catsDiv = document.querySelector("#productCats");
let cats = Object.keys(products);
function createCategoryButtons() {
  catsDiv.innerHTML = "";
cats.forEach((el) => {
    let button = document.createElement("button");

   
    button.className = "col-4 d-flex flex-column text-center align-items-center justify-content-center gap-5 btnProduct";
    button.onclick = () => showProducts(el); 
   
    let firstProduct = products[el][0];
    let imgUrl = firstProduct ? firstProduct.img : "./Assets/images/pngimg.com - cocacola_PNG24.png";

    let img = document.createElement("img");
    img.src = imgUrl;

    img.style.maxWidth = "140px";
    img.style.height = "140px";
    img.className = "food";

    button.appendChild(img);
    button.appendChild(document.createTextNode(el)); 

    catsDiv.appendChild(button);
});
}
let productsDiv = document.querySelector("#productCats");
function showProducts(catName) {
  
  let productsToFetch = products[catName];
  productsDiv.innerHTML = "";
  productsToFetch.forEach((el, index) => {
    productsDiv.innerHTML += `
      <button class="btn" onclick="addToCart('${catName}',${index})">
        <div class="card border-0 justify-content-center" style="width: 15rem;">
          <img src="${el.img}" class="card-img-top w-75" />
          <div class="card-body p-0 text-start">
            <h5 class="card-title">${el.name}</h5>
            <p class="card-text">${el.size} </p>
            <p class="card-text">${el.price} $</p> 
          </div>
        </div>
      </button>
    `;
  });
}

function showCategories() {
  productsDiv.innerHTML = "";
  cats.forEach((el) => {
    let button = document.createElement("button");

    
    button.className = "col-4 d-flex flex-column text-center align-items-center justify-content-center btnProduct";
    button.onclick = () => showProducts(el); 

    
    let firstProduct = products[el][0];
    let imgUrl = firstProduct ? firstProduct.img : "./Assets/images/COCA.png";

    
    let img = document.createElement("img");
    img.src = imgUrl;
   
    img.style.width = "140px";
    img.style.height = "140px";
    img.className = "food";
    
    button.appendChild(img);
    button.appendChild(document.createTextNode(el)); 

    catsDiv.appendChild(button);
});
}

let cart = []; 
let cartDiv = document.createElement("div");
cartDiv.id = "cart";
  cartDiv.classList.add("animate__animated", "animate__bounceInRight");

function renderCart() {
  
  let cartContent = `
        <table class="table table-bordered table-dark">
          <thead>
            <tr>
              <th>-</th>
              <th>item Name</th>
              <th>item Price</th>
              <th>item Qty</th>
              <th>Total</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
                 </tbody>
          <tfoot>
            <tr>
              <td colspan="3">Total</td>
              <td colspan="3" id="Total"></td>
            </tr>
          </tfoot>
        </table>
    `;
  cartDiv.innerHTML = cartContent;
  let tablebody = document.querySelector("tbody");
  tablebody.innerHTML = "";
  cart.forEach((el,index) => {
    tablebody.innerHTML += `
      <tr>
        <th>${index +1}</th>
        <th>${el.name}</th>
        <th>${el.price}</th>
        <th>${el.qty}</th>
        <th>${el.qty * el.price}</th>
        <th><button class="btn btn-light" onclick="delProduct(${index})">Del</button></th>
      </tr>
    `;
  });
document.body.appendChild(cartDiv);


let sum = 0;
cart.forEach((el) => {
  let x = +el.price * +el.qty;
  sum += x;
});

let TotalCell = document.querySelector("#Total");

TotalCell.innerText = sum;
}

function addToCart(catName, productIndex) {
  if (cartDiv.style.display !== "block") {
  
    cartDiv.style.display = "block";
    cartDiv.classList.add("animate__animated", "animate__bounceInRight");


    cartDiv.scrollIntoView({ behavior: "smooth" });
  }
  let product = products[catName][productIndex];
  let obj = { name: product.name, price: product.price, qty: 1 }; 

 
  let isVaild = cart.findIndex((el) => el.name === obj.name);
  if (isVaild === -1) {
    cart.push(obj);
  } else {
    cart[isVaild].qty++;
  }

  renderCart(); 
 
}

function delProduct(index){
  cart.splice(index,1);
  renderCart();
}

document.body.appendChild(cartDiv);

showCategories();

cartDiv.addEventListener("mouseover", () => {
  cartDiv.style.display = "block";
});

cartDiv.addEventListener("mouseleave", () => {
  cartDiv.style.display = "none";
});
 