const lang = navigator.language || navigator.userLanguage;

if (lang.startsWith('ru')) {

    document.getElementById('welcome').innerText =
        'Добро пожаловать';

    document.getElementById('hookah').innerText =
        'Кальян';

    document.getElementById('alcohol').innerText =
        'Алкогольные напитки';

    document.getElementById('soft').innerText =
        'Безалкогольные напитки';

    document.getElementById('hot').innerText =
        'Горячие напитки';

}
else if (lang.startsWith('en')) {

    document.getElementById('welcome').innerText =
        'Welcome';

    document.getElementById('hookah').innerText =
        'Hookah Menu';

    document.getElementById('alcohol').innerText =
        'Alcoholic Drinks';

    document.getElementById('soft').innerText =
        'Non-Alcoholic Drinks';

    document.getElementById('hot').innerText =
        'Hot Drinks';

}