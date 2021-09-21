let featureLinks = document.querySelectorAll(".feature__link");
let featureLists = document.querySelectorAll(".feature-sub");

featureLinks.forEach((featureLink, index) => {
  featureLinks.forEach((featureLink) => {
    featureLink.classList.remove("feature__link_active");
    featureLists[index].classList.add("hidden");
  });

  featureLink.addEventListener("click", () => {
    featureLink.classList.toggle("feature__link_active");
    featureLists[index].classList.toggle("hidden");
  });
});
