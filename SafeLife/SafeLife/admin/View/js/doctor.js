
$("#search").click(function () {
    if ($("#searchText").val() == "") {
        alert("Search Something!");
    } else {
        let type = "";
        if ($("#searchName").prop("checked")) {
            type = "name";
        } else {
            type = "phone";
        }
        let sendData = {
            searchText: $("#searchText").val(),
            searchType : type
        };

        $.ajax({
            url: "../../Controller/doctor/searchController.php",
            type: "POST",
            data: sendData,
            
            success: function (res) {
                let doctors = JSON.parse(res);
                $("#searchResult").empty();
                let count = 1;
                for (const doctor of doctors) {

                    let gender =  (doctor.gender == "0") ? "Male" : "Female";
                    
                    $("#searchResult").append(
                        `
                        <tr>
                            <td>${count++}</td>
                            <td>Dr.${doctor.name}</td>
                            <td>${doctor.phone}</td>
                            <td>${doctor.special}</td>
                            <td>${doctor.dutytime}</td>
                            <td>${doctor.sama}</td>
                            <td>${gender}</td>
                            <td>${doctor.address}</td>
                            <td>${doctor.department}</td>
                        </tr>
                        `
                    );
                };
            },
            error: function (err) {
                alert(err);
            }
        })
    }
})