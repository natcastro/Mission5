$(function () {
    $("#calcBtn").click(function () {
        const hours = parseFloat($("#hoursInput").val());
        const rate = parseFloat($("#rateInput").val());

        if (isNaN(hours) || hours <= 0) {
            $("#hoursError").show();
            $("#totalOutput").val("");
            return;
        }

        $("#hoursError").hide();
        $("#totalOutput").val("$" + (hours * rate).toFixed(2));
    });
});