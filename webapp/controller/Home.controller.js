sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("tms.tmssystem.controller.Home", {
        onInit() {
         
        },
        onAfterRendering() {
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.loadData("model/OrderStatus.json");
           oModel.attachRequestCompleted((oEvent) => {
            this.getView().setModel(oModel, "OrderStatusM");
           })
          
        }
    });
});