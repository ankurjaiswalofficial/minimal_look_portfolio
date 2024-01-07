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

function sendMail() {
    const name = document.getElementById('name').value;
    const phNo = document.getElementById('ph_no').value;
    const email = document.getElementById('email').value;
    const budget = document.getElementById('budget').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:ankurjaiswalofficial@gmail.com?subject=Portfolio-Contact-Form-Message%20from%20${name}%20-%20${phNo}&body=Name:%20${name}%0D%0APhone%20Number:%20${phNo}%0D%0AEmail:%20${email}%0D%0ABudget:%20${budget}%0D%0AMessage:%20${message}`;

    window.location.href = mailtoLink;
}
