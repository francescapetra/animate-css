// All animations will take twice the time to accomplish
// document.documentElement.style.setProperty('--animate-duration', '2s');

// All animations will take half the time to accomplish
// document.documentElement.style.setProperty('--animate-duration', '.5s');

//Puoi fare un sacco di altre cose con animate.css quando lo combini con Javascript.Un semplice esempio:

const element = document.querySelector('.my-element');
element.classList.add('animate__animated', 'animate__bounceOutLeft');
//Puoi rilevare la fine di un'animazione:

const element = document.querySelector('.my-element');
element.classList.add('animate__animated', 'animate__bounceOutLeft');

element.addEventListener('animationend', () => {
    // do something
});
//o modificarne la durata:

const element = document.querySelector('.my-element');
element.style.setProperty('--animate-duration', '0.5s');
//Puoi anche utilizzare una semplice funzione per aggiungere le classi di animazione e rimuoverle automaticamente:

const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });
//E usalo in questo modo:

animateCSS('.my-element', 'bounce');

// or
animateCSS('.my-element', 'bounce').then((message) => {
    // Do something after the animation
});