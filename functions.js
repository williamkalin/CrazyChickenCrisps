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
})




