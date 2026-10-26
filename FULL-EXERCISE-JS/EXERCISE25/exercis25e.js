
// speard 
let number =[1,2,3]
let NewNum =[...number,4,5,6]
console.log(NewNum)
// rest

function multiply (...numbrs){
    return numbrs.reduce((total,num)=>total*num)
   
}

console.log(`the multiplyis: ${  multiply(20,20,20)}`)

