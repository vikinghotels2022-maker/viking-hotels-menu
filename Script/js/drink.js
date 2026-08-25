(() => {
    const browserLang = navigator.language.substring(0, 2);
    const lang = ["tr", "en", "ru"].includes(browserLang) ? browserLang : "tr";

    document.querySelectorAll("[data-lang]").forEach(el => {
        el.style.display = el.dataset.lang === lang ? "inline" : "none";
    });
})();
