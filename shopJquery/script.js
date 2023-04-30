$(document).ready(function() {
    let detailcodeInput = [];
    var total = "";
    var newtotal;

    $(".card").on("click", function() {
        var imges = $(this).closest(".card").find("img").attr("src");
        console.log(imges);
        var detailname = $(this).closest(".card").find(".pname").text();
        console.log(detailname);
        var detailcode = $(this).closest(".card").find(".code").text();
        console.log(detailcode);

        var price = $(this).closest(".card").find(".price").text();
        console.log(price);

        $(".cart").slideDown("slow", function() {
            detailcodeInput.includes(detailcode) ?
                alert("This Item has already chosen!") :
                $(".calculateitem").append(`
            <form class="row g-3 border mt-2">
            <div class="col-auto">
                <div class="photo">
                <img src="${imges}" />
                <div class="price"> ${price}</div>

                </div>
            </div>
            <div class="col-auto">
                <div class="detail">
                    <div class="fw-bold">${detailname}</div>
                    <div class="fw-bold">${detailcode}</div>

                </div>
            </div>
            <div class="col-auto">
                <select class="m-2 form-select" aria-label="Default select example">
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div class="col-auto delete">
                <i class="fa-solid fa-trash-can ms-auto mt-3"></i>
            </div>
        </form>`);

            total = Number(total) + Number(price);

            console.log(total);

            $(".amount1").text(total);

            if (!detailcodeInput.includes(detailcode)) {
                detailcodeInput.push(detailcode);
                console.log(detailcodeInput);
            }

            $(document).on("click", ".delete", function() {
                $(this).parent().remove();
                var closePrice = $(this).parent().find(".price").text();
                // console.log(closePrice);
                newtotal = $("#grand").text();
                total = Number(newtotal) - Number(closePrice);
                $(".amount1").text(total);

                let count = $(".calculateitem").children().length;
                if (count == 0) {
                    $(".cart").slideUp(2000);
                }
            });
        });
    });
});