const tienda = {
    productos: [],

    mostrarFactura: function() {
        const factura = document.getElementById('factura');
        factura.style.display = 'block';

        const listaProductos = document.getElementById('listaProductos');
        listaProductos.innerHTML = ''; // Limpiar la lista

        let total = 0;

        this.productos.forEach(producto => {
            const item = document.createElement('li');
            item.classList.add('producto');
            item.innerHTML = `${producto.nombre}: $${producto.precio} <button class="botonEliminar" onclick="tienda.eliminarProducto('${producto.nombre}', ${producto.precio})">Eliminar</button>`;
            listaProductos.appendChild(item);

            total += producto.precio;
        });

        const totalElement = document.getElementById('total');
        totalElement.textContent = `Total: $${total}`;
    },

    agregarProducto: function(nombre, precio) {
        const nuevoProducto = { nombre, precio };
        this.productos.push(nuevoProducto);

        this.mostrarFactura();
    },

    eliminarProducto: function(nombre, precio) {
        const indice = this.productos.findIndex(producto => producto.nombre === nombre && producto.precio === precio);

        if (indice !== -1) {
            this.productos.splice(indice, 1);
            this.mostrarFactura();
        }
    }
}; 