function signin(){
    let username = document.getElementById("username").value; 
    let password = document.getElementById("password").value;
    let user_data={
        username,
        password
    }
    console.log(user_data)
    let data_to_send = JSON.stringify(user_data)

    fetch("https://masai-api-mocker.herokuapp.com/auth/login",
    {
        method: 'POST',

        body: data_to_send,

        headers :{
            'Content-Type':"application/json"
        }
    })
    .then((res)=>{
        return res.json();
    })
    .then((res)=> {
        console.log(res)
        if(res.error == true){
            alert("Invalid user credential")
            return;
        }
        fetchmydata(user_data.username,res.token)
    })
    .catch((err)=>{
        console.log(err)
    })
}
function fetchmydata(username,token) {
    console.log(username,token)
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        headers :{
            'Content-Type':"application/json",
            Authorization : `Bearer ${token}`
        },

    })
    .then((res)=>{
        return res.json();
    })
    .then((res)=> {
        console.log(res)
        localStorage.setItem("movieuser",JSON.stringify(res))
        window.location.href= "home.html"
    })
    .catch((err)=>{
        console.log(err)
    })
    
}