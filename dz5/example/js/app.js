const tabs = document.querySelectorAll(".tabheader__item")
const tabsParents =  document.querySelector(".tabheader__items")
const tabsContent = document.querySelectorAll(".tabcontent")


const handleHideTabsContent = () => {
    tabsContent.forEach( (item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

const handleShowTabsContent = (i = 0) => {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active")
};
handleHideTabsContent();
handleShowTabsContent();
tabsParents.addEventListener("click", (e) =>{
    const target = e.target
    if (target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) =>{
            if (item === target){
                handleHideTabsContent();
                handleShowTabsContent(i);
            }
        });
    }
});
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close");
const modalOpenbtn = document.querySelector(".btn_white");
const openModal = () =>{
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden"

};
const closeModal = () =>{
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = ""

};

modalOpenbtn.addEventListener("click",openModal);
modalCloseBtn.addEventListener("click", closeModal);

const sliderImg = document.querySelectorAll(".offer__slide");
const sliderPrev = document.querySelector(".offer__slider-prev");
const sliderNext = document.querySelector(".offer__slider-next");
const currentCounter = document.querySelector("#current");
let slideIndex = 0;

const showSlide = function (){
    sliderImg.forEach((item)=>{
        item.style.display = 'none'
    } )
    sliderImg[slideIndex].style.display = 'block'
    currentCounter.textContent = ("0" + (slideIndex + 1)).slice(-2);

}
showSlide()
let changeNext = ()=>{
    showSlide()
    slideIndex++
    if (slideIndex >= sliderImg.length) {
        slideIndex = 0;
    }
}
let intervalChange;
intervalChange = setInterval(changeNext, 1000);
const stopInterval = function (){
    clearInterval(intervalChange);
    setTimeout(() => {
        intervalChange = setInterval(changeNext, 1000);
    }, 5000);
}
sliderNext.addEventListener('click', () => {
    showSlide()
    slideIndex++
    if (slideIndex >= sliderImg.length) {
        slideIndex = 3;
    }
    stopInterval()
});
sliderPrev.addEventListener('click',()=>{
    showSlide()
    slideIndex--
    if (slideIndex < 0) {
        slideIndex = 0;
    }
    stopInterval()
})
function checkScroll() {
    const scrollWindow = window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    if (scrollWindow + windowHeight >= pageHeight) {
        openModal()
    }
}
window.addEventListener("scroll", checkScroll);

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});






const forms = document.querySelectorAll("form")

const postData = (form)=>{
    form.addEventListener("submit" , (e) =>{
        e.preventDefault()

        const request = new XMLHttpRequest()
        request.open("POST", "server.php")
        request.setRequestHeader("Content-Type","application/json")


        const formData = new FormData(form)

        const obj = {}


        formData.forEach((value,name)=>{
            console.log(value,name)
            obj[name] = value
        })

        const json = JSON.stringify(obj)
        console.log(json)
        request.send(json)

        request.addEventListener("load", () => {
            if (request.status === 200) {
                const modal200 = document.createElement("div");
                modal200.innerHTML = "Все хорошо!";
                modal200.classList.add("modalCall200")
                modal.appendChild(modal200)
                setTimeout(() => {
                    modal.removeChild(modal200);
                }, 3000);
            }
            else {
                const modalError = document.createElement("div");
                modalError.innerHTML = "ОШИБКА"
                modalError.classList.add("modalCall200")
                modal.appendChild(modalError)
                setTimeout(() => {
                    modal.removeChild(modalError);
                }, 3000);

            }
        });
    })

}

forms.forEach((item)=>{
    postData(item)
})





















