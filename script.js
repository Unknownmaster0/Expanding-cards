const divContainer = document.querySelectorAll(".box");

// now when some div is pressed then need to expand that part.

// acquiring the expand logic.
divContainer.forEach((element) => {
  element.addEventListener("click", function () {
    removeCrntActive();
    element.classList.add("active");
  });
});

// removeCrntActive utility
function removeCrntActive() {
  divContainer.forEach((element) => {
    element.classList.remove("active"); // only able to remove the class from where it present.
  });
}
