$(document).ready(function() {
    $("#addBtn").click(function() {
        let item = $("#item").val();
        let products = $("#products").val();
        let price = $("#price").val();
        let numberOfstock = $("#numberOfstock").val();
        // <img src=" ./images/${images}"  class="card-img-top" alt="..."></img>
        $("#cards").append(`<div class="card  col-md-4  m-1" style="width: 18rem">
        <i class="fa-solid fa-trash-can ms-auto mt-3"></i>
        <div class="card-body">
            <p>${products}</p>
            
            <img   class="card-img-top" alt="...">
            
            <h5 class="card-title">${item}</h5>
            <h6 class="card-subtitle mb-2 text-muted">$ ${price}</h6>
            <span class="badge rounded-pill bg-success">${numberOfstock}</span>
        </div>
    </div`);
        if (products == "necklace") {
            // var images = "necklace.jpg";
            $("img:last").attr("src", " ./images/necklage.jpg");
        } else if (products == "earrings") {
            // var images = "earring.jpg";

            $("img:last").attr("src", " ./images/earring.jpg");
        } else {
            // var images = "braclet.jpg";

            $("img:last").attr("src", " ./images/braclet.jpg");
        }

        $("#item").val("");
        $("#products").val("");
        $("#products").val("");
        $("#price").val("");
        $("#numberOfstock").val("");

        $("#cards").on("click", ".card", function() {
            $(this).remove();
        });
    });
});

// teacher 's answer

// // $(document).ready(function () {
// //     $("#add").click(function () {
// //         $(".product").append('<div class="card">' +'<div class="delete"><ion-icon name="trash-outline"></ion-icon></div>' +' <div class="productimg">' +'<img src="bag.png" class="pimg" />' +'</div>' +'<div class="detail">' +'<div class="pname">' + $("#pname").val() + '</div>' +'<div class="price">$' + $("#pprice").val() + '</div>' +'<button class="stock">' + $("#stock").val() + '</button>' +'</div>' +'</div>'
// //         )
// //     });

// //     $(document).on("click", ".delete", function () {
// //         $(this).closest('.card').remove();
// //     })
// // });