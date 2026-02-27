$(document).ready(function() {
    // Recuperamos el color rojo
    $("#mi-lista li").css("color", "red");

    // Lógica del botón Ocultar/Mostrar
    $("#btn-toggle").on("click", function() {
        if ($("#mi-lista").is(":visible")) {
            $("#mi-lista").hide();
            $(this).text("Mostrar lista");
        } else {
            $("#mi-lista").show();
            $(this).text("Ocultar lista");
        }
    });

    // Lógica para el Plugin Modal
    // Si el error persiste, usamos la instancia de Bootstrap directamente
    const miModalEl = document.getElementById('miModal');
    
    if (miModalEl) {
        miModalEl.addEventListener('shown.bs.modal', function () {
            console.log("¡Éxito! El modal se abrió y el plugin funciona.");
        });
    }
});