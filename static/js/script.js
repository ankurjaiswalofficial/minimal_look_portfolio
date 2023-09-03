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
