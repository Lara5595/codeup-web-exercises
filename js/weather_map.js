$(function (){

// This creates the map
    mapboxgl.accessToken = MAPBOX_API_TOKEN;  //we gave our token a var MAPBOX on keys.js
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-99.48962, 29.42692],
        zoom: 2,
        projection: 'globe'
    });


    // I got the code from  https://docs.mapbox.com/mapbox-gl-js/example/drag-a-marker/ that creates a draggable marker
    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-99.48962, 29.42692])
        .addTo(map);

    function onDragEnd() {
        const lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
         // created coords so we can call it on updateWeather
         let coords = [
             `${lngLat.lng}`,
             `${lngLat.lat}`
         ]
        updateWeather(coords)

    }
    marker.on('dragend', onDragEnd);
    map.setCenter([-99.48962, 29.42692]);

    // This changes  the type of map
    const layerList = document.getElementById('menu');
    const inputs = layerList.getElementsByTagName('input');

    for (const input of inputs) {
        input.onclick = (layer) => {
            const layerId = layer.target.id;
            map.setStyle('mapbox://styles/mapbox/' + layerId);
        };
    }

    // zooms in to your location
    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
    });

// Add geolocate control to the map.
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
// When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        })
    );


    //^^




// ^^

    // date format
    function appendLeadingZeroes(n){
        if(n <= 9){
            return "0" + n;
        }
        return n;
    }

    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    function formatTime(timeStamp){
        let dateTime = new Date(timeStamp * 1000);
        let year = dateTime.getFullYear();
        let month = months[dateTime.getMonth()];
        let day = dateTime.getDate();
        let hour = appendLeadingZeroes(dateTime.getHours());
        let minutes = appendLeadingZeroes(dateTime.getMinutes());
        let seconds = appendLeadingZeroes(dateTime.getSeconds());
        let formattedDateTime = month + " " + day + " " + year + " " + hour + ":" + minutes + ":" + seconds;
        return formattedDateTime;
    }
    // date format ^^^

    function windCardinalDirection(degrees){
        let cardinalDirection = '';
        if ((degrees > 348.75 && degrees <= 360) || (degrees >=0 && degrees <= 11.25)){
            cardinalDirection = "N";
        } else if (degrees > 11.25 && degrees  <= 33.75) {
            cardinalDirection = "NNE";
        } else if (degrees > 33.75 && degrees <= 56.25) {
            cardinalDirection = "NE";
        } else if (degrees > 56.25 && degrees <= 78.75) {
            cardinalDirection = "ENE";
        } else if (degrees > 78.75 && degrees <= 101.25) {
            cardinalDirection = "E";
        } else if (degrees > 101.25 && degrees <= 123.75) {
            cardinalDirection = "ESE";
        } else if (degrees > 123.75 && degrees <= 146.25) {
            cardinalDirection = "SE";
        } else if (degrees > 146.25 && degrees <= 168.75) {
            cardinalDirection = "SSE";
        } else if (degrees > 168.75 && degrees <= 191.25) {
            cardinalDirection = "S";
        } else  if (degrees > 191.25 && degrees <= 213.75) {
            cardinalDirection = "SSW";
        } else if (degrees > 213.75 && degrees <= 236.25)  {
            cardinalDirection = "SW";
        } else if (degrees > 236.25 && degrees <= 258.75) {
            cardinalDirection = "WSW";
        } else if (degrees > 258.75 && degrees <= 281.25) {
            cardinalDirection = "W";
        } else if (degrees > 281.25 && degrees <= 303.75) {
            cardinalDirection = "WNW";
        } else if (degrees > 303.75 && degrees <= 326.25) {
            cardinalDirection = "NW";
        } else if (degrees > 326.75 && degrees <= 348.75) {
            cardinalDirection = "NNW";
        }
        return cardinalDirection;
    }

    // weather
    // $.get("http://api.openweathermap.org/data/2.5/weather", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat: 29.423017,
    //     lon: -98.48527,
    //     units: "imperial"
    // }).done(function(data) {
    //     console.log(data);
    //     console.log(data.main.temp);
    //     console.log(data.wind.speed);
    //     console.log(windCardinalDirection(data.wind.deg));
    //     $('body').append(`<p>The current temperature is ${data.main.temp}</p>`)
    // });
    //weather ^^^^



    // forecast
    // $.get("http://api.openweathermap.org/data/2.5/forecast", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat:    29.423017,
    //     lon:   -98.48527,
    //     units: "imperial"
    // }).done(function(data) {
    //     console.log(data)
    //     console.log(data.city.population);
    //     data.list.forEach((forecast, index) => {
    //         if (index < 5){
    //             console.log(forecast);
    //         }
    //     })
    // });
//  forecast ^^

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function namedDayFromDay(timeStamp){
        let dateTime = new Date(timeStamp * 1000);
        return daysOfWeek[dateTime.getDay()];
    }

    // This makes the cards
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
        console.log(data.list[0].weather[0].description)
        // logg current city name
        $("#currentCity").text(`Current City: ${data.city.name}`);

        data.list.forEach((forecast, i) => {
            if(i % 8 == 0) {
                $(`#cards`).append(`<div class="card-header col-2 mx-2 border"> <p class="date">${data.list[i].dt_txt.split(" ")[0]}</p>
                 <p class="temp"><img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png"><br> ${data.list[i].main.temp}&#8457 / ${data.list[i].main.temp}&#8457;</p><hr>
                 <p class="description">Description: ${data.list[i].weather[0].description}</p><hr>
                 <p class="humidity">Humidity: ${data.list[i].main.humidity}</p><hr>
                 <p class="wind">Wind: ${data.list[i].wind.speed}</p><hr>
                 <p class="preassure">Preassure: ${data.list[i].main.pressure}</p></div>  `);
            }

        })
    });
    // ^

    // I got this function from mapbox lecture and it helps you make your button to find a place
            document.getElementById("setMarkerButton").addEventListener('click', function (e) {
                e.preventDefault();
                const address = document.getElementById("form1").value;
                geocode(address, MAPBOX_API_TOKEN).then(function (coordinates) {
                    console.log(coordinates);
                    const userMarker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
                    map.setCenter(coordinates);
                    updateWeather(coordinates);
                });
            })

// ^^^





// This creates new cards for when you search a new place
    function printWeather(data){
                $(`#cards`).empty();
        data.list.forEach((forecast, i) => {
            if(i % 8 == 0) {
                $(`#cards`).append(`<div class="card-header col-2 mx-2 border"> <p class="date">${data.list[i].dt_txt.split(" ")[0]}</p>
                 <p class="temp"><img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png"><br>${data.list[i].main.temp}&#8457 / ${data.list[i].main.temp}&#8457;</p><hr>
                 <p class="description">Description: ${data.list[i].weather[0].description}</p><hr>
                 <p class="humidity">Humidity: ${data.list[i].main.humidity}</p><hr>
                 <p class="wind">Wind: ${data.list[i].wind.speed}</p><hr>
                 <p class="preassure">Preassure: ${data.list[i].main.pressure}</p></div>  `);
            }
        });
    }


// this updates current city
    function updateWeather(coordinates){
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat: coordinates[1],
            lon: coordinates[0],
            units: "imperial"
        }).done(function (data){
            $("#currentCity").text(`Current City: ${data.city.name}`);

            printWeather(data);

        })
    }







})