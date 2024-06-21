$(document).on("pagecreate", function() {
    // Calcular área do Triângulo
    $("#triangulo-form").submit(function(event) {
        event.preventDefault();
        let base = parseFloat($("#triangulo-base").val());
        let altura = parseFloat($("#triangulo-alt
