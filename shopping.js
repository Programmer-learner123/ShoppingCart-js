let products = [


    {
        id: 1,
        name: "Floral Skirt",
        size: "L",
        color: "Pink",
        price: "1200",
        image: "./images/image1.jpg",
        description: "floral pink skirt"
    },

    {
        id: 2,
        name: "Long Kurti",
        size: "L",
        color: "Black",
        price: "1500",
        image: "./images/image2.jpg",
        description: "Black Long Kurti"
    },
    {
        id: 3,
        name: "Top and skirt",
        size: "M",
        color: "White",
        price: "5000",
        image: "./images/image3.jpg",
        description: "White top and pink skirt"
    },
    {
        id: 4,
        name: "Indian Kurti",
        size: "S",
        color: "Orange",
        price: "2000",
        image: "./images/image4.jpeg",
        description: "Orange and Red Indian Kurti"
    },
    {
        id: 5,
        name: "T-shirt",
        size: "XS",
        color: "WhitePink",
        price: "1000",
        image: "./images/image5.jpg",
        description: "White and Red T-shirt"
    },
    {
        id: 6,
        name: "Denim Match",
        size: "M",
        color: "Blue Denim",
        price: "2500",
        image: "./images/image6.jpg",
        description: "Denim T-shirt with Denim Jeans"
    },
    //More 6 products
    {
        id: 7,
        name: "Frill Gown",
        size: "M",
        color: "White and Red",
        price: "5500",
        image: "./images/image7.jpg",
        description: "White Frill Frock with red leaves on it."
    },
    {
        id: 8,
        name: "Mini Skirt With Jacket",
        size: "M",
        color: "Dark Blue & Red",
        price: "2500",
        image: "./images/image8.jpg",
        description: "Dark Blue Mini Skirt with Red Jacket."
    },
    {
        id: 9,
        name: "Shirt & Trousers",
        size: "L",
        color: "Red",
        price: "3000",
        image: "./images/image9.jpg",
        description: "Red shirt with black Trousers"
    },
    {
        id: 10,
        name: "Black on Black",
        size: "M",
        color: "Black",
        price: "4500",
        image: "./images/image10.jpg",
        description: "Black Suit with black trousers."
    },
    {
        id: 11,
        name: "Stripes T-shirt under Denim Jacket",
        size: "M",
        color: "Blue Denim",
        price: "1500",
        image: "./images/image11.jpg",
        description: "Denim T-shirt with Denim Jeans"
    },
    {
        id: 12,
        name: "Grey Suit",
        size: "XL",
        color: "Biscuit Grey",
        price: "5000",
        image: "./images/image12.jpg",
        description: "Biscuit Grey Suit"
    },
];

cart = [];

function displayProducts(productsData, who = "productwrapper") {
    let productString = " ";

    productsData.forEach(function (product, index) {

        let {
            id,
            name,
            image,
            color,
            description,
            price,
            size
        } = product; //destructuring; means the name of product matches with
        //name of product stored.
        //let productString = JSON.stringify(product);

        if (who == "productwrapper") {
            productString += `<div class="product">
        <div class="prodimg">
            <img src="./${image}"  width="100%;" />
        </div>
        <h3>${name}</h3> 
        <p>Price: ${price} $</p> 
        <p>Size: ${size}</p>
        <p>Color: ${color}</p>
        <p> ${description}</p>
        <p>
            <button onclick="addToCart(${id})">Add to cart</button>
        </p>
    </div>`;
        } else if (who == "cart") {
            productString += `<div class="product">
            <div class="prodimg">
                <img src="./${image}"  width="100%;" />
            </div>
            <h3>${name}</h3> 
            <p>Price: ${price}</p> 
            <p>Size: ${size}</p>
            <p>Color: ${color}</p>
            <p> ${description}</p>
            <p>
                <button onclick="removeFromCart(${id})">Remove from Cart</button>
            </p>
        </div>`;
        }

    });
    document.getElementById(who).innerHTML = productString;
}

// for price, size filters are used
displayProducts(products);

function searchProduct(searchValue) {

    let searchedProducts = products.filter(function (product, index) {
        let searchString = product.name +
            " " + product.color + " " +
            product.description;
        return (searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1);
    });
    displayProducts(searchedProducts);
}

function getProductByID(productArray, id) {
    return productArray.find(function (product) {
        return product.id == id;
    });
}

let value = 0;

function addToCart(id) {
    value = 0;
    let prod = getProductByID(products, id);

    cart.forEach(function (ele) {
        if (ele.id == prod.id) {
            value = 1;
        }
    });
    if (value == 0) {
        cart.push(prod);
        displayProducts(cart, "cart");
        CountTotalItems();
    } else {
        alert('This Product is already in Cart!');
    }


}

function removeFromCart(id) {

    let index = cart.findIndex(function (product) { //retrive index from id
        return product.id == id;
    });

    //   removing from cart based on index
    cart.splice(index, 1);
    displayProducts(cart, "cart");
    CountTotalItems();
}



function filterbyPrice() {
    let minimumPrice = document.getElementById('min-price').value;
    let maximumPrice = document.getElementById('max-price').value;
    let filteredProducts = products.filter(function (product) {
        return product.price >= minimumPrice && product.price <= maximumPrice;

    });

    displayProducts(filteredProducts);
}


function CountTotalItems() {
    document.getElementById("Totalitems").value = cart.length;

}
CountTotalItems();