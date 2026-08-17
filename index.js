document.addEventListener("DOMContentLoaded", function () {
  const elements = [
    { id: "line1", text: "Hi, I am" },
    { id: "line2", text: "MOHD SAAD" },
    { id: "line3", text: "Web Developer" },
    {
      id: "line4",
      text: "I have built several projects including \"Depression Prediction\", \"Employee Management System\" . Beyond Web Development, I am exploring DSA, C++,Python and Calling LLM through API . Currently a Final-year Computer Science student at Jamia Hamdard University "
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
