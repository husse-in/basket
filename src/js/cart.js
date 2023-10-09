const product = [
  {
    id: 0,
    image: "images/iphone-14.jpg",
    title: "iphone-14 mobile",
    price: 2000,
  },
  {
    id: 1,
    image: "images/watch-1.jpg",
    title: "beautiful watch",
    price: 50,
  },
  {
    id: 2,
    image: "images/photo-2.jpg",
    title: "250D DSLR Camera",
    price: 250,
  },
  {
    id: 3,
    image: "images/HP-14.jpg",
    title: "notebook HP 14 Core",
    price: 750,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
const costomData = categories
  .map((item) => {
    var { image, title, price, id } = item;
    return `<div class='box'>
    <div class='img-box'>
    <img class='images' src=${image}></img>
    </div>
    <div class='bottom'>
    <p>${title}</p>
    <h2>$ ${price}.00</h2>
      <button data-index=${id} id='myBtn'> Add to cart</button>
      </div>
    </div>`;
  })
  .join("");

document.getElementById("root").innerHTML = costomData;

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart(a) {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.lenght;
  if (cart.lenght == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById().innerHTML = "$ " + total + ".00";
        return (
          `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i><div>"
        );
      })
      .join("");
  }
}

const myBtn = document
  .getElementById("myBtn")
  .addEventListener("click", () => console.log("salam"));
console.log(myBtn);