let featureLinks = document.querySelectorAll(".feature__link");
let featureLists = document.querySelectorAll(".feature-sub");

/* closing all and opening/closing by clicking on the button, without closing all other open ones */
// featureLinks.forEach((featureLink, index) => {
//   featureLinks.forEach((featureLink) => {
//     featureLink.classList.remove("feature__link_active");
//     featureLists[index].classList.add("hidden");
//   });

//   featureLink.addEventListener("click", () => {
//     featureLink.classList.toggle("feature__link_active");
//     featureLists[index].classList.toggle("hidden");
//   });
// });


/* if the button is clicked, the rest are closed */
featureLinks.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    featureLinks.forEach((btnItem, idx) => {
      if (btnItem == btn) {
        btnItem.classList.toggle("feature__link_active");
        featureLists[idx].classList.toggle("hidden");
      } else {
        btnItem.classList.remove("feature__link_active");
        featureLists[idx].classList.add("hidden");
      }
    });
  });
});
