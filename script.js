let currentIndex = 0; // Track the active card
const testItems = document.querySelectorAll(".testItem");
const dots = document.querySelectorAll(".dot");

function switchTest(dot) {
  const targetIndex = parseInt(dot.getAttribute("attr"));
  updateSlider(targetIndex);
}

function updateSlider(index) {
  testItems.forEach((item, i) => {
    item.classList.remove("active");
    item.style.animation = ""; // Reset animation
    if (i === currentIndex) {
      item.style.animation =
        index > currentIndex ? "next1 0.5s forwards" : "prev1 0.5s forwards";
    }
    if (i === index) {
      item.classList.add("active");
      item.style.animation =
        index > currentIndex ? "next2 0.5s forwards" : "prev2 0.5s forwards";
    }
  });
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  currentIndex = index; // Update current index
}

// Next/Previous buttons
document.getElementById("next").addEventListener("click", () => {
  let nextIndex = (currentIndex + 1) % testItems.length;
  updateSlider(nextIndex);
});
document.getElementById("prev").addEventListener("click", () => {
  let prevIndex = (currentIndex - 1 + testItems.length) % testItems.length;
  updateSlider(prevIndex);
});
