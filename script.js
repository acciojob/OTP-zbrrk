const codes = document.querySelectorAll(".code");

// focus on the first input when page loads
window.addEventListener("load", () => codes[0].focus());

codes.forEach((input, index) => {
  input.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      input.value = "";
      setTimeout(() => {
        if (index < codes.length - 1) {
          codes[index + 1].focus();
        }
      }, 10);
    } else if (e.key === "Backspace") {
      input.value = "";
      if (index > 0) {
        codes[index - 1].focus();
      }
    }
  });
});
