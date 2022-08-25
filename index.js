const buttons = document.querySelectorAll(".btn")
const paragraphs = document.querySelectorAll("p")

buttons.forEach((x, i) => {
    x.addEventListener("click", () => {
        if(paragraphs[i].classList.value){
            paragraphs[i].classList.remove("hidden")
        }else{
            paragraphs[i].classList.add("hidden")
        }
    })
})