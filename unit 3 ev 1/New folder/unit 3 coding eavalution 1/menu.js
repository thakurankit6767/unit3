
     let url="https://www.themealdb.com/api/json/v1/1/categories.php";
    let parent=document.getElementById("products")

    async function getProducts(){
    
            let res=await fetch(url)
            let data=await res.json();
           let response=data.categories;
           
            console.log("response:",response)
            appendProducts(response);
     
           
        
    }
 

    function appendProducts(arr){
        arr.forEach(function(product){
            let div=document.createElement("div")
            let img=document.createElement("img")
            img.src=product.strCategoryThumb;
            let name=document.createElement("p")
            name.innerText=product.strCategory
            let price=document.createElement("p")
            let max=500;
            let min=100;
            price.innerText=product.price = Math.floor(Math.random()*(max-min)+min);
            
            let  button=document.createElement("button")
            button.textContent="Add To Cart"
            div.append(img,name,price,button)
parent.append(div)
        })
    }


       getProducts()