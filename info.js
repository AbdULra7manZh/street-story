class StreetInfo {
    constructor(name, city, description, cafes, restaurants, hotels, image, cardColor, mapLink) {
        this.name = name;
        this.city = city;
        this.description = description;
        this.cafes = cafes;
        this.restaurants = restaurants;
        this.hotels = hotels;
        this.image = image;
        this.cardColor = cardColor;
        this.mapLink = mapLink;
    }
}
const streetsInfo = {
    KAR: new StreetInfo(
        "King Abdulaziz Road",
        "Jeddah",
        "A major road connecting north and central Jeddah.",
        "95Celsius, The Earth, Starbucks",
        "Shrimp Zone, TGI Fridays, Olive Garden",
        "Ibis Hotel, Joudyan Hotel, Seafront Hotel",
        "images/KAR.jpg",
        "#8B6B00",
        "https://maps.app.goo.gl/HyNq2Mr66E7wZCcGA?g_st=ic"
    ),

    JCR: new StreetInfo(
        "Jeddah Corniche Road",
        "Jeddah",
        "A famous seaside road along the Red Sea coast.",
        "Dunkin, Caffeine Lab, Costa Coffee",
        "Boston JED, OKTO, Niyyali",
        "The Venue, Hilton, Waldorf Astoria",
        "images/JCR.jpg",
        "#0A4D68",
        "https://maps.app.goo.gl/89RA5ZceaZ4KpPMx7?g_st=ic"
    ),

    PS: new StreetInfo(
        "Palestine Street",
        "Jeddah",
        "A busy commercial street in central Jeddah.",
        "WhiteHeart, J52 Cafe, Talent Cafe",
        "AlBaik, Kudu, Shawarmer",
        "Skoop Hotel, Mirnian Hotel, Odst Hotel",
        "images/PS.jpg",
        "#2E7D32",
        "https://maps.app.goo.gl/1ADoPvARiFDic64a8?g_st=ic"
    )
};