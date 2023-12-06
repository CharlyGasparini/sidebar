const xMark = document.querySelector(".sidebar-xmark");
const sidebar = document.getElementsByTagName("aside");
const toggle = document.querySelector(".sidebar-toggle");


xMark.addEventListener("click", () => {
    sidebar.item(0).classList.toggle("show-sidebar");
})

toggle.addEventListener("click", () => {
    sidebar.item(0).classList.toggle("show-sidebar");
})