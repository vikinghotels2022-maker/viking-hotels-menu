const lang = navigator.language.substring(0, 2);

if (lang === "ru") {

    document.getElementById("welcome").textContent =
        "Добро пожаловать";

    document.getElementById("subtitle").textContent =
        "Меню напитков Viking Hotels";

    document.getElementById("alcohol-title").textContent =
        "Алкогольные напитки и коктейли";

    document.getElementById("alcohol-desc").textContent =
        "Премиальные напитки";

    document.getElementById("soft-title").textContent =
        "Безалкогольные напитки";

    document.getElementById("soft-desc").textContent =
        "Свежие и прохладительные напитки";

    document.getElementById("hot-title").textContent =
        "Горячие напитки";

    document.getElementById("hot-desc").textContent =
        "Турецкий кофе, эспрессо, латте, капучино и травяные чаи";

    document.getElementById("hookah-title").textContent =
        "Кальян";

    document.getElementById("hookah-desc").textContent =
        "Особые ароматы, премиальный табак и атмосфера лаунжа";
}

else if (lang === "en") {

    document.getElementById("welcome").textContent =
        "Welcome";

    document.getElementById("subtitle").textContent =
        "Viking Hotels Beverage Menu";

    document.getElementById("alcohol-title").textContent =
        "Alcoholic Drinks & Cocktails";

    document.getElementById("alcohol-desc").textContent =
        "Premium beverage selection";

    document.getElementById("soft-title").textContent =
        "Non-Alcoholic Drinks";

    document.getElementById("soft-desc").textContent =
        "Fresh and soft drinks";

    document.getElementById("hot-title").textContent =
        "Hot Drinks";

    document.getElementById("hot-desc").textContent =
        "Turkish coffee, espresso, latte, cappuccino and herbal teas";

    document.getElementById("hookah-title").textContent =
        "Hookah Menu";

    document.getElementById("hookah-desc").textContent =
        "Special flavors, premium tobacco and lounge experience";
}
