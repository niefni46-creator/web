/* ==================================================
   HERO SLIDER
================================================== */

const slides = document.querySelectorAll(".hero-slide");

const dots = document.querySelectorAll(".dot");

const nextButton =
    document.querySelector(".slider-next");

const prevButton =
    document.querySelector(".slider-prev");

let currentSlide = 0;



/* MENAMPILKAN SLIDE */

function showSlide(index) {

    slides.forEach((slide) => {

        slide.classList.remove("active");

    });


    dots.forEach((dot) => {

        dot.classList.remove("active");

    });


    slides[index].classList.add("active");

    dots[index].classList.add("active");

}



/* SLIDE BERIKUTNYA */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}



/* SLIDE SEBELUMNYA */

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide =
            slides.length - 1;

    }

    showSlide(currentSlide);

}



/* TOMBOL KANAN */

nextButton.addEventListener(
    "click",
    nextSlide
);



/* TOMBOL KIRI */

prevButton.addEventListener(
    "click",
    previousSlide
);



/* DOT */

dots.forEach((dot, index) => {

    dot.addEventListener(
        "click",
        () => {

            currentSlide = index;

            showSlide(currentSlide);

        }
    );

});



/* OTOMATIS SETIAP 5 DETIK */

setInterval(() => {

    nextSlide();

}, 5000);





/* ==================================================
   HAMBURGER MOBILE
================================================== */

const hamburger =
    document.querySelector(".hamburger");

const mobileMenu =
    document.querySelector(".mobile-menu");


hamburger.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle("open");

        document.body.classList.toggle("menu-open");

    }
);





/* ==================================================
   SUBMENU MOBILE
================================================== */

const mobileDropdownButtons =
    document.querySelectorAll(
        ".mobile-dropdown-button"
    );


mobileDropdownButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const parent =
                button.parentElement;

            parent.classList.toggle("open");

        }
    );

});





/* ==================================================
   TUTUP MOBILE MENU
   SAAT LINK DITEKAN
================================================== */

const mobileLinks =
    document.querySelectorAll(
        ".mobile-menu a"
    );


mobileLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            mobileMenu.classList.remove("open");

            document.body.classList.remove(
                "menu-open"
            );

        }
    );

});





/* ==================================================
   SEARCH SEDERHANA
================================================== */

const searchInput =
    document.querySelector(
        ".search-box input"
    );


const searchButton =
    document.querySelector(
        ".search-box button"
    );


function searchWebsite() {

    const keyword =
        searchInput.value.trim();


    if (keyword === "") {

        return;

    }


    alert(
        'Pencarian untuk "' +
        keyword +
        '" akan dikembangkan pada tahap berikutnya.'
    );

}


searchButton.addEventListener(
    "click",
    searchWebsite
);


searchInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            searchWebsite();

        }

    }
);





/* ==================================================
   NAVBAR ACTIVE
================================================== */

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            navLinks.forEach((item) => {

                item.classList.remove("active");

            });

            link.classList.add("active");

        }
    );

});





/* ==================================================
   PILIHAN BAHASA

   Untuk sekarang baru tampilan pilihan.
   Terjemahan isi website bisa kita buat
   pada tahap berikutnya.
================================================== */

const languageButtons =
    document.querySelectorAll(
        "[data-language]"
    );


languageButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const language =
                button.dataset.language;


            if (language === "id") {

                alert(
                    "Bahasa Indonesia dipilih."
                );

            }

            else if (language === "en") {

                alert(
                    "English language selected."
                );

            }

            else if (language === "jv") {

                alert(
                    "Basa Jawa dipilih."
                );

            }

        }
    );

});