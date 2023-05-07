if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
}
else {
    ready();
}

function ready() {
    updateCartTotal();
    const removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', e => { removeCartItem(e) });
    }

    const quantityInput = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i];
        input.addEventListener('change', e => {
            quantityChanged(e)
        }
        )
    }
}


function removeCartItem(e) {
    var buttonClicked = e.target
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}
function quantityChanged(e) {
    var input = e.target;
    if (isNaN(input.value) || input.value <= 0) [
        input.value = 1
    ]
    updateCartTotal();
}
function updateCartTotal() {
    var cartRows = document.getElementsByClassName('cart-');
    var cartDetails = document.getElementsByClassName('cart-info');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        console.log(cartDetails.length)
        var cartRow = cartRows[i];
        var cartInfo = cartDetails[i];
        var priceElement = document.getElementsByClassName('price')[i];
        var quantityElement = document.getElementsByClassName('cart-quantity-input')[i];
        var price = parseFloat(priceElement.innerText.replace('Price: R', ''));
        var quantity = quantityElement.value;
        document.getElementsByClassName('item-subtotal')[i].innerText = 'R' + (price * quantity);
        var total = total + (price * quantity);
    }
    var subtotal = total - (0.15 * total);
    document.getElementsByClassName('sub-total')[0].innerText = 'R' + subtotal;
    document.getElementsByClassName('tax')[0].innerText = 'R' + (total - subtotal);
    document.getElementsByClassName('total')[0].innerText = 'R' + total;
}


function addItemToCart(name, price) {
    var cartRow = document.createElement('tr');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-table')[0];
    var cartRowContent =
    '<tr><td><div class="FoodName"><p> '+ name +'</p></div><div class="cart-info"> <small class="price">Price: R'+price+' <br> </small><br><button class="btn-danger">Remove</button></div></td><td><input class="cart-quantity-input" type="number" value="1"></td><td class="item-subtotal"></td></tr>'
    cartRow.innerHTML = cartRowContent;
    cartItems.append(cartRow);
}



