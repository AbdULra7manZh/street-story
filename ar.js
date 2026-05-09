function fillStreetCard(markerCode) {
    const street = streetsInfo[markerCode];

    document.getElementById("streetName" + markerCode)
        .setAttribute("value", street.name);

    document.getElementById("streetInfo" + markerCode)
        .setAttribute(
            "value",
            "City: " + street.city +
            "\n\nAbout: " + street.description +
            "\n\nFamous For: " + street.famousFor +
            "\n\nLandmark: " + street.landmark
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