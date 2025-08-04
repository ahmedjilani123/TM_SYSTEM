sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (Controller) => {
  "use strict";
var sValue = 0; 
  return Controller.extend("tms.tmssystem.controller.Shipment", {
      onInit() {
        this.wizard = this.byId("ShipmentWizard");
        this.oProgressIndicator = this.byId("ShipmentProcessBar");
      },
      NextWizardPress(oEvent){  
        sValue = sValue + 25;
        if(sValue >= 100) sValue = 100;
        	this.oProgressIndicator.setDisplayValue(sValue + '%');
			this.oProgressIndicator.setPercentValue(+sValue);
        this.wizard.nextStep();
      },
        PreviousWizardPress(oEvent){
            this.wizard.previousStep();
    }
  });
});