document.addEventListener('DOMContentLoaded', (event) => {
     let btns = document.querySelector(".offer").querySelectorAll("button");
     let propertyModal;
     let machineModal;
     const modalCloseButton = document.getElementsByClassName("close");
     Array.from(btns).forEach(el => {
          if (el.dataset.id == "property") {
               el.addEventListener("click", () => {
                    propertyModal = document.getElementById("property");
                    propertyModal.style.display = "block";
               });
          }

          if (el.dataset.id == "machine") {
               el.addEventListener("click", () => {
                    
                    machineModal = document.getElementById("machine");
                    machineModal.style.display = "block";

               });
          }
     });

     Array.from(modalCloseButton).forEach(function(event)
     {
          event.addEventListener("click", function(ev)
          {
               ev.target.parentElement.parentElement.style.display = "none";
          });
     });

     window.onclick = function(event)
     {
          if(event.target.classList.contains("modal"))
          {
               event.target.style.display = "none";
          }
     }    
});