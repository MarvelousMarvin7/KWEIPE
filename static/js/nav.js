function openNav() {
    const sidenav = document.getElementById("mySidenav");
    sidenav.classList.remove("hidden");
    void sidenav.offsetWidth;
    sidenav.classList.remove("translate-x-full");
}

function closeNav() {
    document.getElementById("mySidenav").classList.add("translate-x-full");
}