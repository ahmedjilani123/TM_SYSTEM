sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("tms.tmssystem.controller.LoginR", {
        onInit() {
            var oModel = new sap.ui.model.json.JSONModel({
        services: [
            {
                name: "Transport Management",
                icon: "sap-icon://shipping-status",
                description: "Manage transport requests efficiently."
            },
            {
                name: "Driver Assignment",
                icon: "sap-icon://employee",
                description: "Assign and manage drivers and vehicles."
            },
            {
                name: "Live Tracking",
                icon: "sap-icon://map",
                description: "Track vehicles in real-time."
            },
            {
                name: "Reports",
                icon: "sap-icon://business-objects-experience",
                description: "Generate transport and usage reports."
            }
        ]
    });
    this.getView().setModel(oModel);
        },
        LoginToMain(){
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("MainApp");
            $.sap.Login=true;
        },
        onRegister(){
              var model = this.getOwnerComponent().getModel("ColumnLayout");
            // model.setData({FLayout:"TwoColumnsMidExpanded"})
            model.setData({FLayout:"MidColumnFullScreen"})
            model.refresh(true);
        },
        CloseFLRegisterPress(){
             var model = this.getOwnerComponent().getModel("ColumnLayout");
            model.setData({FLayout:"OneColumn"})
            model.refresh(true);
        },
        fullScreenRpress(oEvent){
            var model = this.getOwnerComponent().getModel("ColumnLayout");
            if(oEvent.getSource().getProperty("icon") === "sap-icon://full-screen"){
                oEvent.getSource().setIcon("sap-icon://exit-full-screen");
                 model.setData({FLayout:"MidColumnFullScreen"})
            }else{
                oEvent.getSource().setIcon("sap-icon://full-screen");
                 model.setData({FLayout:"TwoColumnsMidExpanded"})
            }
           
            model.refresh(true)
        }
    });
});