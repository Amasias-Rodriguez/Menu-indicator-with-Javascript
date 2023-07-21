
let marker = document.querySelector('#indicator');
let nav = document.querySelector('nav');
let item = document.querySelectorAll('nav a');

nav.onclick = function () {
    marker.classList.toggle('change');
}

function indicator(e) {
    marker.computedStyleMap.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
    marker.style.display = "block";
    marker.display.filter = 'hue-rotate(' + Math.random() * 360 + 'deg)'
}

item.forEach(link => {
    link.addEventListener("click", (e) => {
        indicator(e.target);
    })
})

function addActiveClass() {
    item.forEach((i) =>
        i.classList.remove('active'));
    this.classList.add('active');
}
