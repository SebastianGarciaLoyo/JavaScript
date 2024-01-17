document.getElementById('formu').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('nombre').value;
    const password = document.getElementById('contra').value;

    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioValido = usuariosRegistrados.find(usuario => usuario.nombre === username && usuario.contraseña === password);

    if (usuarioValido) {
        alert("Inicio de sesión exitoso");
        // Redireccionar a otra página después del inicio de sesión exitoso
        window.location.href = 'Guias-Minecraft.html'; 
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});