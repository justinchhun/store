
function ShowAndHide1() {
  var x = document.getElementById('SectionName1');
  if (x.style.display == 'none') {
      x.style.display = 'block';
  } else {
      x.style.display = 'none';
  }
}
function ShowAndHide2() {
  var y = document.getElementById('SectionName2');
  if (y.style.display == 'none') {
      y.style.display = 'block';
  } else {
      y.style.display = 'none';
  }
}
function ShowAndHide3() {
  var z = document.getElementById('SectionName3');
  if (z.style.display == 'none') {
      z.style.display = 'block';
  } else {
      z.style.display = 'none';
  }
}

function ShowAndHide4() {
  var x = document.getElementById('SectionName4');
  if (x.style.display == 'none') {
      x.style.display = 'block';
  } else {
      x.style.display = 'none';
  }
}
function ShowAndHide5() {
  var y = document.getElementById('SectionName5');
  if (y.style.display == 'none') {
      y.style.display = 'block';
  } else {
      y.style.display = 'none';
  }
}
function ShowAndHide6() {
  var z = document.getElementById('SectionName6');
  if (z.style.display == 'none') {
      z.style.display = 'block';
  } else {
      z.style.display = 'none';
  }
}

function ShowAndHide7() {
  var x = document.getElementById('SectionName7');
  if (x.style.display == 'none') {
      x.style.display = 'block';
  } else {
      x.style.display = 'none';
  }
}
function ShowAndHide8() {
  var y = document.getElementById('SectionName8');
  if (y.style.display == 'none') {
      y.style.display = 'block';
  } else {
      y.style.display = 'none';
  }
}
function ShowAndHide9() {
  var z = document.getElementById('SectionName9');
  if (z.style.display == 'none') {
      z.style.display = 'block';
  } else {
      z.style.display = 'none';
  }
}
function ShowAndHide10() {
  var z = document.getElementById('SectionName10');
  if (z.style.display == 'none') {
      z.style.display = 'block';
  } else {
      z.style.display = 'none';
  }
}
function ShowAndHide11() {
  var z = document.getElementById('SectionName11');
  if (z.style.display == 'none') {
      z.style.display = 'block';
  } else {
      z.style.display = 'none';
  }
}
function ShowAndHide12() {
  var z = document.getElementById('SectionName12');
  if (z.style.display == 'none') {
      z.style.display = 'block';
  } else {
      z.style.display = 'none';
  }
}











var products = [
    {name:"Beef", price: 7.50, quantitiy:5},
    {name:"Chicken", price: 7.50, quantitiy:2},
    {name:"Pork", price: 7.50, quantitiy:9},
    {name:"Pepparoni Pizza", price: 7.50, quantitiy:5},
    {name:"Hawaiian Pizza", price: 8, quantitiy:2},
    {name:"Cheese Pizza", price: 5.50, quantitiy:9},
    {name:"Vanilla Ice Cream", price: 5.50, quantitiy:5},
    {name:"Chocolate Ice Cream", price: 5.50, quantitiy:2},
    {name:"Strawberry Ice Cream", price: 5.50, quantitiy:9},
    {name:"Apple", price: 3.50, quantitiy:5},
    {name:"Banana", price: 4.50, quantitiy:2},
    {name:"Grapes", price: 6.50, quantitiy:9},
    {name:"Lettuce", price: 7.50, quantitiy:5},
    {name:"Corn", price: 5.50, quantitiy:2},
    {name:"Tomato", price: 5.50, quantitiy:9},
    {name:"Slice Cheese", price: 3.50, quantitiy:5},
    {name:"Full Cream Milk", price: 5.50, quantitiy:2},
    {name:"Whip Cream", price: 4.50, quantitiy:9},
    {name:"Coca Cola", price: 25.50, quantitiy:5},
    {name:"Fanta Orange", price: 10.50, quantitiy:2},
    {name:"Sprite Lemonade", price: 10.50, quantitiy:9},
    {name:"Mocha", price: 5.50, quantitiy:5},
    {name:"Espresso", price: 5.50, quantitiy:2},
    {name:"Latte", price: 4.50, quantitiy:9},
    {name:"Ice Coffee Frappe", price: 5.50, quantitiy:5},
    {name:"Ice Chocolate Frappe", price: 5.50, quantitiy:2},
    {name:"Ice Caramel Frappe", price: 5.50, quantitiy:9},
    {name:"Nurofen For Children Baby 3+", price: 15.00, quantitiy:5},
    {name:"Claritin Syrup", price: 18.50, quantitiy:2},
    {name:"Nurofen Zavance 256mg", price: 7.50, quantitiy:9},
    {name:"Claritin Allergies 5mg", price: 25.50, quantitiy: 3},
    {name:"Purina Lucky Dog", price: 22.50, quantitiy:4},
    
];



var shoppingCart = (function() {

    var itemcart = [];


    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = quantitiy;
      }
    
      function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(itemcart));
      }
      
    
       var obj = {};
      
      // Add to cart
      itemcart.addItemToCart = function(name, price, count) {
        for(var item in cart) {
          if(cart[item].name === name) {
            cart[item].count ++;
            saveCart();
            return;
          }
        }
        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
       
      }

});