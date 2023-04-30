console.log(document.getElementsByClassName("form-control").length);
let   qrImg = document.querySelector(".qr-code img");



function displayBTN() {
    // e.preventDefault();
    let getInput = "";
    for (let index = 0; index < document.getElementsByClassName("form-control").length; index++) {
        getInput += document.getElementsByClassName("form-control")[index].innerHTML+'\n';
        
    }

    
let preValue;
    if (!getInput || preValue === getInput) return;
    preValue = getInput;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${getInput}`;
   
}

displayBTN();

$("#download").click(
    function() {
        var pdf = new jsPDF({
            orientation: "landscape",
            unit: "mm",
            format: [84, 40]
        });

        pdf.setFontSize(15);
        pdf.text('CraveCookie', 43, 20);

        pdf.setFontSize(10);
        pdf.text('Scan For Menu', 43, 25);

        let base64Image = $('.qr_code img').attr('src');
        console.log(base64Image);

        pdf.addImage(base64Image, 'png', 0, 0, 40, 40);
        pdf.save('generated.pdf');
    }
);
