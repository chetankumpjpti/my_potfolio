// Menubar
const Baricon = document.querySelector(".bars")
const Menubar_box = document.querySelector(".menubar")
const MenuClose = document.querySelector(".menuClose")

Baricon.addEventListener("click",()=>{
    Menubar_box.style.display = "block"
})
MenuClose.addEventListener("click",()=>{
    Menubar_box.style.display = "none"
})

// Animated Counter


const CounterNumber = document.querySelectorAll(".counter_number");
const target = [10, 6, 20, 9];

for (let i = 0; i < CounterNumber.length; i++) {
    let count = 0;
    let interval = setInterval(() => {
        count++;

        if (count >= target[i]) {
            count = target[i];
            clearInterval(interval);
        }

        CounterNumber[i].innerHTML = count + "<span>+</span>";
    }, 100);
}

// Slider


const PrevBtn = document.querySelector("#prev");
const NextBtn = document.querySelector("#next");
const Cards = document.querySelector(".slider_p");

const slides = document.querySelectorAll(".slider");

let count = 0;

const next = () => {
    count++;

    if (count >= slides.length) {
        count = 0;
    }

    Cards.style.transform = `translateX(-${count * 100}%)`;
};

const prev = () => {
    count--;

    if (count < 0) {
        count = slides.length - 1;
    }

    Cards.style.transform = `translateX(-${count * 100}%)`;
};

NextBtn.addEventListener("click", next);
PrevBtn.addEventListener("click", prev);



// FAqs

const Question = document.querySelectorAll(".faq_question")
for(let title of Question){
    title.addEventListener("click", ()=>{
        const openContent = document.querySelector(".open")
        if(openContent !=  null){
            openContent.classList.remove("open")
            openContent.style.height = ""
        }
        const titleContant = title.nextElementSibling
        if(titleContant == openContent) return
        titleContant.classList.add("open")
        titleContant.style.height = titleContant.scrollHeight + "px" 
    })
}


// Digital clock

function Digital_Clock(){
    let now = new Date();

const date = now.toLocaleDateString("en-in",{
    weekday:"long",
    month:"2-digit",
    day:"2-digit",
    year:"2-digit"
})

const time = now.toLocaleTimeString("en-in",{
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit",
    hour12:true
})
document.querySelector("#clock_time").innerHTML = time
document.querySelector("#clock_date").innerHTML = date
}
Digital_Clock()
setInterval(Digital_Clock,1000)



// Tab button

const TabBtn = document.querySelectorAll(".tab_btn");
const TabContent = document.querySelectorAll(".tab_content");

for (let i = 0; i < TabBtn.length; i++) {

    TabBtn[i].addEventListener("click", () => {

        for (let btn of TabBtn) {
            btn.classList.remove("active");
        }

        for (let content of TabContent) {
            content.classList.remove("active");
        }

        TabBtn[i].classList.add("active");
        TabContent[i].classList.add("active");

    });

}

// Slider Popup

const OpenPopup = document.querySelector("#openPopup");
const ClosePopup = document.querySelector("#closePopup");
const Popup = document.querySelector("#projectPopup");

OpenPopup.addEventListener("click", function () {
    Popup.style.display = "flex";
});

ClosePopup.addEventListener("click", function () {
    Popup.style.display = "none";
});
