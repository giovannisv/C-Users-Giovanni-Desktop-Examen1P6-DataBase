"use strict";
var InquilinoEdit;
(function (InquilinoEdit) {
    var Entity = $("#AppEdit").data("entity");
    var Formulario = new Vue({
        data: {
            Formulario: "#FormEdit",
            Entity: Entity,
        },
        methods: {
            InquilinoService: function (entity) {
                console.log(entity);
                if (entity.Id_TipoInquilino == null) {
                    return App.AxiosProvider.InquilinoObtener(entity);
                }
                else {
                    return App.AxiosProvider.InquilinoActualizar(entity);
                }
            },
            save: function () {
                if (BValidateData(this.Formulario)) {
                    Loading.fire("Guardando");
                    this.InquilinoService(this.Entity).then(function (data) {
                        Loading.close();
                        if (data.CodeError == 0) {
                            Toast.fire({ title: "Se guardo el registro", icon: "success" }).then(function () { return window.location.href = "Inquilino/Grid"; });
                        }
                        else {
                            Toast.fire({ title: data.MsgError, icon: "error" });
                        }
                    }).catch(function (c) { return console.log(c); });
                }
                else {
                    Toast.fire({ title: "Por favor complete los campos requeridos", icon: "error" });
                }
            }
        },
        mounted: function () {
            CreateValidator(this.Formulario);
        }
    });
    Formulario.$mount("#AppEdit");
})(InquilinoEdit || (InquilinoEdit = {}));
//# sourceMappingURL=Edit.js.map