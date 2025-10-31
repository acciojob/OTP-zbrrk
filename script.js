//your JS code here. If required.
const codes = document.querySelectorAll(".code");

// Focus on the first input when page loads
codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener("input", (e) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      // move to next input
      if (idx < codes.length - 1) {
        codes[idx + 1].focus();
      } else {
        e.target.blur(); // last field, no next focus
      }
    } else {
      // clear non-numeric input
      e.target.value = "";
    }
  });

  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (e.target.value === "" && idx > 0) {
        // move focus to previous field
        codes[idx - 1].focus();
        codes[idx - 1].value = "";
      } else {
        e.target.value = "";
      }
    }
  });
});
