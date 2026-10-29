let chosecolor = document.querySelector('#chosecolor')
let preview = document.querySelector('#preview')
let colorHistory = document.querySelector('#colorHistory')
let clear = document.querySelector('#clearhistory')

chosecolor.addEventListener('input', function(){
    let selectedcolor = chosecolor.value;

    preview.style.backgroundColor = selectedcolor; // bacgrounka preveiw waxa uu sinaa waxa selctorka la siiyo 

  //creat new li 
  const li = document.createElement('li')//waan abuuray 
  li.textContent=selectedcolor//kadib neh waxaan ku shubnay sekectoka waxa magaciisa
  li.style.color=selectedcolor  // colrka qoraaka ayee midka selectedka sinee 
  colorHistory.appendChild(li)  // colorka cusb ayuu ku daraa color histroga 

})

// clear 

clear.addEventListener('click',function(){
    colorHistory.innerHTML=" "
})