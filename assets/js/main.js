/*=============== HOME SPLIT TEXT ===============*/
const { animate, text, stagger } = anime

const { chars: chars1 } = text.split('.home-profession-1', { chars: true })
const { chars: chars2 } = text.split('.home-profession-2', { chars: true })

animate(chars1, {
    y: [
        { to: ['100%', '0%'] },
        { to: '-100%', delay: 4000, ease: 'in(3)' }
    ],
    duration: 900,
    ease: 'out(3)',
    delay: stagger(80),
    loop: true,
});

animate(chars2, {
    y: [
        { to: ['100%', '0%'] },
        { to: '-100%', delay: 4000, ease: 'in(3)' }
    ],
    duration: 900,
    ease: 'out(3)',
    delay: stagger(80),
    loop: true,
});

/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper('.projects-swiper', {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    speed: 600,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});

/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const targetSelector = tab.dataset.target,
            targetContent = document.querySelector(targetSelector)

        // Disable all content and active tabs
        tabContents.forEach((content) => content.classList.remove('work-active'))
        tabs.forEach((t) => t.classList.remove('work-active'))

        // Active the tab and corresponding content
        tab.classList.add('work-active')
        targetContent.classList.add('work-active')
    })
})

/*=============== SERVICES ACCORDION ===============*/
const servicesButtons = document.querySelectorAll('.services-button')

servicesButtons.forEach(button => {
    const servicesCard = button.parentNode
    const servicesInfo = servicesCard.querySelector('.services-info')

    if (servicesCard.classList.contains('services-open')) {
        servicesInfo.style.height = servicesInfo.scrollHeight + 'px'
    } else {
        servicesInfo.style.height = '0'
    }

    button.addEventListener('click', () => {
        const servicesCards = document.querySelectorAll('.services-card')
        const currentCard = button.parentNode
        const currentInfo = currentCard.querySelector('.services-info')
        const isCardOpen = currentCard.classList.contains('services-open')

        servicesCards.forEach(card => {
            card.classList.remove('services-open')
            card.classList.add('services-close')

            const info = card.querySelector('.services-info')
            info.style.height = '0'
        })

        if (!isCardOpen) {
            currentCard.classList.remove('services-close')
            currentCard.classList.add('services-open')
            currentInfo.style.height = currentInfo.scrollHeight + 'px'
        }
    })
})

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/

//Duplicate images to make the animation work

const tracks = document.querySelectorAll('.testimonials-content')

tracks.forEach(track => {
    const cards = [...track.children] // spread to make a static copy

    // Duplicate cards only once
    for (const card of cards) {
        track.appendChild(card.cloneNode(true))
    }
})

/*=============== COPY EMAIL IN CONTACT ===============*/

const copyBtn = document.getElementById('contact-btn'),
    copyEmail = document.getElementById('contact-email').textContent

copyBtn.addEventListener('click', () => {
    // Use the clipboard API to copy text
    navigator.clipboard.writeText(copyEmail).then(() => {
        copyBtn.innerHTML = 'Email copied <i class="ri-check-line"></i>'

        //Restore the original text
        setTimeout(() => {
            copyBtn.innerHTML = 'Copy email <i class="ri-file-copy-line"></i>'
        }, 2000)
    })
})

/*=============== CURRENT YEAR OF THE FOOTER ===============*/
const textYear = document.getElementById('footer-year'),
    currentYear = new Date().getFullYear()

// Each year it ts updated to the current year
textYear.textContent = currentYear

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    // We get the position by scrolling down
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const id = section.id; // id of each section
        const top = section.offsetTop - 100; // Distance from the top edge
        const height = section.offsetHeight; // Element height
        const link = document.querySelector(`.nav-menu a[href="#${id}"]`); // id nav link

        if (!link) return;

        const isActive =
            scrollY >= top &&
            scrollY < top + height;

        link.classList.toggle('active-link', isActive);
    });
};

window.addEventListener('scroll', scrollActive);

scrollActive();

/*=============== CUSTOM CURSOR ===============*/
const cursor = document.querySelector('.cursor')

let mouseX = 0, mouseY = 0 // Store mouse position

const cursorMove = () => {
    // Position the cursor
    cursor.style.left = `${mouseX}px`
    cursor.style.top = `${mouseY}px`
    cursor.style.transform = 'translate(-50%, -50%)'

    // Update the cursor animation
    requestAnimationFrame(cursorMove)
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
})

cursorMove()

/* Hide custom cursor on links */

const a = document.querySelectorAll('a')

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hide-cursor')
    })
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hide-cursor')
    })
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    reset: true, // Repeat animations
});

/* Home */
sr.reveal('.home-image');
sr.reveal('.home-data', {
    origin: 'bottom',
    delay: 900,
});
sr.reveal('.home-info', {
    origin: 'bottom',
    delay: 1200,
});
sr.reveal('.home-social, .home-cv', {
    delay: 1500,
});

/* About */
sr.reveal('.about-data', {
    origin: 'left',
});
sr.reveal('.about-image', {
    origin: 'right',
});

/* Sections */
sr.reveal(
    '.projects-container, .work-container, .testimonials-container, .contact-container'
);

/* Services */
sr.reveal('.services-card', {
    interval: 100,
});
