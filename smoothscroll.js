
export default class SmoothScroll {

   constructor() {
      this.winYOffset;
      this.MathUtils = {
         // linear interpolation
         lerp: (a, b, x) => (1 - x) * a + x * b
      };
      //Get the  Static and Dynamic divs
      this.InnerDOM = {
         lerpStatic: document.querySelector('.lerp-static'),
         lerpDynamic: document.querySelector('.lerp-dynamic')
      };

      this.renderedStyles = {
         translationY: {
            // interpolated value
            lerpDynamicY: 0,
            // lerpStaticY value
            lerpStaticY: 0,
            // amount to interpolate
            ease: 0.1
         }
      };

      window.addEventListener('scroll', this.getPageYScroll);
      this.getPageYScroll();
      // get PageYScroll

      this.setBodyHeightToInnerDOMHeight();
      // set the initial values
      this.setLerpValuesToActualYOffsetAndUpdateInnerDOM();
      // init/bind events
      this.initEvents();
      // start the render loop
      requestAnimationFrame(() => this.render());
   }



   getPageYScroll = () => this.winYOffset = window.pageYOffset || document.documentElement.scrollTop;

   setBodyHeightToInnerDOMHeight() {
      document.body.style.height = `${this.InnerDOM.lerpDynamic.scrollHeight}px`;
   }

   setLerpValuesToActualYOffsetAndUpdateInnerDOM() {
      // sets the initial value (no interpolation) - translate the scroll value
      for (const key in this.renderedStyles) {

         this.renderedStyles[key].lerpStaticY = this.renderedStyles[key].lerpDynamicY = this.winYOffset;
      }
      // translate the lerpDynamic element
      this.updateAndMoveLerpDynamic();
   }

   initEvents() {
      // on resize reset the body's height
      window.addEventListener('resize', () => this.setBodyHeightToInnerDOMHeight());
   }
   render() {
      // update the lerpStaticY and interpolated values
      for (const key in this.renderedStyles) {
         this.renderedStyles[key].lerpStaticY = this.winYOffset;
         this.renderedStyles[key].lerpDynamicY = this.MathUtils.lerp(
            this.renderedStyles[key].lerpDynamicY,
            this.renderedStyles[key].lerpStaticY,
            this.renderedStyles[key].ease);
      }
      // move lerpDynamic
      this.updateAndMoveLerpDynamic();

      //loop...
      requestAnimationFrame(() => this.render());

   }
   updateAndMoveLerpDynamic() {
      // translates the lerpDynamic element
      this.InnerDOM.lerpDynamic.style.transform = `translate3d(0,${-1 * this.renderedStyles.translationY.lerpDynamicY}px,0)`;

   }
}

