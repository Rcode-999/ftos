if(document.readyState == 'loading'){
    
    document.addEventListener('DOMContentLoaded',ready)
}
else{
    ready();
    clearStorage();
}

function ready(){
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for(var i = 0;i < removeCartItemButtons.length;i++){
        var button = removeCartItemButtons[i];
        button.addEventListener('click', e => {
            removeCartItem(e);
        })
    }  
    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for(var i = 0;i < quantityInputs.length;i++){
        var input = quantityInputs[i];
        input.addEventListener('change', e => {
            quantityChanged(e);
        })
    }  
    var uniqueArrayItems =JSON.parse(localStorage.getItem('uniqueArray'));
    for(var i = 0;i < uniqueArrayItems.length;i++){
        var name = uniqueArrayItems[i].name;
        var price = uniqueArrayItems[i].price;
        addItemToCart(name,price);
    }
}

function removeCartItem(e){
    var buttonClicked = e.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}
function quantityChanged(e){
    var input = e.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateCartTotal();
}
function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows  = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for(var i = 0;i < cartRows.length;i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price =parseFloat(priceElement.innerText.replace('R',''));
        var quantity = quantityElement.value;
        total = total + (price*quantity);
    }
    total = Math.round(total * 100)/100;
    document.getElementsByClassName('cart-total-price')[0].innerText = 'R' + total + '.00';
}

function addItemToCart(name,price){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${name}</span>
        </div>
        <span class="cart-price cart-column">R${price}.00</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}


function clearStorage() {

    let session = sessionStorage.getItem('register');

    if (session == null) {
    
        localStorage.removeItem('remove');

    }
    sessionStorage.setItem('register', 1);
}
window.addEventListener('load', clearStorage);