let streetsInfo = {};
let currentLang = "en";
let openedMarkerCode = null;

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

const mapBtn = document.getElementById("mapBtn");
const langBtn = document.getElementById("langBtn");
const closeCardBtn = document.getElementById("closeCardBtn");

const htmlInfoCard = document.getElementById("htmlInfoCard");
const htmlStreetName = document.getElementById("htmlStreetName");
const htmlStreetInfo = document.getElementById("htmlStreetInfo");
const htmlStreetImage = document.getElementById("htmlStreetImage");

fetch("streets.json")
    .then(response => response.json())
    .then(data => {
        streetsInfo = data;

        hideAllAframeCards();

        setupMarkerEvents("KAR");
        setupMarkerEvents("JCR");
        setupMarkerEvents("PS");
    });

function setupMarkerEvents(markerCode) {
    const marker = document.querySelector(
        `a-marker[url="markers/pattern-${markerCode}.patt"]`
    );

    marker.addEventListener("markerFound", () => {
        openedMarkerCode = markerCode;

        hideAllAframeCards();
        showHtmlCard(markerCode);

        const streetData = streetsInfo[markerCode];

        mapBtn.style.display = "block";
        mapBtn.href = streetData.mapLink;

        langBtn.style.display = "block";
        closeCardBtn.style.display = "block";
    });

    marker.addEventListener("markerLost", () => {
        // لا تحطين هنا أي كود إخفاء
        // الكرت HTML وراح يظل ثابت حتى لو شلتي صورة الماركر
    });
}

function showHtmlCard(markerCode) {
    const streetData = streetsInfo[markerCode];
    const street = streetData[currentLang];
    const label = labels[currentLang];

    htmlStreetName.textContent = street.name;

    htmlStreetInfo.textContent =
        label.city + ": " + street.city +
        "\n\n" + label.about + ": " + street.description +
        "\n\n" + label.cafes + ": " + street.cafes +
        "\n\n" + label.restaurants + ": " + street.restaurants +
        "\n\n" + label.hotels + ": " + street.hotels;

    htmlStreetImage.src = streetData.image;

    if (currentLang === "ar") {
        htmlInfoCard.style.direction = "rtl";
        htmlInfoCard.style.textAlign = "right";
        langBtn.textContent = "English";
    } else {
        htmlInfoCard.style.direction = "ltr";
        htmlInfoCard.style.textAlign = "left";
        langBtn.textContent = "العربية";
    }

    htmlInfoCard.style.display = "block";
}

function hideAllAframeCards() {
    ["KAR", "JCR", "PS"].forEach(code => {
        const englishCard = document.getElementById("infoCard" + code);
        const arabicCard = document.getElementById("arabicCard" + code);

        if (englishCard) {
            englishCard.setAttribute("visible", "false");
        }

        if (arabicCard) {
            arabicCard.setAttribute("visible", "false");
        }
    });
}

closeCardBtn.addEventListener("click", function () {
    htmlInfoCard.style.display = "none";

    openedMarkerCode = null;

    mapBtn.style.display = "none";
    langBtn.style.display = "none";
    closeCardBtn.style.display = "none";
});

langBtn.addEventListener("click", function () {
    if (!openedMarkerCode) return;

    if (currentLang === "en") {
        currentLang = "ar";
    } else {
        currentLang = "en";
    }

    showHtmlCard(openedMarkerCode);
});

let zoomLevel = 1;

document.addEventListener("DOMContentLoaded", function () {
    const zoomInBtn = document.getElementById("zoomInBtn");
    const zoomOutBtn = document.getElementById("zoomOutBtn");

    zoomInBtn.addEventListener("click", function () {
        zoomLevel += 0.1;
        htmlInfoCard.style.transform = `translateX(-50%) scale(${zoomLevel})`;
    });

    zoomOutBtn.addEventListener("click", function () {
        if (zoomLevel > 0.5) {
            zoomLevel -= 0.1;
            htmlInfoCard.style.transform = `translateX(-50%) scale(${zoomLevel})`;
        }
    });
});