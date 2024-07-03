document.addEventListener('DOMContentLoaded', function () {
    const openCartBtn = document.querySelector('.custom-add-to-cart-btn');
    const offcanvasCart = new bootstrap.Offcanvas(document.getElementById('offcanvasCart'));
  
    // Agregar un evento de clic al botón para abrir el offcanvas
    openCartBtn.addEventListener('click', function () {
      // Obtener los datos del producto
      const productName = document.getElementById('product-name').innerText;
      const productImage = document.getElementById('product-image').src;
      const productPrice = document.getElementById('product-price').innerText;
  
      // Obtener el contenedor del carrito en el offcanvas
      const cartContent = document.querySelector('#offcanvasCart .offcanvas-body');
  
      // Crear elementos HTML para mostrar los datos del producto
      const productDiv = document.createElement('div');
      productDiv.classList.add('product-item');
  
      const img = document.createElement('img');
      img.src = productImage;
      img.alt = productName;
      img.classList.add('img-fluid', 'mb-2');
  
      const name = document.createElement('h4');
      name.textContent = productName;
  
      const price = document.createElement('p');
      price.textContent = productPrice;
  
      // Agregar los elementos al contenedor del carrito en el offcanvas
      productDiv.appendChild(img);
      productDiv.appendChild(name);
      productDiv.appendChild(price);
      cartContent.innerHTML = ''; // Limpiar el contenido anterior
      cartContent.appendChild(productDiv);

      const modal = document.querySelector('#exampleModal1');
    const modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();
  
      // Mostrar el offcanvas
      offcanvasCart.show();
    });
  });
  
