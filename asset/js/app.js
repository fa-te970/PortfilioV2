// scroll to top of the page
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
  
// hide scroll up icon on top of the page

window.addEventListener("scroll", () => {
   if (window.pageYOffset > 0) {
      scrollUp.classList.remove("hide");
   } else {
      scrollUp.classList.add("hide");
   }
});