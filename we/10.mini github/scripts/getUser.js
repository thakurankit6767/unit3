async function getUser(user){
    try{
        let response=await fetch(`https://api.github.com/users/${user}`)
        let data=await response.json()
        return data
    }catch(error){
        console.log(err)
    }
}

export default getUser