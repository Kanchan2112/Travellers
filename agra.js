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
const main1 = document.getElementById("main1");
const main2 = document.getElementById("main2");
const main3 = document.getElementById("main3");


const btn= document.getElementById("remove_button");
const btn2= document.getElementById("remove_button2");
const remove=document.getElementById("remove_content");
const remove2=document.getElementById("remove_content2");
const btn3= document.getElementById("Remove_button3");
const remove3=document.getElementById("Remove_content3");
const btn4= document.getElementById("Remove_button4");
const remove4=document.getElementById("Remove_content4");



const policy = document.getElementById("POLICIES_content");
const itinerary = document.getElementById("ITINERARY_content");
const summary = document.getElementById("SUMMARY_CONTENT");


main1.addEventListener("click", (event) => {
    itinerary.style.display="block";
    policy.style.display="none";
    summary.style.display="none"
})

main2.addEventListener("click", (event) => {
    itinerary.style.display="none";
    summary.style.display="none";
    policy.style.display="block";
})

main3.addEventListener("click", (event) => {
    itinerary.style.display="none";
    policy.style.display="none";
    summary.style.display="block";
})


btn.addEventListener("click",(event) =>{
    remove_content.style.display="none";
})
btn2.addEventListener("click",(event) =>{
    remove_content2.style.display="none";
})
btn3.addEventListener("click",(event) =>{
    Remove_content3.style.display="none";
})
btn4.addEventListener("click",(event) =>{
    Remove_content4.style.display="none";
})

