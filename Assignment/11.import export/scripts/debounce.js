//********************** debounce *******************

function debounce(food_name, where_to_append, goto_div){
    // console.log('goto_div:', goto_div)
    
    
        if(timerId){
            clearTimeout(timerId);
        }
    
        timerId = setTimeout(()=>{
    
            main(food_name, where_to_append, goto_div)
            
        }, 1000);
    
    }
    
    // search food Function
    
    async function Search_food(food_name){
    
        try{
    
            // *************API for multiple movies for searched name which returns around 10 movies
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food_name}`);
            let data = await res.json();
            console.log('data:', data)
            return data;
    
        }catch(e){
    
            console.log("error",e)
    
        }
    
    }
    
    
    var timerId;
        async function main(food_name, where_to_append, goto_div){
            // console.log('where_to_append:', where_to_append)
            // let food_name = document.getElementById("movie").value;
            // console.log('food_name:', food_name)
            
            if(food_name.length < 3){
                return false;
            }
    
            let res = await Search_food(food_name);  //which return data of 10 movies
            console.log('res:', res)
    
            let foods_data = res.meals;
            
            
            // console.log('res.meals_type:', typeof(res.meals))
    
            
            
    
            // return foods_data;
            append_food(foods_data, where_to_append, goto_div);
    
        }
    
        // *********append movies
    
        function append_food(food_list, where_to_append, goto_div){
            // console.log('goto_div:', goto_div)
            // var where_to_append = document.getElementById(id);
        // console.log('where_to_append:', where_to_append)
        
            // console.log("foood 0", food_list[0])
    
         for(let key in food_list ){
    
            if(food_list[key]===undefined){
                return false;
            }
    
            // food_list[key].forEach(function(food) {
    
                let each_div = document.createElement("div");
                    each_div.setAttribute("class", "each-div");
    
                let img = document.createElement("img");
                    img.src = food_list[key].strMealThumb;
    
                let details_div = document.createElement("div");
                    details_div.setAttribute("class", "details-div")
                
                let name=document.createElement("p")
                    name.innerText = "Name : " + food_list[key].strCategory;
    
                let category=document.createElement("p")
                    category.innerText = "Category : " + food_list[key].strArea;
    
                details_div.append(name, category)
                // console.log('details_div:', details_div)
    
                each_div.append(img, details_div);
    
                where_to_append.append(each_div);
    
                each_div.onclick = function() {
    
                    
                    where_to_append.style.display = "none";
    
                    let instruction = document.createElement("p");
                        instruction.innerText = food_list[key].strInstructions;
                        
                    details_div.append(instruction)
    
                    goto_div.append(img, details_div)
    
                }
            // });
    
         }
    
            
            // let where_to_append = document.getElementById("[key]");
            // where_to_append.innerText = null;
    
            
    
        }
    
    // export method
    
    export { debounce }