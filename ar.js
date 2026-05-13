let streetsInfo = {};
let currentLang = "en";

const labels = {
    en: {
        city: "City",
        about: "About",
        cafes: "☕ Cafes",
        restaurants: "🍴 Restaurants",
        hotels: "🏨 Hotels"
    },
    ar: {
        city: "المدينة",
        about: "نبذة",
        cafes: "☕ المقاهي",
        restaurants: "🍴 المطاعم",
        hotels: "🏨 الفنادق"
    }
};

fetch("streets.json")
    .then(response => response.json())
    .then(data => {
        streetsInfo = data;

        fillStreetCard("KAR");
        fillStreetCard("JCR");
        fillStreetCard("PS");

        setupMarkerEvents("KAR");
        setupMarkerEvents("JCR");
        setupMarkerEvents("PS");
    });

function fillStreetCard(markerCode) {
    const streetData = streetsInfo[markerCode];
    const street = streetData[currentLang];

    const englishCard = document.getElementById("infoCard" + markerCode);
    const arabicCard = document.getElementById("arabicCard" + markerCode);

    if (currentLang === "ar") {
        englishCard.setAttribute("visible", "false");
        arabicCard.setAttribute("visible", "true");

        document.getElementById("arabicStreetImage" + markerCode)
            .setAttribute("src", streetData.image);

        const arabicText =
            street.name +
            "\n\n" +
            labels.ar.city + ": " + street.city +
            "\n\n" +
            labels.ar.about + ": " + street.description +
            "\n\n" +
            labels.ar.cafes + ": " + street.cafes +
            "\n\n" +
            labels.ar.restaurants + ": " + street.restaurants +
            "\n\n" +
            labels.ar.hotels + ": " + street.hotels;

        document.getElementById("arabicText" + markerCode)
            .setAttribute("src", createArabicTextImage(arabicText));

    } else {
        englishCard.setAttribute("visible", "true");
        arabicCard.setAttribute("visible", "false");

        document.getElementById("streetName" + markerCode)
            .setAttribute("value", street.name);

        document.getElementById("streetInfo" + markerCode)
            .setAttribute(
                "value",
                labels.en.city + ": " + street.city +
                "\n\n" + labels.en.about + ": " + street.description +
                "\n\n" + labels.en.cafes + ": " + street.cafes +
                "\n\n" + labels.en.restaurants + ": " + street.restaurants +
                "\n\n" + labels.en.hotels + ": " + street.hotels
            );

        document.getElementById("streetImage" + markerCode)
            .setAttribute("src", streetData.image);

        document.getElementById("cardBackground" + markerCode)
            .setAttribute("color", streetData.cardColor);
    }
}

const mapBtn = document.getElementById("mapBtn");
const langBtn = document.getElementById("langBtn");

function setupMarkerEvents(markerCode) {
    const marker = document.querySelector(
        `a-marker[url="markers/pattern-${markerCode}.patt"]`
    );

    marker.addEventListener("markerFound", () => {
        const streetData = streetsInfo[markerCode];

        mapBtn.style.display = "block";
        mapBtn.href = streetData.mapLink;

        langBtn.style.display = "block";
    });

    marker.addEventListener("markerLost", () => {
        mapBtn.style.display = "none";
        langBtn.style.display = "none";
    });
}

let zoomLevel = 1;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("zoomInBtn")
        .addEventListener("click", function () {
            zoomLevel += 0.1;

            document.querySelectorAll(".info-card")
                .forEach(card => {
                    card.setAttribute(
                        "scale",
                        `${zoomLevel} ${zoomLevel} ${zoomLevel}`
                    );
                });
        });

    document.getElementById("zoomOutBtn")
        .addEventListener("click", function () {
            if (zoomLevel > 0.5) {
                zoomLevel -= 0.1;

                document.querySelectorAll(".info-card")
                    .forEach(card => {
                        card.setAttribute(
                            "scale",
                            `${zoomLevel} ${zoomLevel} ${zoomLevel}`
                        );
                    });
            }
        });
});

langBtn.addEventListener("click", function () {
    if (currentLang === "en") {
        currentLang = "ar";
        langBtn.textContent = "English";
    } else {
        currentLang = "en";
        langBtn.textContent = "العربية";
    }

    fillStreetCard("KAR");
    fillStreetCard("JCR");
    fillStreetCard("PS");
});

function createArabicTextImage(text) {
    const canvas = document.createElement("canvas");
    canvas.width = 900;
    canvas.height = 760;

    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "bold 34px Arial";
    ctx.textAlign = "right";
    ctx.direction = "rtl";

    const lines = text.split("\n");
    let y = 65;

    lines.forEach(line => {
        ctx.fillText(line, 850, y);
        y += 55;
    });

    return canvas.toDataURL("image/png");
}