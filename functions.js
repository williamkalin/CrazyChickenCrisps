import smoothscroll from "./smoothscroll.js";

// window.scrollTo(0, 0);
new smoothscroll();


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//////////////////LOADING SCREEN

//Loading Screen removal animation


window.scrollTo({ top: 0, behavior: 'smooth' });


anime({
   targets: ".loadingscreen",
   translateY: "-1000vh",
   delay: 2000,
   duration: 3000,
   easing: 'easeInOutExpo',
   update: function (anim) {
      if (anim.progress > 50) {

         Object.assign(document.querySelector("body").style, { overflow: "auto", "overflow-x": "hidden" });

         // document.querySelector("body").style.overflow = "auto";
         // document.querySelector("body").style.overflow-x = "hidden";


      }
   }
});




///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//////////////////GETTING VALUES TO BE USED

//////////////////CARTON
const carton = document.querySelector(".carton__container__box-1");
const cartonafter = document.querySelector(".carton__container__box-2");
const cartonarrow = document.querySelector(".carton__container__arrow");
const cartonclick = document.querySelector(".carton__container__clickme");
const cartonaftertext = document.querySelector(".carton__container__aftertext");


//////////////////EGGSMASH
const hammer = document.querySelector(".eggsmash__container__frontalegg");
const hammerafter = document.querySelector(".eggsmash__container__hammer");
const hammershells = document.querySelector(".eggsmash__container__eggshells");
const hammerarrow = document.querySelector(".eggsmash__container__arrow");
const hammerclick = document.querySelector(".eggsmash__container__clickme");
const hammeraftertext = document.querySelector(".eggsmash__container__aftertext");

//////////////////PICKUP
const pickup = document.querySelector(".pickup__container__shellrow");
const pickupafter = document.querySelector(".pickup__container__shellpickup");
const pickuparrow = document.querySelector(".pickup__container__arrow");
const pickupclick = document.querySelector(".pickup__container__clickme");
const pickupaftertext = document.querySelector(".pickup__container__aftertext");


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//////////////////SCALING ELEMENTS ON HOVER


//////////////////HELPERFUNCTIONS

function scaleUpAndRemoveAnim(element) {
   Object.assign(element.style, { animation: "pulsatescaled 2s linear infinite" });
}

function scaleDownAndAddAnim(element) {
   Object.assign(element.style, { animation: "pulsatee-click 2s linear infinite" });
}


//////////////////CARTON

carton.addEventListener("mouseenter", () => {
   scaleUpAndRemoveAnim(carton);
})

carton.addEventListener("mouseleave", () => {
   scaleDownAndAddAnim(carton);
})


//////////////////EGGSMASH

hammer.addEventListener("mouseenter", () => {
   scaleUpAndRemoveAnim(hammer);
})

hammer.addEventListener("mouseleave", () => {
   scaleDownAndAddAnim(hammer);
})


//////////////////EGGSHELLS

const eggrow = document.querySelector(".pickup__container__shellrow");

eggrow.addEventListener("mouseenter", () => {
   scaleUpAndRemoveAnim(eggrow);
})

eggrow.addEventListener("mouseleave", () => {
   scaleDownAndAddAnim(eggrow);
})


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//////////////////TRANSFORMING ON CLICK

//////////////////HELPERFUNCTIONS

function hideOldShowNew(oldElem, newElem, arrow, clickme, aftertext, transitionstyle) {

   //Hide old element and show new
   Object.assign(oldElem.style, { visibility: "hidden" });
   Object.assign(newElem.style, { "transform": "scale(1)", transition: transitionstyle });

   //Remove arrow and clicktext
   Object.assign(arrow.style, { visibility: "hidden" });
   Object.assign(clickme.style, { visibility: "hidden" });


   //transtion in the aftertext. 
   Object.assign(aftertext.style, { visibility: "visible", transition: "all 2s linear", opacity: "1" });

   oldElem.remove();

}

//////////////////CARTON

carton.addEventListener("click", () => {

   var transitionstyle = "all 1.5s linear";

   hideOldShowNew(carton, cartonafter, cartonarrow, cartonclick, cartonaftertext, transitionstyle);
})


//////////////////EGGSMASH

hammer.addEventListener("click", () => {

   var transitionstyle = "all 0s linear";

   hideOldShowNew(hammer, hammerafter, hammerarrow, hammerclick, hammeraftertext, transitionstyle);

   //Shells scalen and fade
   Object.assign(hammershells.style, { visibility: "visible", animation: "scaleandfade 2s linear forwards" });
})

//////////////////EGGPICKUP

pickup.addEventListener("click", () => {

   var transitionstyle = "all 1.5s linear";

   hideOldShowNew(pickup, pickupafter, pickuparrow, pickupclick, pickupaftertext, transitionstyle);


})



