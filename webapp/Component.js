sap.ui.define([
    "sap/ui/core/UIComponent",
    "tms/tmssystem/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("tms.tmssystem.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");
 var omdeol =this.getModel("ColumnLayout");
                omdeol.setData({FLayout:"OneColumn"})
                omdeol.refresh(true);
            // enable routing
            this.getRouter().initialize();
        }
    });
});