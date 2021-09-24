function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
let dx = document.getElementById('hamburgerBtn');
dx.onclick = toggleMenu; 