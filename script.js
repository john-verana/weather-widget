document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("weather-0");

    const cities = [
        {name: "Las Pinas, PH", temp: 29, condition: "Cloudy", icon: "☁️" },
        {name: "Paranaque, PH", temp: 31, condition: "Sunny", icon: "☀️" },
        {name: "Cavite, PH", temp: 27, condition: "Rain", icon: "🌧️" },
    ];

    let i = 0;

    function render(city) {
        el.textContent =`${city.name}: ${city.temp}: ${city.condition}: ${city.icon}`;
    }

    render(cities[i]);

    setInterval(() => {
        i = (i + 1) % cities.length;
        render(cities[i]);
    }, 5000);
});