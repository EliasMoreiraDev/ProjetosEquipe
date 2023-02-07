
var url = window.location.href

if(url.indexOf('?') == -1){
    singup.style.display = 'inline'
   
}else{
    
    var singup = document.getElementById('conta')
    var nome = window.location.search
    nome = nome.replace('?','')
    singup.innerText = `Sair`
    singup.style.backgroundColor = 'white'
    singup.style.color = 'red'
    singup.href = 'index.html'
}