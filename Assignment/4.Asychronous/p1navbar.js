var indexfors = [];
// name, release date, poster (add url of a poster), IMDb Imbdrating
var database = [
  {
    brandname: "english",
    releasedate: "Release Date:20-10-2015",
    Imbdrating: 5,

    name: "Black Panther",
    poster:
      "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
  },
  {
    brandname: "hindi",
    releasedate: "Release Date:20-10-2015",
    Imbdrating: 4,

    name: "Padmavat",
    poster:
      "https://static2.showtimes.com/poster/660x980/padmaavat-hindi-123465.jpg",
  },
  {
    brandname: "english",
    releasedate: "Release Date:20-10-2015",
    Imbdrating: 4,

    name: "Beauty",
    poster:
      "https://media1.popsugar-assets.com/files/thumbor/z5oKgNC9S4DS6Bay78Aoy5aLO4s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg",
  },
  {
    brandname: "english",
    releasedate: "Release Date:20-10-2015",
    Imbdrating: 3,

    name: "Archer",
    poster:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411",
  },
  {
    brandname: "english",
    releasedate: "Release Date:20-10-2015",
    Imbdrating: 2,

    name: "Assassin",
    poster:
      "https://assets.mubicdn.net/images/notebook/post_images/19893/images-w1400.jpg?1449196747",
  },
  {
    brandname: "english",
    releasedate: "Release Date:20-10-2015",
    Imbdrating: 5,

    name: "A Star is Born",
    poster:
      "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/star-is-born-web.jpg",
  },
  {
    brandname: "tamil",
    releasedate: "Release Date:20-10-2015",
    Imbdrating: 4,

    name: "TamilmovieName",
    poster: "https://wallpapercave.com/wp/wp8751605.jpg",
  },
  {
    brandname: "hindi",
    releasedate: "Release Date:20-10-2015",
    Imbdrating: 1,

    name: "SinCity",
    poster:
      "https://c8.alamy.com/comp/2CDD2D9/old-movie-poster-colorful-illustration-circa-1930-2000-2CDD2D9.jpg",
  },
  {
    brandname: "tamil",
    releasedate: "Release Date:20-10-2015",
    Imbdrating: 2,

    name: "Encounter",
    poster:
      "https://www.joblo.com/wp-content/uploads/2021/11/encounter-2021-poster-400x600.jpg",
  },
];

// value(indexfors);
displayTable(database);
function displayTable(database) {
  document.querySelector("#inputfromdata").textContent = "";
  database.map(function (elem, index) {
    var div1 = document.createElement("div");
    div1.setAttribute("class", "mainprojectdiv");
    var imgdiv2 = document.createElement("div");
    imgdiv2.setAttribute("class", "imagediv");
    var poster = document.createElement("img");
    poster.setAttribute("class", "forimageofpro");
    poster.setAttribute("src", elem.poster);
    imgdiv2.append(poster);

    var belowimgdiv3 = document.createElement("div");
    belowimgdiv3.setAttribute("class", "belowimagetag");
    var brandnamehere = document.createElement("p");
    brandnamehere.setAttribute("class", "brandnametag");
    brandnamehere.textContent = elem.releasedate;
    var productname = document.createElement("p");
    productname.setAttribute("class", "productnametag");
    productname.textContent = elem.name;
    belowimgdiv3.append(brandnamehere, productname);

    var finaldiv4 = document.createElement("div");

    var pricewithlogo = document.createElement("div");
    pricewithlogo.setAttribute("class", "priceandlogo");

    var pricediv5 = document.createElement("div");
    pricediv5.setAttribute("class", "pricedivtag");

    var mainprice = document.createElement("p");
    mainprice.setAttribute("class", "discountprice");
    mainprice.textContent = elem.Imbdrating;
    var cutprice = document.createElement("p");

    var logoofubuy = document.createElement("img");
    logoofubuy.setAttribute("class", "logoimageubuy");
    logoofubuy.setAttribute(
      "src",
      "https://d3ulwu8fab47va.cloudfront.net/skin/frontend/default/ubuycom-v1/images/fulfilled.png"
    );
    var ubuylogo = document.createElement("div");
    ubuylogo.append(logoofubuy);
    pricediv5.append(mainprice, cutprice);
    pricewithlogo.append(pricediv5, ubuylogo);
    var containerdiv = document.createElement("div");
    containerdiv.setAttribute("class", "outterlayer");
    var atag = document.createElement("a");
    atag.style.textDecoration = "none";
    atag.addEventListener("click", function () {
      if (p.style.color == "red") {
        p.style.color = "gray";
      } else {
        p.style.color = "red";
      }
      console.log(index);
    });
    atag.setAttribute("href", "#");
    atag.setAttribute("class", "a-for-heart");
    var p = document.createElement("button");
    p.setAttribute("class", "buttonforheart");
    p.innerHTML = ' <i class="fas fa-heart"></i>';
    atag.append(p);
    var divforbutton = document.createElement("div");
    divforbutton.setAttribute("class", "divforbutton");
    divforbutton.append(atag);
    div1.append(imgdiv2, belowimgdiv3, pricewithlogo);
    containerdiv.append(divforbutton, div1);
    div1.addEventListener("click", function () {
      console.log(elem, index);
      var k = index;
      var valueforproduct = {
        releasedate: elem.releasedate,
        name: elem.name,
        Imbdrating: elem.Imbdrating,
        poster: elem.poster,
      };
      indexfors.push(valueforproduct);
      localStorage.setItem("indexvalue", JSON.stringify(indexfors));
      window.location.href = "p1navbar.html";
    });

    document.querySelector("#inputfromdata").append(containerdiv);
  });
}



document.getElementById("high").addEventListener("click", abcd);
function abcd() {
  var arr = database;
  var arr = arr.sort((a,b) => b.Imbdrating- a.Imbdrating);
  

  displayTable(arr);
}
document.getElementById("low").addEventListener("click", efgh);
function efgh() {
  var arr = database;
  var arr = arr.sort((a,b) => a.Imbdrating- b.Imbdrating);
  
  displayTable(arr);
}


var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/11/ghayal-once-again-movie-poster-3.jpg";
images[1] = "https://www.desktopbackground.org/p/2013/04/21/564187_bollywood-movies-poster-full-hd-free-download-group-1-http_1600x900_h.jpg";
images[2] = "http://2.bp.blogspot.com/-PWE3aDrc_gM/VjxMGCJeBLI/AAAAAAAADU4/N7qOfacMBwc/s1600/Movie-Once-upon-a-time-in-mumbaai2-hd-poster-free-download.jpg";
images[3] = "http://2.bp.blogspot.com/-bAk1I3tuM98/VjxKzIAm1cI/AAAAAAAADTY/3yXiuzSuo3s/s1600/Dhoom3-all-actor-Fire-HD-poster.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
document.getElementById("container");