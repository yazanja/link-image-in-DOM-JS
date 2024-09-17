let cont=document.getElementById('container')
let link=document.createElement('a')
let image=document.createElement('img')

link.href='https://www.google.com'
link.target="_blank"
image.src='download.png'
image.alt='logo'
image.style.width='500px'
image.style.height='500px'
image.style.border='solid red 10px'

link.appendChild(image)
document.body.appendChild(link)

console.log(link)