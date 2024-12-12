
const arrowRight = document.querySelector(".right");
const arrowLeft = document.querySelector(".left");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");


let slideimages = 1;
length = images.length;

// for each goes heres
for( i = 0 ; i < length ; i++){
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";


const resetBg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = "transparent";
    });
};


buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        resetBg();
        slider.style.transform = `translateX(-${i * 615}px)`;
        slideimages = i + 1;
        button.style.backgroundColor = "white";
        
    });
});

// it finishes heres 

const goToNext = () => {
    slider.style.transform = `translateX(-${slideimages * 615}px)`;
    slideimages++;
};

const goToPrevious = () => {
    slider.style.transform = `translateX(-${(slideimages - 1) * 615}px)`;
    slideimages--;
};

const goToFirst = () => {
    slider.style.transform = `translateX(-${slideimages}px)`;
    slideimages = 1;
};
const backToFirst = () => { 
    slider.style.transform = `translateX(-${(slideimages - 1) * 615}px)`;
    slideimages = length;
};


arrowRight.addEventListener("click", () => {
    slideimages < length ? goToNext() : goToFirst();
    resetBg();
    buttons[slideimages - 1].style.backgroundColor = "white";

});

arrowLeft.addEventListener("click", () => {
    slideimages > 1 ? goToPrevious() : backToFirst();
    resetBg();
    buttons[slideimages - 1].style.backgroundColor = "white";
});
