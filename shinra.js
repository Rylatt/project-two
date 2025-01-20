document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check if dark mode preference is saved in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        // Save the user's preference in localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});
//DARK MODE 
//HTML: The button with the ID theme-toggle will be used to toggle the theme.

//CSS: Two sets of styles are defined—light-mode and dark-mode. The body element will switch between these classes.

//JavaScript:

//When the page loads (DOMContentLoaded event), it checks the user's previous theme preference stored in localStorage and applies it.

//The event listener on the button toggles the dark-mode class on the body element.

//The text on the button changes to reflect the current mode.

//The user's theme preference is stored in localStorage to maintain the theme across sessions.





// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//eventlistener for card images to increase in size 
document.addEventListener("DOMContentLoaded", function () {
    const cardImages = document.querySelectorAll('.card-img-top');

    cardImages.forEach(function (img) {
        img.addEventListener('mouseover', function () {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.3s";
        });

        img.addEventListener('mouseout', function () {
            img.style.transform = "scale(1)";
            img.style.transition = "transform 0.3s";
        });
    });
});
//This JavaScript code will add a hover effect to your card images, scaling them
//up slightly when the mouse is over them and returning to their original size when the mouse leaves.
// The transform and transition properties create a smooth animation effect.



//clock 
document.addEventListener("DOMContentLoaded", function () {
    function updateClock() {
        const clock = document.getElementById('digital-clock');
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clock.innerText = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateClock, 1000);
    updateClock(); // Initial call to display clock immediately on load
});

//typewriter
document.addEventListener('DOMContentLoaded', function () {
    const headings = document.querySelectorAll('h1');
    headings.forEach(h1 => {
        const text = h1.innerText;
        let index = 0;
        h1.innerText = ''; // Clear the initial text

        function typeWriter() {
            if (index < text.length) {
                h1.innerText += text.charAt(index) === ' ' ? '\u00A0' : text.charAt(index);
                index++;
                setTimeout(typeWriter, 100); // Adjust the speed as needed
            }
        }

        typeWriter();
    });
});
