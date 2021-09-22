const dataTabsHandlers = document.querySelectorAll("[data-tabs-handler]");
const dataTabsFields = document.querySelectorAll("[data-tabs-field]");

for (let btn of dataTabsHandlers) {
  btn.addEventListener("click", () => {
    dataTabsHandlers.forEach((item) => item.classList.remove("design-list__item_active"));
    btn.classList.add("design-list__item_active");

    dataTabsFields.forEach((content) => {
      if (content.dataset.tabsField == btn.dataset.tabsHandler) {
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
    });
  });
}
