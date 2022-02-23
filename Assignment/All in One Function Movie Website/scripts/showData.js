// getData()

async function getData(url){

    let res = await fetch(url)
    let data = await res.json()

    return data

}

// append()

function append(data, container){

    // data.forEach(element => {
    data.forEach( ({strCategory, strCategoryThumb, strYoutube}) => {
        
        let div = document.createElement("div")
        let p = document.createElement("p")
            p.innerText = strCategory;

        let img = document.createElement("img")
            img.setAttribute("class", "img")
            img.src = strCategoryThumb;

        div.append(img, p);

        

        container.append(div);

    });

}


// get random food

function random_food(data, division) {
    console.log('data:', data)
    
    let div = document.createElement("div")
    
    let img = document.createElement("img")
        img.src = data[0].strMealThumb;

    let name = document.createElement("p")
        name.innerText = "Name : " + data[0].strCategory;

    let area = document.createElement("p")
        area.innerText = "Catogary : " + data[0].strArea;

    let instruction = document.createElement("p")
        instruction.innerText = "Instructions : " + data[0].strInstructions;

    let link_to_utube = document.createElement("a");
        link_to_utube.href = data[0].strYoutube;
        link_to_utube.innerText = "See how to prepare on youtube";

    div.append(img, name, area, instruction, link_to_utube);

    division.append(div);

}

export { getData, append, random_food}