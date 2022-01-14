$(document).ready(function () {
    $("button.addition").click(function (event) {
        event.preventDefault();
    let numberOne = parseInt($("input.num1").val());
    let numberTwo = parseInt($("input.num2").val());

    let add = (numberOne + numberTwo);
    $("#output").text(add);
    });
    $("button.subtract").click(function (event) {
        event.preventDefault();
    let numberOne = parseInt($("input.num1").val());
    let numberTwo = parseInt($("input.num2").val());

    let subtract = (numberOne - numberTwo);
    $("#output").text(subtract);
    });
    $("button.multiply").click(function (event) {
        event.preventDefault();
    let numberOne = parseInt($("input.num1").val());
    let numberTwo = parseInt($("input.num2").val());

    let multiplication = (numberOne * numberTwo);
    $("#output").text(multiplication);
    });
    $("button.divide").click(function (event) {
        event.preventDefault();
    let numberOne = parseInt($("input.num1").val());
    let numberTwo = parseInt($("input.num2").val());

    let division = (numberOne / numberTwo);
    $("#output").text(division);
    });
});