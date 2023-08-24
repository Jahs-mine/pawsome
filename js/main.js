// CAROUSEL
const slides = [...document.querySelectorAll('.slide')];
const slidesNode = document.querySelector(".carousel_slides")

const shiftUnit = 300;
const halfLength = Math.floor(slides.length / 2);
let index = halfLength;

// // Setup
(() => {
    // function createSlideNode(source) {
    //     const slideNode = document.createElement("div");
    //     slideNode.classList += 'slide';
    //     return slideNode;
    // }


    // for (let i = halfLength + 1; i < slides.length; i++) {
    //     slidesNode.append(createSlideNode(slides[i]))
    // }
    // for (let i = 0; i < halfLength; i++) {
    //     slidesNode.append(createSlideNode(slides[i]))
    // }
    slidesNode.style.transform = `translateX(${index * -shiftUnit}px)`;
})()

let lastDirection;
function shift(options = { direction: right }) {
    const { direction } = options;

    lastDirection = direction;
    if (direction === "right") {
        index += 1} 
        else if (direction === "left") {
        index -= 1;
    }

    requestAnimationFrame(() => {
        slidesNode.style.transform = `translateX(${index * -shiftUnit}px)`;
        slidesNode.style.transition = "transform 1s";
    });
}

slidesNode.addEventListener("transitionend", () => {
    requestAnimationFrame(() => {
        if (lastDirection === "right") {
            const head = slidesNode.firstChild;
            slidesNode.removeChild(head);
            slidesNode.append(head);
            index -= 1;
        } else if (lastDirection === "left") {
            const tail = slidesNode.lastChild;
            slidesNode.removeChild(tail);
            slidesNode.prepend(tail);
            index += 1;
        }

        slidesNode.style.transform = `translateX(${index * -shiftUnit}px)`;
        slidesNode.style.transition = "";
        setButtonStates(true)
    })
})

const buttonNextNode = document.querySelector(".btn_next");
buttonNextNode.addEventListener('click', () => {
    setButtonStates(false);
    shift({ direction: "right" });
});
const buttonPrevNode = document.querySelector(".btn_prev");
buttonNextNode.addEventListener('click', () => {
    setButtonStates(false);
    shift({ direction: "left" });
});

function setButtonStates(state) {
    if (state) {
        buttonNextNode.removeAttribute("disabled")
        buttonPrevNode.removeAttribute("disabled")
    } else {
        buttonNextNode.setAttribute('disabled', "");
        buttonPrevNode.setAttribute('disabled', "");
    }
}