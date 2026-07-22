   /* const lang = navigator.language.substring(0,2);*/

/* === içerik çeviri sistemi === */
document.querySelectorAll("[data-lang]").forEach(el => {

    if(el.dataset.lang === lang){
        el.style.display = "";
    } else {
        el.style.display = "none";
    }

});

    /* === TITLE + FAVICON === */

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

    document.getElementById("page-title").textContent =
    titleMap[lang] || titleMap["en"];

   /* document.getElementById("favicon").href =
    iconMap[lang] || iconMap["en"];*/
