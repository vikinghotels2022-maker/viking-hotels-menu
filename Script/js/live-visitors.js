import { initializeApp } from
    "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import {
    getDatabase,
    ref,
    set,
    onValue,
    onDisconnect,
    serverTimestamp
} from
    "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";


const firebaseConfig = {

    apiKey:
        "AIzaSyAdZbPZRt9-rlPg8rD8lXxcc7AAzVdGW5w",

    authDomain:
        "viking-live-counter.firebaseapp.com",

    databaseURL:
        "https://viking-live-counter-default-rtdb.europe-west1.firebasedatabase.app",

    projectId:
        "viking-live-counter",

    storageBucket:
        "viking-live-counter.firebasestorage.app",

    messagingSenderId:
        "88222748154",

    appId:
        "1:88222748154:web:26dcb6351a3d404d75a843"
};


const app =
    initializeApp(firebaseConfig);


const database =
    getDatabase(app);


/*
 * Ziyaretçi ID
 *
 * Aynı tarayıcıda hangi sayfaya
 * girilirse girilsin aynı ID kullanılır.
 */

let visitorId =
    localStorage.getItem(
        "vikingVisitorId"
    );


if (!visitorId) {

    visitorId =
        crypto.randomUUID();

    localStorage.setItem(
        "vikingVisitorId",
        visitorId
    );
}


/*
 * Firebase ziyaretçi kaydı
 */

const visitorRef =
    ref(
        database,
        "online/" + visitorId
    );


/*
 * Firebase bağlantı durumu
 */

const connectedRef =
    ref(
        database,
        ".info/connected"
    );


onValue(
    connectedRef,
    async (snapshot) => {

        if (snapshot.val() !== true) {
            return;
        }


        /*
         * Kullanıcı bağlantısı koparsa
         * Firebase kaydı otomatik siler.
         */

        await onDisconnect(
            visitorRef
        ).remove();


        /*
         * Aktif ziyaretçiyi kaydet.
         */

        await set(
            visitorRef,
            {
                online: true,

                lastSeen:
                    serverTimestamp()
            }
        );

    }
);


/*
 * Aktif ziyaretçi sayısını takip et
 */

const onlineRef =
    ref(
        database,
        "online"
    );


onValue(
    onlineRef,
    (snapshot) => {

        const data =
            snapshot.val();


        let count = 0;


        if (data) {

            count =
                Object.keys(data).length;

        }


        /*
         * Sayacı sayfaya yaz
         */

        const counter =
            document.getElementById(
                "live-visitors-count"
            );


        if (counter) {

            counter.textContent =
                count;

        }

    }
);
