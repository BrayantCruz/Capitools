
  let cartCount = 0;
  let cartTotal = 0;

  function agregarProducto(precio) {
    cartCount++;
    cartTotal += precio;

    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
  }

  // Buscar todos los botones con la clase "add-to-cart"
  const botonesAgregar = document.querySelectorAll('.add-to-cart');

  // Recorrer y añadir evento
  botonesAgregar.forEach(boton => {
    boton.addEventListener('click', () => {
      const precio = parseFloat(boton.getAttribute('data-precio'));
      agregarProducto(precio);
    });
  });



  
  function buscarProducto(event) {
    event.preventDefault();
    const input = document.getElementById('busqueda').value.trim().toLowerCase();

    const productos = [
      'alambre recocido', 'pegazuelos', 'cemento blanco', 'cinta teflón', 'nariz bronce',
      'nariz plastico', 'cinta aislante', 'pasta para soldar', 'estaño', 'pilas',
      'barrilla soldar', 'alambre pua', 'thiner', 'botas de hule'
    ];

    const categorias = [
      'plomada', 'flexometros', 'mangueras', 'tubopvc', 'coplepvc',
      'codopvc', 'codotee', 'codoyee', 'manguera electroducto', 'cables',
      'martillo', 'serrucho', 'clavos', 'tornillo coche', 'tuerca'
    ];

    const normalizar = texto => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const inputNormalizado = normalizar(input);

    // Buscar coincidencia parcial en productos
    const productoMatch = productos.find(prod => normalizar(prod).includes(inputNormalizado));
    if (productoMatch) {
      window.location.href = `productos.html?producto=${encodeURIComponent(productoMatch)}`;
      return false;
    }

    // Buscar coincidencia parcial en categorías
    const categoriaMatch = categorias.find(cat => normalizar(cat).includes(inputNormalizado));
    if (categoriaMatch) {
      window.location.href = `productos1.html?categoria=${encodeURIComponent(categoriaMatch)}`;
      return false;
    }

    alert("No se encontró el producto o categoría. Intenta con otra palabra.");
    return false;
  }





  

 