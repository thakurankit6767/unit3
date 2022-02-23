//getting device location by default from users device if location is on or ask for location if location is not on and then get location from
let lat;
let lon;
const successCallback = function (position) {
  initMap(position.coords.latitude, position.coords.longitude);
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  // console.log(lat, lon)
  getWeather();
  getWeekForcast();
};
const errorCallback = function (error) {
  // console.log(error);
  locationError();
  initMap(27.8913, 78.0792);
};
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
//End of getting device location.

//Starting of MAP Part.
//map.js

//Set up some of our variables.
var map; //Will contain map object.
var marker = false; ////Has the user plotted their location marker?

//Function called to initialize / create the map.
//This is called when the page has loaded.
function initMap(lat, long) {
  //The center location of our map.
  var centerOfMap = new google.maps.LatLng(lat, long);

  //Map options.
  var options = {
    center: centerOfMap, //Set center.
    zoom: 5, //The zoom value.
  };

  //Create the map object.
  map = new google.maps.Map(document.getElementById("map"), options);

  //Listen for any clicks on the map.
  google.maps.event.addListener(map, "click", function (event) {
    //Get the location that the user clicked.
    var clickedLocation = event.latLng;
    //If the marker hasn't been added.
    if (marker === false) {
      //Create the marker.
      marker = new google.maps.Marker({
        position: clickedLocation,
        map: map,
        draggable: true, //make it draggable
      });
      //Listen for drag events!
      google.maps.event.addListener(marker, "dragend", function (event) {
        markerLocation();
      });
    } else {
      //Marker has already been added, so just change its location.
      marker.setPosition(clickedLocation);
    }
    //Get the marker's location.
    markerLocation();
  });
}


//End of The MAP Part

async function getWeather() {
  try {
    let city = document.getElementById("city").value;

    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=49988ce2d6ee669aa10d49a1f9e77e78&units=metric`
    );

    let data = await response.json();
    showWeather(data);
    // console.log(data);
  } catch (err) {
    console.log("err: ", err);
  }
}

let data_div = document.getElementById("data_div");
let cityMapDiv = document.getElementById("div1");
function showWeather(data) {
  cityMapDiv.innerHTML = "";
  let cityMap = document.createElement("iframe");
  cityMap.setAttribute("id", "cityMap");
  cityMap.setAttribute("loading", "lazy");
  cityMap.src = `https://www.google.com/maps/embed/v1/place?q=${data.name}&key=AIzaSyC5bwreCZGKc3hKUdkfd_3TEfmSoN9OfNY`;

  cityMapDiv.appendChild(cityMap);

  data_div.innerHTML = "";

  let temp = document.createElement("h3");
  temp.innerHTML = `Temperature:- ${data.main.temp} °C`;

  let pressure = document.createElement("h3");
  pressure.innerHTML = `Pressure:- ${data.main.pressure} Pa`;

  let humidity = document.createElement("h3");
  humidity.innerHTML = `Humidity:- ${data.main.humidity} g/m^3`;

  let windSpeed = document.createElement("h3");
  windSpeed.innerHTML = `Wind Speed:- ${data.wind.speed} m/s`;

  data_div.append(pressure, temp, humidity, windSpeed);
}

function locationError() {
  cityMapDiv.innerHTML = `<h3 style="color:red">Location Error</h3>`;
  document.getElementById(
    "data_div"
  ).innerHTML = `<h3 style="color:red">Location Error</h3>
        <h3>Please Enable Your Location or you can select location and search for city</h3>`;
}




//show week dforcast data.

async function getWeekForcast() {
  // console.log(lat)
  // console.log(lon)
  try {
    let city = document.getElementById("city").value;

    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=49988ce2d6ee669aa10d49a1f9e77e78&units=metric`
    );

    let data = await res.json();

    // console.log(data);
    showWeekData(data.daily);
  } catch (err) {
    console.log(err);
  }
}
let weekData = document.getElementById("weekData");
function showWeekData(arr) {
  //for setting day of data
  let days = {
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
    7: "Sun",
  };
  let date = new Date();
  let day = date.getDay();
  // console.log(days[day]);

  weekData.innerHTML = "";
  arr.forEach((element) => {
    //pushing day in data
    if (day === 8) {
      day = 1;
    }
    element.day = days[day];
    day++;
    //ending of pushing day task;

    let div = document.createElement("div");
    div.setAttribute("class", "dayDiv");

    let h3 = document.createElement("h3");
    h3.innerHTML = element.day;

    let img = document.createElement("img");
    if (element.weather[0].main === "Rain") {
      img.src =
        "data:image/png;base64,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";
    }
    if (element.weather[0].main === "Clear") {
      img.src =
        "https://media.istockphoto.com/vectors/cute-flat-sun-icon-vector-id1124567572?k=20&m=1124567572&s=612x612&w=0&h=qA2-ugQviG9uGvpn5-K90sK9w5QZjd3TetULc_5VECc=";
    }
    if (element.weather[0].main === "Clouds") {
      img.src = "data:image/jpeg;base64,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";
    }
    if (element.weather[0].main === "Snow") {
      img.src =
        "https://www.pngkit.com/png/full/2-20182_snowfall-png-pic-snowy-weather-clip-art.png";
    }

    let maxTemp = document.createElement("p");
    maxTemp.innerHTML = `<b>${element.temp.max} °C</b>`;

    let minTemp = document.createElement("p");
    minTemp.innerHTML = `<b>${element.temp.min} °C</b>`;

    div.append(h3, img, maxTemp, minTemp);
    weekData.appendChild(div);
  });
  console.log(arr);
}





//function calling after click on button
async function GetWeather() {
  let city = document.getElementById("city").value;
  try {
    let cityDetails = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49988ce2d6ee669aa10d49a1f9e77e78&units=metric`
    );

    let data = await cityDetails.json();
    lat = data.coord.lat;
    lon = data.coord.lon;
    getWeather();
    getWeekForcast();
  } catch (err) {
    console.log(err);
  }
}
