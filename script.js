// daftar produk dengan gambar 
const product = [
    { id: 1, name: 'AQUA', price: 2000, img: 'img:/aqua.jpg'},
    { id: 2, name: 'BONCABE', price: 1000, img: 'ing/boncabe.webp'},
    { id: 3, name: 'CHOCOPIE', price: 2000, img: 'img/chocopie.jpg'},
    { id: 4, name: 'MAXICORN', price: 2000, img: 'img/maxicorn.jpg'},
    { id: 5, name: 'QTELLA', price: 2000, img: 'img/qtella.jpg'},
];

// kerajang belanja 
let cart = [];

// tampilkan produk
function displayproducts() {
    
    const productsontainer =
    document.getElementById('product');

    product.forEach(product => {
        
        const productstdiv =
        document.createElement('div');

        productstdiv.classList.add('product');

        productstdiv.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Rp ${product.price}</p>
        
        <button onclick="addtocart(${product.id})">
        tambah kekeranjang
        </button>
        `;

        productscontainer.appendChi1d(productsdiv);
    });
}

// tambah ke keranjang
function addTocart(productid) {
    const product =
    products.find(p => p.id === productid);

    const cartitem =
    cart.find(item => item.id === productid);


    if(caritem){

        cartitem.quantity += 1;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    updatecart();
}

// update keranjang 
function updatecart(){

    const cartitemcontainer =
    document.getElementById('cart-items');

    cartitemcontainer.innerHTML ='';

    let totalprice = 0;

    cart.forEach(item =>{

        const listitem =
        document.createElement('li');

        listitem.textContent =
        `${item.name} x ${item.quantity} - Rp ${item.price * item.quantity}`;

        cartitemcontainer.appendChild(listitem);

        totalprice += item.price * item.quantity;

    });
    document.getElementById('total-price')
    ,textContent = totalprice;
}

// checkout
function checkout() {


    if (cart.length === 0) {

        alert('keranjang anda kosong.');
        return;
    }

    const total =cart.reduce(
      (sum, item)  =>
        sum + item.price *item.quantity,
      0
    );

    const payment = parseInt(
        prompt(
            `Total belanja anda Rp ${total}\nMasukan jumlah pembayaran:`
        )
    );
    if (payment >= total) {

        alert(
            `pembayaran berhasil!\nKembalian anda: Rp ${payment - total}`
        );

        cart =[];

        updatecart();

    } else {

        alert('uang anda tidak mencukupi.');

    }
}
// total checkout
document
.getElementById('checkout-btn')
.addEventListener('click', checkout);

// tampilkan produk
displayproducts();
