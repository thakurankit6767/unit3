document.querySelector("#signupbutton").addEventListener("click",signup);

var userdata=JSON.parse(localStorage.getItem("signupdata"))||[];
function signup(){

var name=document.querySelector("#username").value;
console.log(name)
var mobile=document.querySelector("#mobile").value;
var email=document.querySelector("#email").value;
var password=document.querySelector("#password").value;
var cfmpassword=document.querySelector("#cfmpassword").value;
var usercred={
name:name,
mobile:mobile,
email:email,
password:password,
cfmpassword:cfmpassword
}

if(name==""||email==""||password==""||cfmpassword==""){
alert("enter valid details"); 
}
else{
userdata.push(usercred);
}
localStorage.setItem("signupdata",JSON.stringify(userdata));

if(name!=""&&email!=""&&password!=""&&cfmpassword!=""){
window.location.href="signin.html"
} 

}

async function Register(e) {
    try {
      e.preventDefault();
      var register_data = {
        // name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        username: document.getElementById("username").value,
        mobile: document.getElementById("mobile").value,
        description: document.getElementById("cfmpassword").value,
      };
      register_data = JSON.stringify(register_data);
      console.log(register_data);
    } catch (error) {
      console.log(error);
    }

    let reg_api = `https://masai-api-mocker.herokuapp.com/auth/register`;

    let response = await fetch(reg_api, {
      method: "POST",
      body: register_data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data);
  }