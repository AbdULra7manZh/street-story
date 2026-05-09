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