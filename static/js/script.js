window.addEventListener("scroll", function () {
    var topBtn = document.querySelector('#move-to-top-btn');
    if (window.scrollY > 200) {
        topBtn.classList.add('active');
    } else {
        topBtn.classList.remove('active');
    }
});

function menu_handler() {
    let nav_backdrop = document.getElementsByClassName(
        "navigation_backdrop"
    )[0];
    let backgrop_handler = nav_backdrop.children[0];
    let nav_opener = document.getElementById("nav_opener");
    let nav_hider = document.getElementById("nav_hider");let body = document.body;
    nav_opener.addEventListener("click", (e) => {
        nav_backdrop.classList.toggle("d_flex");
        body.classList.toggle("overflow_me");
    });
    backgrop_handler.addEventListener("click", (e) => {
        nav_backdrop.classList.toggle("d_flex");
        body.classList.toggle("overflow_me");
    });
    nav_hider.addEventListener("click", (e) => {
        nav_backdrop.classList.toggle("d_flex");
        body.classList.toggle("overflow_me");
    });
}

menu_handler();
function color_handler() {
    let color_patch = document.getElementsByClassName("color_patch");
    for(let i of color_patch) {
        i.addEventListener("click", (e1) => {
            document.documentElement.style.setProperty(
                "--site-effective-color",
                i.getAttribute("data-color")
            );
        });
    };
}
color_handler()

function validateAndSend() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const budget = document.getElementById('budget').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || budget === '' || message === '') {
        alert('Please fill in all required fields.');
    } else {
        const phNo = document.getElementById('ph_no').value || 'Not Provided';

        const mailtoLink = `mailto:recipient@example.com?subject=Portfolio Contact Message%20from%20${name}%20-%20${phNo}&body=Name:%20${name}%0D%0APhone%20Number:%20${phNo}%0D%0AEmail:%20${email}%0D%0ABudget:%20${budget}%0D%0AMessage:%20${message}`;

        window.location.href = mailtoLink;
    }
}

function goToTop() {
    var gotopBtn = document.querySelector('#move-to-top');
    var topBtn = document.querySelector('#move-to-top-btn');
    
    topBtn.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToTop(800);
    });
};

function scrollToTop(duration) {
    const initialY = window.scrollY;
    const yOffset = -initialY;
    const start = performance.now();

    const animateScroll = function(currentTime) {
        const elapsed = currentTime - start;
        const scroll = easeInOut(elapsed, initialY, yOffset, duration);
        window.scrollTo(0, scroll);

        if (elapsed < duration) {
            requestAnimationFrame(animateScroll);
        } else {
            window.scrollTo(0, 0);
        }
    };

    requestAnimationFrame(animateScroll);
}

function easeInOut(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}
goToTop();

