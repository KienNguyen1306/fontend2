// ================================== active nav ============================================
const navItem = document.querySelectorAll(".nav ul li");
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".nav ul li.active").classList.remove("active");
    item.classList.add("active");
  });
});
// ================================== end active nav ========================================
