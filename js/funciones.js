document.querySelectorAll(".imagen img").forEach(i=>{
    i.addEventListener("click", function(evento_abrir){
        evento_abrir.stopPropagation();
        this.parentNode.classList.add("selecionada");
    })
})

document.querySelectorAll(".imagen").forEach(i=>{
    i.addEventListener("click", function(evento_cerrar){
        this.classList.remove("selecionada");
    })
})