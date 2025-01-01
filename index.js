document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById("headPara").textContent;
    document.getElementById("headPara").textContent = "";

    let i = 0;
    const speed = 100; // The delay in milliseconds between each character
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("headPara").textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } 
        // else {
        //     setTimeout(function() {
        //         document.getElementById("headPara").textContent = "";
        //         i = 0;
        //         typeWriter();
        //     }, 2000); // Optional delay before restarting
        // }
    }

    typeWriter();
});

