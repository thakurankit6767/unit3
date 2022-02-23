document.querySelector("#btn").addEventListener("click",signin);
var res=JSON.parse(localStorage.getItem("signupdata"));
function signin(){
    var email=document.querySelector("#ubuyemail").value;
    console.log(email)
var password=document.querySelector("#ubuypassword").value;
       var count=0;
  if(email=="admin"&&password=="admin"){
      window.location.href="form.html"
  } 
  else if(email==""&&password==""){
      alert("enter email and password");
  }
  else if(email==""){ 
      alert("enter your email")
  }
  else if(password==""){
      alert("enter your password")
  }
  else{    
    for(var i=0;i<res.length;i++){   
        
  if(res[i].email==email&&res[i].password==password){
            count++;
            window.location.href="p1navbar.html";
        }   
    }
    if(count==0){
        alert("you entered wrong credentials");
    
}
  }
}



  async function login(e) {
    e.preventDefault();
    let login_data = {
      username: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    login_data = JSON.stringify(login_data);
    let login_url = `https://masai-api-mocker.herokuapp.com/auth/login`;
    let response = await fetch(login_url, {
      method: "POST",
      body: login_data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data);
    let username = document.getElementById("email").value;
    getUser(username, data.token);
  }

  async function getUser(username, token) {
    let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;
    let response = await fetch(api, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer${token}`,
      },
    });
    let data = await response.json();
    console.log(data);
  }

