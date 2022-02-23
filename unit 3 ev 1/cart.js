
     let container=document.getElementById("container")
     function showproduct(){
         let product=JSON.parse(localStorage.getItem("cart"));
         console.log(product)
         appendtodiv(product)
     }
     showproduct()
     function appendtodiv(product){
         
         product.forEach((product)=>{
             let div=document.createElement("div")
             let image=document.createElement("img")
         image.src=product.strCategoryThumb
         console.log(image)
         let name=document.createElement("p")
         name.innerText=product.strCategory
         
         div.append(image,name)
         containerc.append(div)
 
         });
        
     }
  