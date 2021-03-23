// Variables

const sections = document.querySelectorAll('section');
const numberOfSections = sections.length;
const nav = document.querySelector('#navbar__list');
const scrollToTopButton = document.querySelector('.scroll-up');
// Hide scroll bar every 2 seconds
var hideNavBarTimer = setTimeout(hideNavBar,2000);


//Function


// Self invoking function to create NavBar
(function createNavBar(){  
    const fragment = document.createDocumentFragment();
    for(let i=0;i<numberOfSections;i++){
        const li = document.createElement('li');
        li.classList.add('navbar__list__item');
        li.textContent=`Section ${i+1}`;
        fragment.appendChild(li);
    }
    nav.appendChild(fragment);
}());

function scrollToSection(event){
    // Event delegation 
    if (event.target.nodeName==='LI'){
        for(let i=0; i<numberOfSections; i++){
            if(nav.children[i]===event.target){
                //Scroll To Desired Section
                let positionX = sections[i].offsetLeft;        
                let positionY = sections[i].offsetTop;          
                window.scrollTo(positionX, positionY);    
            }
        }
    }
}

function highlightSection(){
    // Reset timer 
    clearTimeout(hideNavBarTimer);
    const footer = document.querySelector('.page__footer');
    footer.classList.remove('hide');
    hideNavBarTimer=setTimeout(hideNavBar,2000);

    const activeSection = document.querySelector('.active-section');
    const activeSectionNav = document.querySelector('.active-section-nav');
    for(let i=1;i<numberOfSections;i++){
        // If scroll position is at the center of the screen
        if (window.scrollY<sections[i].offsetTop-window.innerHeight/2){
            // Check if there is a transition between section 
            if (sections[i-1]!==activeSection){
                sections[i-1].classList.add('active-section');
                nav.children[i-1].classList.add('active-section-nav');
                if(activeSection)
                    activeSection.classList.remove('active-section');
                if(activeSectionNav)
                    activeSectionNav.classList.remove('active-section-nav');
            }
            return;
        }
    }
    if (sections[numberOfSections-1]!==activeSection){
        sections[numberOfSections-1].classList.add('active-section');
        nav.children[numberOfSections-1].classList.add('active-section-nav');
        if(activeSection)
            activeSection.classList.remove('active-section');
        if(activeSectionNav)
            activeSectionNav.classList.remove('active-section-nav');
    }
}

function showscrollToTopButton(){
    // Check if scroll position is after the fold of the page
    if (window.scrollY>=window.innerHeight){
        scrollToTopButton.style.opacity=1;
        scrollToTopButton.style.visibility='visible';
    }
    else{
        scrollToTopButton.style.opacity=0;
        scrollToTopButton.style.visibility='hidden';
    }
}

function scrollToTop(){
    const positionX = window.scrollX;
    window.scroll(positionX,0);
}

function hideNavBar(){
    const footer = document.querySelector('.page__footer');
    footer.classList.add('hide');
}


//Events


nav.addEventListener('click',scrollToSection);
scrollToTopButton.addEventListener('click',scrollToTop);
document.addEventListener('scroll',function(){
    highlightSection();
    showscrollToTopButton();
});
document.addEventListener('DOMContentLoaded',function(){
    highlightSection();
    showscrollToTopButton();
});
document.addEventListener('mousemove',function(event){
    if (window.outerHeight-event.screenY<50){
        // Reset Timer
        clearTimeout(hideNavBarTimer);
        hideNavBarTimer=setTimeout(hideNavBar,2000);
        const footer = document.querySelector('.page__footer');
        footer.classList.remove('hide');
    }
});
window.addEventListener('resize',function(){
    highlightSection();
    showscrollToTopButton();
});

showscrollToTopButton();
