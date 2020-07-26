const review = [
    {
        id: 1,
        name: "Muhammad Owais",
        job: "Web Developer",
        img:"./image1.png",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 2,
        name: "Muhammad Ameen",
        job: "UX Developer",
        img:"./image2.png",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 3,
        name: "Ali Raza",
        job: "UI DESIGNER",
        img:"./image3.png",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 4,
        name: "Muhammad Akif",
        job: "front-end devloper",
        img:"./image4.jpeg",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }

]


const img = document.getElementById("image");
const name = document.getElementById("name1");
const job = document.getElementById("job1");
const text = document.getElementById("text1");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0 ;

// window.addEventListener("DOMContentLoaded",function(){
//     showPerson(currentItem)
// })


function showPerson(){
    const item = review[currentItem];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text    
}

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > review.length - 1){
        currentItem = 0;
    }
    showPerson()
})

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = review.length -1;
    }
    showPerson()
})

randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random()*review.length);
    console.log(currentItem)
    showPerson()
})