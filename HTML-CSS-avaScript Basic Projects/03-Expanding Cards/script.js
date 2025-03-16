const panels = document.querySelectorAll(".panel");

// will give node list of panels when we will check in console
// console.log(panels)

panels.forEach((panel) => {
  // console.log(panel)
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
