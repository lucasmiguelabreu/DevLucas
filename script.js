
document.addEventListener('DOMContentLoaded', function() {
    let menuIcon = document.querySelector('.menu-icon');
    let menu = document.querySelector('.menu');
    let menuIconImg = document.getElementById('menu-icon-img');
    let menuOpen = false;

    menuIcon.addEventListener('click', function() {
        if (!menuOpen) {
            menu.style.right = '0';
            menuIconImg.src = 'assets/close.png'; // Altere para o caminho da imagem de fechamento
            menuIconImg.style.height = '25px';
            menuOpen = true;
        } else {
            menu.style.right = '-300px';
            menuIconImg.src = 'assets/menu-icon.png'; // Altere para o caminho da imagem do menu
            menuIconImg.style.height = '30px';
            menuOpen = false;
        }
    });
});

