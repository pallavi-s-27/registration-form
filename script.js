$(document).ready(function() {
    $("#registrationForm").submit(function(event) {
        event.preventDefault();

        
        $.ajax({
            url: "process.php",
            type: "POST",
            data: $(this).serialize(),
            success: function(response) {
                $("#result").html(response);
                $("#registrationForm").hide();
            },
            error: function() {
                $("#result").html("Error submitting form.");
            }
        });
    });
});