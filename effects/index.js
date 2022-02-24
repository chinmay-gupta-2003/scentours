const navCheckbox = document.getElementById("nav_toggle");

const closeNavigation = () => {
  navCheckbox.checked = false;
};

document.querySelectorAll(".nav_list > li").forEach((li) => {
  li.addEventListener("click", () => {
    closeNavigation();
  });
});
