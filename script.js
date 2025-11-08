document.addEventListener('DOMContentLoaded',()=>{
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mainNav = document.querySelector('main-nav');
    mobileMenuIcon.addEventListener('click',()=>{
        mainNav.classList.toggle('active');
    });
});