// Agrega aquí el código JavaScript para manejar la interactividad de la sección
document.querySelectorAll('.sidebar ul li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.sidebar ul li.active').classList.remove('active');
        this.classList.add('active');
        // Agrega el código para mostrar los requisitos correctos aquí
    });
});
