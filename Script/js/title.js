(() => {
    const browserLang = navigator.language.substring(0, 2);
    const lang = ["tr", "en", "ru"].includes(browserLang) ? browserLang : "tr";

    document.querySelectorAll("[data-lang]").forEach(el => {
        el.style.display = el.dataset.lang === lang ? "inline" : "none";
    });

    const titleMap = {
        tr: "Viking Hotels | İçecek Menüsü",
        en: "Viking Hotels | Beverage Menu",
        ru: "Viking Hotels | Меню напитков"
    };

    const iconMap = {
        tr: "logo-tr.png",
        en: "logo-en.png",
        ru: "logo-ru.png"
    };

    const pageTitle = document.getElementById("page-title");

    if (pageTitle) {
        pageTitle.textContent = titleMap[lang] || titleMap.tr;
    }

    const favicon = document.getElementById("favicon");

    if (favicon) {
        favicon.href = iconMap[lang] || iconMap.tr;
    }
})();
