class StreetInfo {
    constructor(name, city, description, famousFor, landmark, image, cardColor, mapLink) {
        this.name = name;
        this.city = city;
        this.description = description;
        this.famousFor = famousFor;
        this.landmark = landmark;
        this.image = image;
        this.cardColor = cardColor;
        this.mapLink = mapLink;
    }
}
const streetsInfo = {
    KAR: new StreetInfo(
        "King Abdulaziz Road",
        "Jeddah",
        "One of the most important main roads in Jeddah, connecting wide parts of the city.",
        "Near the waterfront, hotels, malls, and restaurants.",
        "Jeddah Waterfront",
        "images/KAR.jpg",
        "#8B6B00",
        "https://maps.app.goo.gl/HyNq2Mr66E7wZCcGA?g_st=ic"
    ),

    JCR: new StreetInfo(
        "Jeddah Corniche Road",
        "Jeddah",
        "A famous tourist road that extends along the Red Sea coast.",
        "Sea views, entertainment areas, parks, and cafes.",
        "King Fahd Fountain",
        "images/JCR.jpg",
        "#0A4D68",
        "https://maps.app.goo.gl/89RA5ZceaZ4KpPMx7?g_st=ic"
    ),

    PS: new StreetInfo(
        "Palestine Street",
        "Jeddah",
        "A lively commercial street known for shops, restaurants, and services.",
        "Active commercial area with restaurants, cafes, and stores.",
        "Central Jeddah",
        "images/PS.jpg",
        "#2E7D32",
        "https://maps.app.goo.gl/1ADoPvARiFDic64a8?g_st=ic"
    )
};