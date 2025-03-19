document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".toggle-btn");
    const arrow = document.querySelector(".arrow");
    const hiddenBrands = document.querySelectorAll(".brand.hidden");
        const brandList = document.querySelector('.brands__list')

    button.addEventListener("click", function () {
        button.textContent = button.textContent === "Показать все" ? "Скрыть" : "Показать все";
        arrow.classList.toggle("rotated");
        brandList.classList.toggle('long-list')
    });
});

let swiper;

function initializeSwiper() {
    const width = window.innerWidth;

    if (width <= 320 && !swiper) {
        swiper = new Swiper('.swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 24,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });
    } else if (width > 320 && swiper) {
        swiper.destroy(true, true);
        swiper = null;
    }
}


window.addEventListener('load', initializeSwiper);
window.addEventListener('resize', initializeSwiper);
