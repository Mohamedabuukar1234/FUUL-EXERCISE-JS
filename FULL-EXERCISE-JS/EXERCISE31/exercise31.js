async function getDate() {
    try{

        let respose = await fetch ('https://jsonplaceholder.typicode.com/users')
        if (!respose.ok){
            throw new Error (`http is error !status: ${respose}`)

        }
        console.log("before json",respose)
        const data = await respose.json()
        console.log("after json ",data)

    }catch(err){
        console.log(err)

    }
    
}
getDate()