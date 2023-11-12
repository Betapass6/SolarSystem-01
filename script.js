const sun = document.querySelector('.sun');
const planets = document.querySelectorAll('.planet');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close-button');

const centerX = sun.offsetLeft + sun.offsetWidth / 2;
const centerY = sun.offsetTop + sun.offsetHeight / 2;

const planetData = [
    { radius: 100, speed: 0.02, description: "The closest planet to the sun." },
    { radius: 150, speed: 0.009, description: "Named after the Roman goddess of love and beauty." },
    { radius: 200, speed: 0.007, description: "Our home planet." },
    { radius: 250, speed: 0.005, description: "The red planet." },
    { radius: 300, speed: 0.0003, description: "The largest planet in our solar system." },
    { radius: 350, speed: 0.0005, description: "Known for its iconic rings. (Sorry for missing ring, I'm confused about how to add it)" },
    { radius: 400, speed: 0.0001, description: "A gas giant with a blue-green atmosphere." },
    { radius: 450, speed: 0.00008, description: "A cold and distant ice giant." },
];
let angles = Array.from({ length: planetData.length }, () => 0);
function animatePlanets() {
    planets.forEach((planet, index) => {
        const radius = planetData[index].radius;
        const speed = planetData[index].speed;

        const x = centerX + radius * Math.cos(angles[index]);
        const y = centerY + radius * Math.sin(angles[index]);
        
        planet.style.left = x - planet.offsetWidth / 2 + 'px';
        planet.style.top = y - planet.offsetHeight / 2 + 'px';

        angles[index] += speed;
        
    });
    requestAnimationFrame(animatePlanets);
}
animatePlanets();

const sunDescription = "The star at the center of our solar system.";
planets.forEach((planet, index) => {
    planet.addEventListener('click', function () {
        const planetImageSrc = `map${index + 1}.jpg`;
        const planetDescription = planetData[index].description;
        showPopup(planetImageSrc, planetDescription);
    });
});
document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});
menuToggle.addEventListener('click', function () {
    menu.classList.toggle('show');
    menuToggle.classList.toggle('open');
});
closeButton.addEventListener('click', function () {
    menu.classList.remove('show');
    menuToggle.classList.remove('open');
});
function showPopup(imageSrc, description) {
    document.querySelector('.popup .image').style.backgroundImage = `url(${imageSrc})`;
    const popupText = document.querySelector('.popup .right-section p');
    if (description) {
        popupText.textContent = description;
    } else {
        popupText.textContent = sunDescription;
    }
    document.getElementById('popup').style.display = 'block';
}