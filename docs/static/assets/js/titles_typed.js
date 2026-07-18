/**
* ...
*/


//const log = document.getElementById("log"); // TEST test logs

//document.getElementById("id-hero-title-typed").addEventListener("DOMContentLoaded", function() { // find by id 'id-hero-title-typed' after dom loaded
document.addEventListener("DOMContentLoaded", function() { // start only when dom loaded
    const typedElement = document.querySelector('.hero-title-typed'); // find selector (class) 'hero-title-typed'

    //let cnt = typedElement // TEST save found into var
    //log.textContent = `1. Started: "${typedElement}"`; // TEST show var in logs

    if (typedElement) { // if true then
        //log.textContent = `2. Working: "${typedElement}"`; // TEST show var in logs

        let typedStrings = typedElement.getAttribute('data-typed-items'); // getting an item
        //log.textContent = `3. Working: "${typedStrings}"`; // TEST show var in logs

        typedStrings = typedStrings.split(',')//.map(s => s.trim()); // creating a list by splitting
        //log.textContent = `4. Working: "${typedStrings}"`; // TEST show var in logs

        // type loop, taken from... [src]
        new Typed('.hero-title-typed', {
            strings: typedStrings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
        //log.textContent = `5. Working: "${typedStrings}"`; // TEST show var in logs
    }
    //log.textContent = `6. Working: "${typedStrings}"`; // TEST show var in logs

    });



/**
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const typedElement = document.querySelector('.hero-title-typed');

    if (typedElement) {
        let typedStrings = typedElement.getAttribute('data-typed-items');
        typedStrings = typedStrings.split(',').map(s => s.trim());

        new Typed('.hero-title-typed', {
            strings: typedStrings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }
});

*/

/**
(function() {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const typed = select('hero-title-typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  new PureCounter();

  })()
 */