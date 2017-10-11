# css-animate

A small helper that eases programmatic use of [animate.css](https://daneden.github.io/animate.css/).

## Install

    npm install css-animate
    
## Usage

    var animate = require("css-animate");
    var element = // HTMLElement

    animate(element, "bounce").then(console.log);
    
    // animate forever
    animate(element, "tada", Infinity);
    
## API

    animate(element, animation, duration, delay);

* **element**: Instance of HTMLElement 
* **animation**: The animation name - get from [animate.css](https://daneden.github.io/animate.css/).
* **duration**: A float representing the duration of the animation measured in seconds. Can also be `Infinity` in which case the animation will run forever and the promise will never resolve.
* **delay**: A delay measured in seconds.

Returns a `Promise` which resolves to `element` once the animation has finished or gets rejected if the animation has stopped prematurely.

The library is also customizable, you can provide necessary methods for adding and removing classes and cleaning up after animations by overwriting the default ones.

*Notice*: The library utilizes timeouts since at this point `animationend` events are not well supported accross browsers.
