// ================================== active nav ============================================
const navItem = document.querySelectorAll(".nav ul li");
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".nav ul li.active").classList.remove("active");
    item.classList.add("active");
    nav.classList.remove("hide");
  });
});
// ================================== end active nav ========================================

// ==================== manu =====================

var menu = document.querySelector(".menu i");
var close = document.querySelector(".close");
var nav = document.querySelector(".nav");
menu.addEventListener("click", () => {
  nav.classList.add("hide");
});

close.addEventListener("click", () => {
  nav.classList.remove("hide");
});

window.addEventListener('scroll',()=>{
  nav.classList.remove("hide");

})

// ====================end menu ==============================
// ========================== slide feefback=================
var feefbackItems = document.querySelectorAll(".feefback-item");
var dot1 = document.querySelectorAll(".dot1");
var dot2 = document.querySelectorAll(".dot2");
var dot3 = document.querySelectorAll(".dot3");

function feefbackSlide3(btn, value) {
  btn.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      feefbackItems.forEach((item) => {
        console.log(`translateX(${(index + 1) * 100}%)`);
        item.style.transform = `translateX(-${value}%)`;
      });
    });
  });
}

feefbackSlide3(dot1, 0);
feefbackSlide3(dot2, 100);
feefbackSlide3(dot3, 200);

// ==========================end slide feefback=================

// ====================populer slide ===============

var populerSlide = document.querySelector(".course-list");
var btnNext = document.querySelector(".controls-btn.next");
var btnPrev = document.querySelector(".controls-btn.prev");
var courseItem = document.querySelector(".course-item");
btnNext.addEventListener("click", () => {
  var withItem = courseItem.offsetWidth;
  populerSlide.scrollLeft += withItem + 30;
});

btnPrev.addEventListener("click", () => {
  var withItem = courseItem.offsetWidth;
  populerSlide.scrollLeft -= withItem + 30;
});
// ==================== end populer slide ===============

// ========================= blog slide=====================
var dotsBlogs = document.querySelectorAll(".blogdot");
var blogItem = document.querySelectorAll(".blog-item");

dotsBlogs.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    document.querySelector(".blogdot.active").classList.remove("active");
    dot.classList.add("active");
    blogItem.forEach((item) => {
      // item.style.transform = `translateX(calc(-${index * 300}% - ${
      //   index * 90
      // }px))`;
      let widthContainer = document.querySelector(".container").offsetWidth;
      item.style.transform = `translateX(-${
        index * widthContainer + index * 30
      }px)`;
    });
  });
});

// =========================== end blog ===========================
