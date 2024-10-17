// script.js
const cart = [];

document.getElementById('product-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const productName = document.getElementById('product-name').value;
    const productPrice = parseFloat(document.getElementById('product-price').value);
    
    if (productName && productPrice > 0) {
        // Añadir producto al carrito
        cart.push({ name: productName, price: productPrice });
        updateCart();

        // Limpiar formulario
        document.getElementById('product-name').value = '';
        document.getElementById('product-price').value = '';
    } else {
        alert("Por favor, ingrese un nombre y precio válidos.");
    }
});

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';

    let subtotal1 = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - S/. ${item.price}`;
        cartItemsDiv.appendChild(itemDiv);
        subtotal1 += item.price;
    });

    const discount = subtotal1 > 3000 ? subtotal1 * 0.1 : 0;
    const subtotal2 = subtotal1 - discount;
    const igv = subtotal2 * 0.18;
    const total = subtotal2 + igv;

    document.getElementById('subtotal').textContent = `Subtotal 1: S/. ${subtotal1.toFixed(2)}`;
    document.getElementById('discount').textContent = `Descuento: S/. ${discount.toFixed(2)}`;
    document.getElementById('subtotal2').textContent = `Subtotal 2: S/. ${subtotal2.toFixed(2)}`;
    document.getElementById('igv').textContent = `IGV (18%): S/. ${igv.toFixed(2)}`;
    document.getElementById('total').textContent = `Total a Pagar: S/. ${total.toFixed(2)}`;
}
