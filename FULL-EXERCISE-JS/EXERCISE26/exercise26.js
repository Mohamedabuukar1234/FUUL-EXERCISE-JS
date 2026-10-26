function getDate (){
    alert("waa soo daahday blse waa lagu sugay")
    return("wuu soo dahyay blse wan sugnay ")
}

console.log("waxa ugu xigo alert ")
console.log(getDate())
console.log("ani waan sugay sxpkeey ")

console.log("-----------------asynchrous----------------")

// asynchrous 
function getUser(dibUawac){
    setTimeout(() => {
        let users = alert("ani weeye kan labaad blse manta waa iga tagteen oo kii ugu danbeeyo ayaa noqday  ")
        dibUawac(users)
        
    }, 2000);
}
console.log("ani waaye kii kowad waxaa igu xirgo allert ")
getUser (function(users){
console.log("yaana leega tagin ani allert weeye ")
})

console.log("ani kan sedaxaad ayan ahy blse allert mant ma sugi karo sorry!")

    
