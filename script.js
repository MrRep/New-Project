const toggleBtn = document.querySelector('.toggle_bth');
const toggleBtnIcon = document.querySelector('.toggle_bth i');
const dropDownMenu = document.querySelector('.dropdown_menu');

if (toggleBtn && dropDownMenu && toggleBtnIcon) {
    toggleBtn.addEventListener('click', () => {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');
        toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });
}