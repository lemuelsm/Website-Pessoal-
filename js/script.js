const menuH = document.querySelector('.menu-hamburguer');
menuH.addEventListener('click', () => {
    mudaMenu();
});

function mudaMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuH.classList.toggle('change');

    if(menuH.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}