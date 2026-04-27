const homeImages = [
    "video/video1.mp4"
];
const loginImages = [
    "images/login1.jpg"
];
function startSlideshow(selector, images, intervalTime = 5000) {
    const section = document.querySelector(selector);
    if (!section) return;
    let index = 0;
    function changeBackground() {
        section.style.opacity = 0;
        setTimeout(() => {
            section.style.backgroundImage = `url(${images[index]})`;
            section.style.opacity = 1;
            index = (index + 1) % images.length;
        }, 1000);
    }
    changeBackground();
    setInterval(changeBackground, intervalTime);
}


const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const message = document.getElementById("loginMessage");

        if (email === "" || password === "") {
            message.textContent = "Please fill in all fields.";
            message.style.color = "red";
        } else if (password.length < 8) {
            message.textContent = "Password must be at least 8 characters.";
            message.style.color = "red";
        } else {
            message.textContent = "Login successful!";
            message.style.color = "green";
        }
    });
}


const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        const message = document.getElementById("signupMessage");
        if (fullname === "" || email === "" || password === "" || confirmPassword === "") {
            message.textContent = "Please fill in all fields.";
            message.style.color = "red";
        } else if (password.length < 8) {
            message.textContent = "Password must be at least 8 characters.";
            message.style.color = "red";
        } else if (password !== confirmPassword) {
            message.textContent = "Passwords do not match.";
            message.style.color = "red";
        } else {
            message.textContent = "Sign up successful!";
            message.style.color = "green";
        }
    });
}


const stories = [
    {
        image: "images/street1.jpg",
        title: "King Fahd Road",
        description: "Named after King Fahd, one of Saudi Arabia’s most influential leaders."
    },
    {
        image: "images/street2.jpg",
        title: "Prince Sultan Street",
        description: "Named after Prince Sultan, known for his role in national development."
    },
    {
        image: "images/street3.jpg",
        title: "Palestine Street",
        description: "A symbolic street name that reflects cultural and historical significance."
    }
];


let currentStoryIndex = 0;
const nextStoryBtn = document.getElementById("nextStoryBtn");
if (nextStoryBtn) {
    nextStoryBtn.addEventListener("click", function () {
        currentStoryIndex++;

        if (currentStoryIndex >= stories.length) {
            currentStoryIndex = 0;
        }
        document.getElementById("streetImage").src = stories[currentStoryIndex].image;
        document.getElementById("streetTitle").textContent = stories[currentStoryIndex].title;
        document.getElementById("streetDescription").textContent = stories[currentStoryIndex].description;
    });
}


const themeBtn = document.getElementById("themeBtn");
const dynamicStorySection = document.querySelector(".dynamic-story");
let isDark = false; 
if (themeBtn && dynamicStorySection) {
    themeBtn.addEventListener("click", function () {
        if (!isDark) {
            dynamicStorySection.style.backgroundColor = "#0f172a";
            dynamicStorySection.style.color = "white";
            document.getElementById("streetTitle").style.color = "#fbbf24";
            document.getElementById("streetDescription").style.color = "white";
            themeBtn.style.backgroundColor = "#fbbf24";
            themeBtn.style.color = "#0f172a";
            isDark = true;
        } else {
            dynamicStorySection.style.backgroundColor = "#f8fafc";
            dynamicStorySection.style.color = "#0f172a";
            document.getElementById("streetTitle").style.color = "#0f172a";
            document.getElementById("streetDescription").style.color = "#475569";
            themeBtn.style.backgroundColor = "#0f172a";
            themeBtn.style.color = "white";
            isDark = false;
        }
    });
}


const streetCards = [
    {
        name: "King Fahd Road",
        description: "Named after King Fahd, one of Saudi Arabia’s most influential leaders."
    },
    {
        name: "Prince Sultan Street",
        description: "Named after Prince Sultan, known for his role in national development."
    },
    {
        name: "Palestine Street",
        description: "A symbolic name reflecting cultural and historical significance."
    }
];
const dynamicCards = document.getElementById("dynamicCards");
if (dynamicCards) {
    streetCards.forEach(function(street) {
        dynamicCards.innerHTML += `
            <div class="card">
                <h3>${street.name}</h3>
                <p>${street.description}</p>
            </div>
        `;
    });
}
