function loco() {
    const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
}

function fixedImg() {
    let elems = document.querySelectorAll(".elem")
    let fixed = document.querySelector("#fixed")

    elems.forEach((e) => {
        e.addEventListener("mouseenter", () => {
            fixed.style.display = "block"
            let img = e.getAttribute("data-img")
            fixed.style.backgroundImage = `url(${img})`
        })
        e.addEventListener("mouseleave", () => {
            fixed.style.display = "none"
        })
    })
}

function swiper() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
}

loco()
fixedImg()
swiper()