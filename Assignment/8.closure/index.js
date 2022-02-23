const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=670428ec815708a2fd553531ccb4f8e1&query=";

const IMGPATH = "https://image.tmdb.org/t/p/w500";

const searchPage = document.getElementById("search-page");
const searchResult = document.getElementById("search-result");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const search = document.getElementById("search");
const results = document.getElementById("results");
const searchTitle = document.getElementById("search-title");
const message = document.getElementById("message");
const deatailsPage = document.getElementById("details-page");
const cardName = document.getElementById("card-name");
const title = document.getElementById("title");
const language = document.getElementById("language");
const rating = document.getElementById("rating");
const date = document.getElementById("date");
const img = document.getElementById("card-img");
const description = document.getElementById("description");
const body = document.getElementById("body");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleEvents();
});

function handleEvents() {
  if (window.navigator.onLine) {
    searchResult.style.display = "block";
    searchPage.style.display = "none";
    const title = search.value;
    if (title) {
      searchTitle.innerText = title;
      showMovies(SEARCHAPI + title);
      search.value = "";
    } else {
      searchTitle.innerText = "No Title";
      searchPage.style.display = "none";
      offlinePage.style.display = "flex";
      message.innerHTML = "Type something to search";
    }
  } else {
    searchPage.style.display = "none";
    offlinePage.style.display = "flex";
  }
}

function showMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      if (data.results.length) {
        data.results.forEach((element) => {
          if (element.poster_path) {
            const el = document.createElement("div");
            const image = document.createElement("img");
            const text = document.createElement("p");

            text.innerHTML = `${element.title}`;
            image.src = IMGPATH + element.poster_path;
            el.appendChild(image);
            el.appendChild(text);
            el.onclick = () => showDetails(element);
            results.appendChild(el);
          }
        });
      } else {
        searchTitle.innerText = "No Results Found";
        searchPage.style.display = "none";
        offlinePage.style.display = "flex";
        message.innerHTML = "Sorry, no results found";
      }
    });
}

function showDetails(element) {
  body.style.overflow = "hidden";
  deatailsPage.style.display = "flex";
  img.src = IMGPATH + element.poster_path;
  title.innerHTML = `${element.title}`;
  cardName.innerHTML = `${element.title}`;
  date.innerHTML = `${element.release_date}`;
  rating.innerHTML = `${element.vote_average}`;
  description.innerHTML = `${element.overview}`;
  language.innerHTML = `${element.original_language}`;
}

function handleBack() {
  location.reload();
}

function handleClose() {
  deatailsPage.style.display = "none";
  body.style.overflow = "auto";
}



// newpart

// var API_KEY = "api_key=670428ec815708a2fd553531ccb4f8e1";
// var BASE_URL = "https://api.themoviedb.org/3";
// var API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
// var IMG_URL = "https://image.tmdb.org/t/p/w500";
// var search_url = BASE_URL + "/search/movie?" + API_KEY;

// const main = document.getElementById("main");
// // const form = document.getElementById("form");
// // const search = document.getElementById("search");
// function getMovies(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       showMovies(data.results);
//     });
// }
// getMovies(API_URL);

// function showMovies(data) {
//   var count = 0;
//   main.innerHTML = "";

//   data.forEach((movie) => {
//     count++;
//     const { title, poster_path, vote_average, overview } = movie;
//     let movieEl = document.createElement("div");
//     movieEl.classList.add("movie");
//     movieEl.innerHTML = `
//          <img id="mainimg" src="${IMG_URL + poster_path}">
//       <div class="movie-info">
//         <h3>${title}</h3>
//         <span class="${getcolor(vote_average)}">${vote_average}</span>
//       </div>
//       <div id="${rec(vote_average)}">
//           Recommended
//       </div>
//       <div class="overview">
//         <h3>Overview</h3>
//         ${overview}
//       </div>
//  `;
//     main.appendChild(movieEl);
//   });
//   if (count == 0) {
//     getMovies(API_URL);
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
//     setTimeout(() => {
//       popup.classList.toggle("hide");
//     }, 1000);
//   }
//   if (vote_average > 8) {
//     var x = document.getElementById("recommend");
//     x.style.visibility = "visible";
//   }
// }
// function getcolor(vote) {
//   if (vote >= 8) {
//     return "green";
//   } else if (vote >= 5) {
//     return "orange";
//   } else {
//     return "red";
//   }
// }

// function rec(vote) {
//   if (vote > 7.5) {
//     return "vis";
//   } else {
//     return "invis";
//   }
// }
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const searchTerm = search.value;
//   if (searchTerm) {
//     getMovies(search_url + "&query=" + searchTerm);
//   }
// });






// async function searching() {
//   let name = document.getElementById("search").value;
  
//   console.log(name)
// }


// var showing = docum

// ent.getElementById("showname")
// if(localStorage.getItem("mybucket")){
//   if(localStorage.getItem("mybucket").length!==0){
//     let mycart= JSON.parse(localStorage.getItem("mybucket"));
//     console.log(mycart[0]);
//     showing.textContent= mycart[0];
//     let sign = document.getElementById("signinbtn");
//     sign.style.display="none";
   
// } 
// }
