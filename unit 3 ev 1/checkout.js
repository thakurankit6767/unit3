 function placeorder(){
    alert("your order is placed")
    
    let promise1=new Promise((resolve,reject)=>{
        let abc=setInterval(function(){
            resolve(`your order being cooked`)
          
        },3000)

    })
    promise1.then((res)=>{
        alert(res)
    })
    let promise2=new Promise((resolve,reject)=>{
        let abc=setInterval(function(){
            resolve(`your order is ready`)

        },10000)
    })
    promise2.then((res)=>{
        alert(res)
    })
    let promise3=new Promise((resolve,reject)=>{
        let abc=setInterval(function(){
            resolve(`order out for delivery`)

        },12000)
    })
    promise3.then((res)=>{
        alert(res)
    })
    let promise4=new Promise((resolve,reject)=>{
        let abc=setInterval(function(){
            resolve(`order delivered`)

        },13000)
    })
    promise4.then((res)=>{
        alert(res)
    })
}