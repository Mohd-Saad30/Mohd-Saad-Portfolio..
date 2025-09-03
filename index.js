document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById("headPara").textContent;
    document.getElementById("headPara").textContent = "";

    let i = 0;
    const speed = 100; 
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("headPara").textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } 
    }
    const colorGenerator=()=>{
        const hex="0123456789ABCDEF";
        let word='#'
        for (let i =0 ;i<6;i++){
         let random=hex[Math.floor(Math.random()*16)];
         word+=random;

        }
        return word;  
    };

    setInterval(() => {
    document.getElementById('textSaad').style.color=colorGenerator()
    }, 1000);


    typeWriter();
});

