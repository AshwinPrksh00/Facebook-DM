var icons = document.querySelectorAll('.icons .font');
let i1 = icons[0];
let i2 = icons[1];
let i3 = icons[2];
let i4 = icons[3];
i1.addEventListener('click', ()=>{
        if(!i1.classList.contains("iconSelected")){
                i1.classList.add("iconSelected");
                // i1.style.color = "#004d95";
                i2.classList.remove("iconSelected");
                i3.classList.remove("iconSelected");
                i4.classList.remove("iconSelected");

        }
    });

i2.addEventListener('click', ()=>{
        if(!i2.classList.contains("iconSelected")){
                i2.classList.add("iconSelected");
                // i2.style.color = "#004d95";
                i1.classList.remove("iconSelected");
                i3.classList.remove("iconSelected");
                i4.classList.remove("iconSelected");

        }
    });

i3.addEventListener('click', ()=>{
        if(!i3.classList.contains("iconSelected")){
                i3.classList.add("iconSelected");
                // i3.style.color = "#004d95";
                i1.classList.remove("iconSelected");
                i2.classList.remove("iconSelected");
                i4.classList.remove("iconSelected");

        }
    });

i4.addEventListener('click', ()=>{
        if(!i4.classList.contains("iconSelected")){
                i4.classList.add("iconSelected");
                // i4.style.color = "#004d95";
                i1.classList.remove("iconSelected");
                i2.classList.remove("iconSelected");
                i3.classList.remove("iconSelected");

        }
    });

// icons.forEach(e=>{
//     e.addEventListener('click', ()=>{
//         if(!e.classList.contains("iconSelected")){
//             e.classList.add("iconSelected");
//             e.style.color = "#004d95";
//         }
//         else{
//             e.classList.remove("iconSelected");
//             e.style.color = "white";
//         }
//     })
// })