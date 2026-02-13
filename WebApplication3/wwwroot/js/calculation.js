// Run this when the page is fully loaded
$(function () {

    // When the Calculate button is clicked
    $("#calcBtn").click(function () {

        // Get the number of hours and convert to float
        const hours = parseFloat($("#hoursInput").val());

        // Get the rate per hour and convert to float
        const rate = parseFloat($("#rateInput").val());

        // Check if hours is invalid or less than or equal to 0
        if (isNaN(hours) || hours <= 0) {

            // Show error message
            $("#hoursError").show();

            // Clear the total output
            $("#totalOutput").val("");

            return; // Stop the function
        }

        // Hide error message if input is valid
        $("#hoursError").hide();

        // Calculate total and format to 2 decimals
        $("#totalOutput").val("$" + (hours * rate).toFixed(2));
    });
});