"use strict";
var InquilinoGrid;
(function (InquilinoGrid) {
    if (MensajeApp != "") {
        Toast.fire({
            icon: "success", title: MensajeApp
        });
    }
    function OnClickEliminar(id) {
        ComfirmAlert("Desea eliminar el registro?", "Eliminar", "warning", "#3085d6", "d33")
            .then(function (result) {
            if (result.isConfirmed) {
                window.location.href = "Inquilino/Grid?handler=Eliminar&id=" + id;
            }
        });
    }
    InquilinoGrid.OnClickEliminar = OnClickEliminar;
    $("#GridView").DataTable();
})(InquilinoGrid || (InquilinoGrid = {}));
//# sourceMappingURL=Grid.js.map