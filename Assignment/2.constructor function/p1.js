document.querySelector("#form").addEventListener("submit", formSubmit);
var bozazArr = JSON.parse(localStorage.getItem("bozazData")) || [];
displayTable(bozazArr);
console.log(bozazArr.length);
  
  document.querySelector("button").textContent = bozazArr.length;
  displayTable(bozazArr);

//   function displayTable(bozazArr) {
//     document.querySelector("#cont").textContent = "";
//   }
  
let arr=[]
function Newspaper(h){

    this.date=new Date();
    this.id=Math.round(Math.random()*100);
    

}
for(let i=0;i<10;i++){
let n1=new Newspaper("Pablo pandey bought Tesla")
arr.push(n1);
}
 console.log("arr:",arr)


function formSubmit(event) {
  event.preventDefault();

  
 
  var bozazObj = {
    category: form.name.value,
   arr:this.date = new Date().value,
    
    // price:form.price.value
  };

  bozazArr.push(bozazObj);
  displayTable(bozazArr);
  localStorage.setItem("bozazData", JSON.stringify(bozazArr));
}

function displayTable(bozazArr) {
  var tbody = document.querySelector("tbody");
  tbody.textContent = "";
  console.log(bozazArr);
  bozazArr.map(function (elem, index) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("button");
    td5.addEventListener("click", function () {
     Done(index);
    });
    var td6 = document.createElement("button");
    td6.addEventListener("click", function () {
     Remove(index);
    });

    td1.textContent = elem.category;
    td2.textContent = elem.title;
    td3.textContent = elem.description;
    td4.textContent = elem.price;
    td5.textContent = "Done";
    td6.textContent = "Remove";


    tr.append(td1, td2, td3, td4, td5,td6);
    tbody.append(tr);
  });

  function Done(index) {
    
    document.getElementsByTagName("tr").style.backgroundColor = "green";
    localStorage.setItem("bozazData", JSON.stringify(bozazArr));
    displayTable(bozazArr);
  }

  
  function Remove(index) {
    bozazArr.splice(index, 1);
    localStorage.setItem("bozazData", JSON.stringify(bozazArr));
    displayTable(bozazArr);
  }


}
  
