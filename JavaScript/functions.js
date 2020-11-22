/* if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  var addToCartButtons = document.getElementsByClassName('add');
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked);
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input');
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  }

  var removeCartItemButtons = document.getElementsByClassName('remove');
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', removeCartItem);
  }

  document
    .getElementsByClassName('btn-purchase')[0]
    .addEventListener('click', purchaseClicked);
}

function purchaseClicked() {
  alert('Thank you for your purchase');
  var cartItems = document.getElementsByClassName('cart-items')[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function purchaseClicked() {
  alert('Obrigado! Seu cartão foi clonado :D');
  var cartItems = document.getElementsByClassName('cart-items')[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName('item-name')[0].innerText;
  var price = shopItem.getElementsByClassName('item-price')[0].innerText;
  var imageSrc = shopItem.getElementsByClassName('item-image')[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('div');
  cartRow.classList.add('cart-row');
  var cartItems = document.getElementsByClassName('cart-items')[0];
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert('This item is already added to the cart');
      return;
    }
  }
  var cartRowContents = `
    <div class="cart">
      <div class="product-name">
        <img src="${imageSrc}" />
        <p><b>${title}</b></p>
        <div class="quantidade">
          <strong>Quantidade</strong>
          <div class="cart-items">
            <button class="add">
              <i class="fas fa-plus"></i>
            </button>
            <input type="number" value="1" class="cart-quantity-input">
            <button class="remove">
              <i class="fas fa-minus"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="description">
        <p>Lorem ipsum dolor</p>
      </div>
      <div class="price">
        <p class="cart-price cart-column">VALOR<br>$&nbsp${price}</p>
      </div>
    </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName('remove')[0]
    .addEventListener('click', removeCartItem);
  cartRow
    .getElementsByClassName('cart-quantity-input')[0]
    .addEventListener('change', quantityChanged);
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0];
  var cartRows = cartItemContainer.getElementsByClassName('cart-row');
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName('cart-price')[0];
    var quantityElement = cartRow.getElementsByClassName(
      'cart-quantity-input',
    )[0];
    var price = parseFloat(priceElement.innerText.replace('R$', ''));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName('cart-total-price')[0].innerText =
    'R$' + total;
}

 */

var data = [];
var storage = window.localStorage;
var globalUserStatus = false;


$(document).ready(function () {
  clickEvent();
});


function clickEvent() {
  $("#pay").click(function() {
    user = JSON.parse(localStorage.getItem('user'));
    for (c = 0; c < user.length; c++) {
      if (user[c][1] == email && user[c][2] == password) {
        alert("Compra concluída com sucesso! Volte sempre");
      } else {
        globalUserStatus = true;
      }
    }

    if (globalUserStatus == true) {
      alert("Usuário não encontrado! Cadastre-se! ");
    }
  });
}







function initMap() {
  var configuracoes = {
    center: { lat: 11.551536855884436, lng: 92.24415040434234 },
    zoom: 12,
  };

  var mapa = new google.maps.Map(document.getElementById('map'), configuracoes);

  var marcador = new google.maps.Marker({
    position: { lat: 11.551536855884436, lng: 92.24415040434234 },
    title: 'Ilha Sentilena do Norte',
    map: mapa,
  });
}
