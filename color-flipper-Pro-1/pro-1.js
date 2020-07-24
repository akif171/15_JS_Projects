const btn = document.getElementById("button")

button.addEventListener("click", function(e) {
    const random1 = Math.floor(Math.random() * (255 - 0));
    const random2 = Math.floor(Math.random() * (255 - 0));
    const random3 = Math.floor(Math.random() * (255 - 0)); 
    const random4 = Math.random();
    const colors = `rgba(${random1},${random2},${random3},${random4})`;
    const resetcolor = colors;
    document.body.style.backgroundColor = resetcolor;
    
    alert(`COLOR RGBA : 
    ${colors}`)
   

    }
    
    


)


