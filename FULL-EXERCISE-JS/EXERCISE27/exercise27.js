function fetchUser(){
    return new Promise((resolve,reject )=>{
        setTimeout(() => {
            let success = true 
            if (success==true){
               resolve({id:1122,name:'mohamed abuukar mohamed '})
            }
            else{
                reject("waxba lama helin nio ")
            }
            
        }, 2000);

    })
}
// console.log(fetchUser()) hadee sidaan la dhaho padding ayuu noqonaa 

// xalka waa in aad soo celisan fethuser ka dib neh aad isticmasha .then then asiga waxa uu ku haynaa in hadee true noqo inuu ku soo bandhigo resolve halka catch neh ee ku haayneyso erro soo baxo 

fetchUser()
.then((xog)=>console.log("user date is :",xog))
.catch((err)=>console.log("error:",err))