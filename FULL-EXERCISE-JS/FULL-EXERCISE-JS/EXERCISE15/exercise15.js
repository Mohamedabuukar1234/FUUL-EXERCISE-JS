let persons =[
    {name:'mohamed',age:36,city:'xamar'},
    {name:'muuse',age :42,city:'xamar'},
    {name:'farah',age:38,city:'xamar'}
];
for (let index in persons ) {
    console.log("name:", persons[index].name);
    console.log("age:", persons[index].age);
    console.log("city:", persons[index].city);
    console.log("----------");
}

console.log("-----------------------------")
for (let person of persons){
    console.log("name:",person.name)
    console.log("age:",person.age)
    console.log("city:",person.city)
}