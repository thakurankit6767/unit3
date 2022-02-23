// var API_KEY = "api_key=f92460e8b4e1160664337b9edd0ebf1b";
// var BASE_URL = "https://api.themoviedb.org/3";
// var API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
// var IMG_URL = "https://image.tmdb.org/t/p/w500";
// var search_url = BASE_URL + "/search/movie?" + API_KEY;

// const main = document.getElementById("main");
// const form = document.getElementById("form");
// const search = document.getElementById("search");
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

//  export { showMovies }