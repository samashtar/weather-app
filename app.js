window.addEventListener('load', () => {
    let long
    let lat
    let temperatureDescription = document.querySelector('.temperature-description')
    let temperatureDegree = document.querySelector('.temperature-degree')
    let locationTimezone = document.querySelector('.location-timezone')

    // make sure the cors server is running 
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude
            const api = `http://localhost:8080/https://api.darksky.net/forecast/9e103a3c9907677e215a32d27b95bcff/${lat},${long}`
            fetch(api).then(res => res.json()).then(data => {
                const {
                    temperature,
                    summary,
                    icon
                } = data.currently
                temperatureDegree.textContent = Math.floor(temperature)
                temperatureDescription.textContent = summary
                locationTimezone.textContent = data.timezone
                setIcons(icon, document.querySelector('.icon'))
            })
        })
    } else {
        h1.textContent = "u fucuked up "
    }


    function setIcons(icon, iconID) {
        const skycons = new Skycons({
            color: "white"
        })
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play()
        return skycons.set(iconID, Skycons[currentIcon])
    }
})