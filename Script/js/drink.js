const lang = navigator.language.substring(0, 2);

document.querySelectorAll("[data-lang]").forEach(el => {

    if (el.dataset.lang === lang) {
        el.style.display = "block";
    } else {
        el.style.display = "none";
    }

});