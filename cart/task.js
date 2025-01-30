const cart = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product');
const quantity = document.querySelectorAll('.product__quantity-value');

quantity.forEach(item => {
    const inc = item.parentElement.querySelector('.product__quantity-control_inc');
    const dec = item.parentElement.querySelector('.product__quantity-control_dec');
    inc.addEventListener('click', () => {
        item.textContent++;
    })
    dec.addEventListener('click', () => {
        if (item.textContent > 1) {
            item.textContent--;
        }
    })
})

products.forEach(product => {
    const add = product.querySelector('.product__add');
    add.addEventListener('click', () => {
        const id = product.getAttribute('data-id');
        const image = product.querySelector('.product__image').getAttribute('src');
        const count = product.querySelector('.product__quantity-value').textContent;
        if (cart.querySelector(`[data-id="${id}"]`)) {
            const cartProduct = cart.querySelector(`[data-id="${id}"]`);
            const cartProductCount = cartProduct.querySelector('.cart__product-count');
            cartProductCount.textContent = Number(cartProductCount.textContent) + Number(count);
            return;
        }
        const cartProduct = document.createElement('div');      
        cartProduct.classList.add('cart__product');
        cartProduct.setAttribute('data-id', id);
        const cartProductImage = document.createElement('img');
        cartProductImage.classList.add('cart__product-image');
        cartProductImage.setAttribute('src', image);
        cartProduct.appendChild(cartProductImage);
        const cartProductCount = document.createElement('div');
        cartProductCount.classList.add('cart__product-count');
        cartProductCount.textContent = count;
        cartProduct.appendChild(cartProductCount);
        cart.appendChild(cartProduct);
    })
})