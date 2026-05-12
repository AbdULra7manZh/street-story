function fillStreetCard(markerCode) {
    const street = streetsInfo[markerCode];

    document.getElementById("streetName" + markerCode)
        .setAttribute("value", street.name);

    document.getElementById("streetInfo" + markerCode)
        .setAttribute(
            "value",
            "City: " + street.city +
            "\n\nAbout: " + street.description +
            "\n\n☕ Cafes: " + street.cafes +
            "\n\n🍴 Restaurants: " + street.restaurants +
            "\n\n🏨 Hotels: " + street.hotels
        );

    document.getElementById("streetImage" + markerCode)
        .setAttribute("src", street.image);

    document.getElementById("cardBackground" + markerCode)
        .setAttribute("color", street.cardColor);
}

fillStreetCard("KAR");
fillStreetCard("JCR");
fillStreetCard("PS");

const mapBtn = document.getElementById("mapBtn");
function setupMarkerEvents(markerCode) {

    const marker = document.querySelector(
        `a-marker[url="markers/pattern-${markerCode}.patt"]`
    );

    marker.addEventListener("markerFound", () => {

        const street = streetsInfo[markerCode];

        mapBtn.style.display = "block";
        mapBtn.href = street.mapLink;
    });

    marker.addEventListener("markerLost", () => {

        mapBtn.style.display = "none";
    });
}
setupMarkerEvents("KAR");
setupMarkerEvents("JCR");
setupMarkerEvents("PS");

let zoomLevel = 1;

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("zoomInBtn").addEventListener("click", function () {
        zoomLevel += 0.1;

        document.querySelectorAll(".info-card").forEach(card => {
            card.setAttribute("scale", `${zoomLevel} ${zoomLevel} ${zoomLevel}`);
        });
    });

    document.getElementById("zoomOutBtn").addEventListener("click", function () {
        if (zoomLevel > 0.5) {
            zoomLevel -= 0.1;

            document.querySelectorAll(".info-card").forEach(card => {
                card.setAttribute("scale", `${zoomLevel} ${zoomLevel} ${zoomLevel}`);
            });
        }
    });

});