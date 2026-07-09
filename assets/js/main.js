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


/*=============== CURRENT YEAR OF THE FOOTER ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CUSTOM CURSOR ===============*/


/* Hide custom cursor on links */


/*=============== SCROLL REVEAL ANIMATION ===============*/
