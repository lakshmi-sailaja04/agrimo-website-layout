const slider = document.querySelector(".services-cards-container");
const dots = document.querySelectorAll(".dots .ddot");

const cardWidth = document.querySelector(".service-card").offsetWidth + 20;

function moveSlide(index){

  slider.style.transform = `translateX(-${index * cardWidth}px)`;

  dots.forEach(function(dot){
  dot.classList.remove("active");
  });

  dots[index].classList.add("active");

}

let index = 0;

const container = document.querySelector(".cards-container");
const cards = document.querySelectorAll(".group-card");

const visibleCards = 2;
const totalCards = cards.length;

document.getElementById("next").onclick = () => {
  if(index < totalCards - visibleCards){
    index++;
    container.style.transform = `translateX(-${index * 320}px)`;
  }
};

document.getElementById("prev").onclick = () => {
  if(index > 0){
    index--;
    container.style.transform = `translateX(-${index * 320}px)`;
  }
};

