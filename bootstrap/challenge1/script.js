$(document).ready(function() {
    $("#addBtn").click(function() {
        let name = $("#stdname").val();
        let position = $("#position").val();
        let profile = $("#profile").val();
        // console.log(name);
        // console.log(position);
        // console.log(profile);

        $("#cards").append(` <div class="card  col-md-4  m-2" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${position}</h6>
                <p class="card-text">
                ${profile}
                </p>
            </div>
        </div>`);
        $("#stdname").val("");
        $("#position").val("");
        $("#profile").val("");

        let count = $("#cards").children().length;
        console.log(count);

        $("h2>span").text(count);
    });
});