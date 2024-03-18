const btnCart = document.querySelector('.icono')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

// Event listener solo para el icono "custom-icon"
const customIcon = document.querySelector('.custom-icon');

customIcon.addEventListener('click', () => {
  // Lógica para el click en el icono custom-icon
});
