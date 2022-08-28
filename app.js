/**
 * ==========================
 * ==========================
 *         SIDEBAR
 * ==========================
 * ==========================
 * */
const sidebar = document.querySelector(".sidebar");
const sideBarBtn = document.querySelector(".sidemenu-btn");
const closeSidebarBtn = document.querySelector(".close-sidebar-btn");
const sidebarLinks = [...document.querySelectorAll(".sidebar-link")];

/** shows/hides sidebar based on 'show' property */
const sidebarVisibility = (show) => {
  console.log("nigga ! uh...no ?!");
  if (show) {
    sidebar.classList.add("show-sidebar");
    return;
  }
  sidebar.classList.remove("show-sidebar");
};

/** listeners */
sideBarBtn.addEventListener("click", () => sidebarVisibility(true));
closeSidebarBtn.addEventListener("click", () => sidebarVisibility(false));
sidebarLinks.forEach((btn) => {
  btn.addEventListener("click", () => sidebarVisibility(false));
});
