const moreBtns = document.querySelectorAll(".more");
const modal = document.querySelector(".modal");

moreBtns.forEach((moreBtn) => {
  moreBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
		document.body.style.overflow = "hidden";
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal__close") || e.target.classList.contains("overlay")) {
    modal.classList.add("hidden");
		document.body.style.overflow = "auto";
  }
});
