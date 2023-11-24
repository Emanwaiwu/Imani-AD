function scrollToElement (elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance){
        elements[instance].scrollIntoView ({ behavior: 'smooth'});
    }
}

const link0 = document.getElementById("link0")
const link1 = document.getElementById("link1"); 
const link2 = document.getElementById("link2"); 
const link3 = document.getElementById("link3"); 


link0.addEventListener('click', () => {
    scrollToElement('#home');
    TransitionEvent();
});

link1.addEventListener('click', () => {
    scrollToElement('#features');
});

link2.addEventListener('click', () => {
    scrollToElement('#pricing');
});

link3.addEventListener('click', () => {
    scrollToElement('#about');
});