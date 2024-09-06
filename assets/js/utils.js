// utils.js

// Utility Functions
function isPhone() {
    return window.innerWidth <= 600;
}

function getGreeting() {
    const hour = new Date().getHours();
    return hour < 12
        ? "Good Morning"
        : hour < 18
            ? "Good Afternoon"
            : "Good Evening";
}

// UI Setup Functions
function setBackgroundImage() {
    const container = document.getElementById("backgroundImageContainer");
    if (!container) return;

    const images = isPhone()
        ? ["assets/images/img/bg1.webp", "assets/images/img/bg2.webp"]
        : ["assets/images/img/bg2.webp", "assets/images/img/bg1.webp"];

    let currentIndex = 0;
    function changeImage() {
        container.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    changeImage();
    setInterval(changeImage, 8000);
}

function setupNavbarToggle() {
    const toggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (toggler && navbarCollapse) {
        toggler.addEventListener("click", () => {
            navbarCollapse.classList.toggle("show");
        });

        document.querySelectorAll(".navbar-nav a").forEach((link) => {
            link.addEventListener("click", () => {
                navbarCollapse.classList.remove("show");
            });
        });
    }
}

function setupChangingText() {
    const words = ["Welcome To TypeBlitz"];
    const changingText = document.getElementById("changing-text");
    if (!changingText) return;

    let index = 0;
    setInterval(() => {
        const greeting = getGreeting();
        changingText.textContent = `${greeting}, ${words[index]}`;
        index = (index + 1) % words.length;
    }, 5200);
}

function setupPopupAndScroll() {
    const popupContainer = document.getElementById("popup");
    const closePopupButton = document.getElementById("closePopup");
    const scrollBtn = document.getElementById("scrollBtn");

    if (popupContainer && closePopupButton) {
        setTimeout(() => {
            popupContainer.style.display = "block";
        }, 8000);

        closePopupButton.addEventListener("click", () => {
            popupContainer.style.display = "none";
        });
    }

    if (scrollBtn) {
        document.addEventListener("contextmenu", (e) => {
            e.preventDefault();
        });

        window.addEventListener("scroll", () => {
            scrollBtn.style.display =
                window.scrollY > window.innerHeight * 0.2 ? "block" : "none";
            scrollBtn.classList.toggle(
                "up",
                window.scrollY + window.innerHeight >= document.body.scrollHeight
            );
        });

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({
                top: scrollBtn.classList.contains("up")
                    ? 0
                    : document.body.scrollHeight,
                behavior: "smooth",
            });
        });
    }
}

// System Functions
function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker
                .register("/service-worker.js", { scope: "/" })
                .then((registration) => {
                    registration.update();
                    registration.onupdatefound = () => {
                        const newWorker = registration.installing;
                        newWorker.onstatechange = () => {
                            if (
                                newWorker.state === "installed" &&
                                navigator.serviceWorker.controller
                            ) {
                                window.location.reload();
                            }
                        };
                    };
                    console.log(
                        "Service worker registered with scope:",
                        registration.scope
                    );
                })
                .catch((error) => {
                    console.error("Service worker registration failed:", error);
                });
        });
    }
}

function disableF12Key() {
    document.addEventListener("keydown", (event) => {
        if (event.keyCode === 123) {
            event.preventDefault();
        }
    });
}

function setupPreloader() {
    window.addEventListener("load", () => {
        const preloader = document.querySelector(".preloader");
        if (preloader) {
            preloader.style.display = "none";
        }
    });
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    setBackgroundImage();
    setupNavbarToggle();
    setupChangingText();
    setupPopupAndScroll();
    registerServiceWorker();
    disableF12Key();
    setupPreloader();
    window.addEventListener("resize", setBackgroundImage);
});
