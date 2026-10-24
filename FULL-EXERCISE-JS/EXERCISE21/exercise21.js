let number =[1,2,3,4,5,6]
let num = number.reduce (function(total,sum){
    return(total%sum)
})



   
console.log(num)