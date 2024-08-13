function menubar(){
    const list = document.querySelector(".list")
    const unicode1 = document.querySelector(".open")
    const unicode2 = document.querySelector(".close")
    list.classList.toggle('position')
    unicode1.classList.toggle('closetg')
    unicode2.classList.toggle('opentg')
}

function signin(){
    window.location.href = "signin.html"
}
function started(){
    window.location.href = "signup.html"
}

const content = document.querySelectorAll(".content");
const allBtn = document.querySelectorAll(".btn");

allBtn.forEach(button =>
    button.addEventListener("click", (event)=> {
        content.forEach(content=>{
            content.style.display = 'none'
        })
        if(event.target.innerHTML === "+"){
            event.target.parentElement.nextElementSibling.style.display = "block"
            event.target.innerHTML = "-"
        }else{
            event.target.parentElement.nextElementSibling.style.display = "none"
            event.target.innerHTML = "+"
        }
    })
)