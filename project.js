let icon= document.querySelector(".menu_icon");
let ul= document.querySelector("ul");


icon?.addEventListener("click",()=>{
    ul.classList.toggle("showdata");
   
    if(ul.className == "showdata"){
        document.getElementById("bar").className="ri-close-line";
    }else{
        document.getElementById("bar").className="ri-menu-line";
    }
})

const scrollRevealOption ={
    origin:"bottom",
    distance:"50px",
    duration:1000,
};

ScrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".header_content p",{
    ...scrollRevealOption,
    delay:400,
});
ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay:800,
});
ScrollReveal().reveal(".header_btns",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".destination_card",{
    ...scrollRevealOption,
    interval:500,
});
ScrollReveal().reveal(".showcase_image img",{
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".showcase_content h4",{
    ...scrollRevealOption,
    delay:400,
});
ScrollReveal().reveal(".showcase_content p",{
    ...scrollRevealOption,
    delay:800,
});
ScrollReveal().reveal(".showcase_btn",{
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".banner_card",{
    ...scrollRevealOption,
    interval:500,
});
ScrollReveal().reveal(".discover_card",{
    ...scrollRevealOption,
    interval:500,
});

