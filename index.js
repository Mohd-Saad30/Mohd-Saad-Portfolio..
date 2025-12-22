document.addEventListener("DOMContentLoaded", function () {
  const elements = [
    { id: "line1", text: "Hi, I am" },
    { id: "line2", text: "MOHD SAAD" },
    { id: "line3", text: "Frontend Developer" },
    {
      id: "line4",
      text: "Frontend Engineering for web and exploring backend too. Currently a Computer Science student at Jamia Hamdard University.",
    },
  ];

  elements.forEach((item) => {
    document.getElementById(item.id).textContent = "";
  });

  let elementIndex = 0;
  let charIndex = 0;
  const typingSpeed = 100;
  const lineDelay = 100;

  function typeWriter() {
    if (elementIndex < elements.length) {
      let currentItem = elements[elementIndex];

      let currentElement = document.getElementById(currentItem.id);

      if (charIndex < currentItem.text.length) {
        currentElement.textContent += currentItem.text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        
        elementIndex++;
        charIndex = 0;
        setTimeout(typeWriter, lineDelay);
      }
    }
  }

  typeWriter();
});
