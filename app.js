window.addEventListener('load', () => {
    let long
    let lat
    let temperatureDescription = document.querySelector('.temperature-description')
    let temperatureDegree = document.querySelector('.temperature-degree')
    let locationTimezon = document.querySelector('.location-timezone')


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude
            const api = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9e103a3c9907677e215a32d27b95bcff/${lat},${long}`
            fetch(api).then(res => res.json()).then(data => {
                console.log(data)
                const {
                    temperature,
                    summary
                } = data.currently

                temperatureDegree.textContent = temperature
            })
        })
    } else {
        h1.textContent = "u fucuked up "
    }
})