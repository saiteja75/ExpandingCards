let container = document.getElementById('container')

container.addEventListener("click", function(e) {
    let target = e.target
    if (target.className.includes("item") && !target.className.includes("active")) {
        let removeActive = document.getElementsByClassName('active');
        removeActive[0].classList.remove('active');
        target.classList.add("active")
    }
})