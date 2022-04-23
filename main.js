const iconoMenu = document.querySelector('#icono-menu'),
        menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e)=> {

    menu.classList.toggle('active');

    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == './img/images.jpg'){
        e.target.setAttribute('src', './img/images.jpg');
    } else{
        e.target.setAttribute('src', './img/images.jpg');

    }
});