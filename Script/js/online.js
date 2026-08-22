(function () {

    "use strict";

    // ==========================================
    // CLOUDFLARE WORKER ADRESİNİ BURAYA YAZ
    // ==========================================

    const ONLINE_SERVER = "https://viking-online.vikinghotels2022.workers.dev/";

    const countElement = document.getElementById("online-count");

    if (!countElement) {
        return;
    }

    let socket = null;

    // ==========================================
    // SAYACI GÜNCELLE
    // ==========================================

    function updateCount(count) {

        if (typeof count !== "number") {
            return;
        }

        countElement.textContent = count;
    }


    // ==========================================
    // WEBSOCKET BAĞLANTISI
    // ==========================================

    function connect() {

        try {

            socket = new WebSocket(ONLINE_SERVER);

            // Bağlantı başarılı
            socket.addEventListener("open", function () {

                console.log("Anlık ziyaretçi bağlantısı kuruldu.");

            });


            // Sunucudan sayı geldi
            socket.addEventListener("message", function (event) {

                try {

                    const data = JSON.parse(event.data);

                    if (data.type === "online") {

                        updateCount(data.count);

                    }

                } catch (error) {

                    console.error(
                        "Online sayaç verisi okunamadı:",
                        error
                    );

                }

            });


            // Bağlantı kapandı
            socket.addEventListener("close", function () {

                console.log(
                    "Anlık ziyaretçi bağlantısı kapandı."
                );

                updateCount(0);

                // 5 saniye sonra tekrar bağlan
                setTimeout(connect, 5000);

            });


            // Hata
            socket.addEventListener("error", function (error) {

                console.error(
                    "Anlık ziyaretçi bağlantı hatası:",
                    error
                );

            });

        } catch (error) {

            console.error(
                "WebSocket başlatılamadı:",
                error
            );

            setTimeout(connect, 5000);
        }
    }


    // ==========================================
    // SAYFA KAPANIRKEN BAĞLANTIYI KAPAT
    // ==========================================

    window.addEventListener("beforeunload", function () {

        if (socket) {

            socket.close();

        }

    });


    // ==========================================
    // BAŞLAT
    // ==========================================

    connect();

})();
