function Signup(e){
    e.preventDefault()
    form = document.getElementById("signup-form")
    var user_data={
        name : form.name.value,
        email : form.email.value,
        password :form.password.value,
        username :form.username.value,
        mobile : form.mobile.value,
        description : form.description.value
    }

    user_data = JSON.stringify(user_data)

    fetch("https://masai-api-mocker.herokuapp.com/auth/register",
    {
        method: 'POST',

        body: user_data,

        headers :{
            'Content-Type':"application/json"
        }
    })
    .then((res)=>{
        return res.json();
    })
    .then((res)=> {
        console.log(res)
        validity_check(res.error)
        
    })
    .catch((err)=>{
        console.log(err)
    })
}

function validity_check(error){
    if(error == true){
        alert("invalid Details, try  again")
    }else{
        alert("Successfully Registered login to continue")
        window.location.href="login.html"
    }
    
}

