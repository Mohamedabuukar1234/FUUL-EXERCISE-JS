let list = document.querySelector('#list')

function Additem(){
    let newitem = document.createElement('li')
    newitem.textContent ='item 3';
    list.appendChild(newitem)
}
function Removeitem(){
    if (list.lastChild){
    list.removeChild(list.lastChild)
}else{
    alert("wuu dhamaady sxpoow ")
}
}