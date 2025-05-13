/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    window.scrollY >= 50 ? header.classList.add('blur-header')
                         : header.classList.remove('blur-header');
};

window.addEventListener('scroll', blurHeader);


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true // Animation repeat
})

sr.reveal('.home__data, .explore__data, .explore__user, .footer__container')
sr.reveal('.home__card', {delay: 600, distance: '100px', interval: 100})
sr.reveal('.about__data, .join__image', {origin: 'right'})
sr.reveal('.about__image, .join__data', {origin: 'left'})
sr.reveal('.popular__card', {interval: 200})

// Function to show the modal with destination description
function showDescription(destination) {
    const descriptions = {
        palawan: {
            text: "Puerto-Princesa Subterranean River National Park features stunning limestone caves, pristine landscapes, old-growth forests, and unique wildlife.",
            image: "assets/img/home-puerto.jpg",
            rating: 5.0,
            reviews: 100
        },
        siargao: {
            text: "Siargao Island, known as the Surfing Capital of the Philippines.",
            image: "assets/img/Siargao.jpg",
            rating: 3.5,
            reviews: 80
        },
        bohol: {
            text: "The Chocolate Hills in Bohol are a unique tourist attraction.",
            image: "assets/img/home-bohol.jpg",
            rating: 4.1,
            reviews: 120
        },
        aklan: {
            text: "Boracay is known for White Beach and vibrant marine life.",
            image: "assets/img/boracay.jpg",
            rating: 3.0,
            reviews: 90
        }
    };

    const destinationDetails = descriptions[destination];
    if (destinationDetails) {
        document.getElementById('destinationImage').src = destinationDetails.image;
        document.getElementById('descriptionText').innerText = destinationDetails.text;
        document.getElementById('destinationTitle').innerText = destination.charAt(0).toUpperCase() + destination.slice(1);
        
        // Clear previous stars
        const ratingContainer = document.getElementById('destinationRating');
        ratingContainer.innerHTML = ''; // Clear existing stars

        // Generate stars based on the rating
        const fullStars = Math.floor(destinationDetails.rating); // Number of full stars
        const halfStars = destinationDetails.rating % 1 >= 0.5 ? 1 : 0; // Half star check

        // Create full stars
        for (let i = 1; i <= fullStars; i++) {
            const star = document.createElement('span');
            star.className = "fa fa-star checked";
            ratingContainer.appendChild(star);
        }

        // Create half star if applicable
        if (halfStars) {
            const halfStar = document.createElement('span');
            halfStar.className = "fa fa-star-half-o checked"; // Use half star class
            ratingContainer.appendChild(halfStar);
        }

        // Create empty stars
        for (let i = fullStars + halfStars; i < 5; i++) {
            const emptyStar = document.createElement('span');
            emptyStar.className = "fa fa-star"; // Empty star
            ratingContainer.appendChild(emptyStar);
        }

        // Fade in effect
        const detailsSection = document.getElementById('destinationDetails');
        detailsSection.classList.remove('details-visible'); // Start with hidden
        detailsSection.style.display = "block"; // Ensure it is visible
        setTimeout(() => {
            detailsSection.classList.add('details-visible'); // Add class for fade-in
        }, 10); // Delay to allow for display
    } else {
        console.error("Destination not found:", destination);
    }
}