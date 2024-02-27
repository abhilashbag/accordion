const para = document.querySelectorAll(".paragraph");
const accordion = document.querySelectorAll(".Accordion");
const button = document.querySelectorAll(".btn")
// const buttonDown = document.querySelectorAll(".down");
// const buttonUp = document.querySelectorAll(".up");

console.log(button[0])
    para.forEach( Element =>{
        Element.style.display = "none";
    })

    for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function(e) { 
 
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
    }

  





// accordion.forEach(element =>{
// element.addEventListener("click",function(e){
// for (let i = 0; i < para.length; i++) {
//     const element = para[i];
//     if()
    
// }
// console.log(e.target.textContent)

// })
// })




// para.style.display = "none";
// console.log(para);
