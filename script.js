const apiKey = "1df0058054000eefc2fbfe9118721770";
document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("weather-0");

    const cities = ["Las Pinas,PH", "Paranaque, PH", "Cavite, PH"];
    let i = 0;

    async function render(cityName) {
        el.textContent = "Loading...";
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
            );
            const data = await res.json();

            const temp = Math.round(data.main.temp);
            const condition = data.weather[0].main;
            const icon = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;

            el.innerHTML = `
            <div>
          <img src="${iconUrl}" alt="${condition}">
          <p>${data.name}: ${temp}°C · ${condition}</p>
        </div>
        `;
        } catch (error) {
            el.textContent = "Error loading data";
            console.error(error);
        }
    }

    render(cities[i]);

    // Rotate every 5 seconds 
    setInterval(() => {
        i = (i + 1) % cities.length;
        render(cities[i]);
    }, 3000);
});