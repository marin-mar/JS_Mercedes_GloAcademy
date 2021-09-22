const menuListLinks = document.querySelectorAll(".menu-list__link");
const mainScroll = document.querySelector(".main__scroll");
const scrollLinksArray = [...menuListLinks, mainScroll];

scrollLinksArray.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const linkId = e.target.getAttribute("href").substr(1);
    let sectionById = document.getElementById(linkId);
    sectionById.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
