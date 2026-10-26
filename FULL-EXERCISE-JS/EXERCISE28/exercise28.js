function date (){
    return new Promise ((resolve , reject )=>{
        setTimeout(() => {
            let guul = false
            if (guul){
                resolve({id:1122 ,name:'mohamed abuukar mohamed'})
                
            }
            else{
                reject ("xog lama helin try again letter ")
            }
            
        }, 3000);

    })
}

async function users() {
   try{
     let user = await date()
    console.log(user)
   }catch(err){
    console.log(err)
   }
   
    
}
users()