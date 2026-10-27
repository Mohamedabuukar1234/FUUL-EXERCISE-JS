function change(){
    let images = document.querySelector('#image')
    const url = prompt("entr you image url")
    const boder = prompt("entr you boder ")
    const width = prompt("entr you width ")
    const height = prompt("entr you height ")
    const boderRadius = prompt("entr you boder radius ")


    images.setAttribute('src',url) 
    image.style.border = `2px solid ${boder}`
    images.style.width= ` ${width}px`
    images.style.height=`${height}px`
    images.style.borderRadius=`${boderRadius}px`
}