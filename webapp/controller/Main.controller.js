sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/Fragment"
], (Controller,Fragment) => {
  "use strict";

  return Controller.extend("tms.tmssystem.controller.Main", {
      onInit() {
 const router = this.getOwnerComponent().getRouter();
            router.getRoute("MainApp").attachPatternMatched(this._onRouteMatched, this);
      },
      _onRouteMatched(){
        var todayDate = new Date();
        var DateT = todayDate.getDate();
        var DateModel = this.getOwnerComponent().getModel("CMNo");
        DateModel.setProperty("/todayDate",DateT);
        DateModel.refresh(true);
        if($.sap.Login){
   var oModel = this.getOwnerComponent().getModel("Accessibility")
       oModel.setProperty("/key1","Home");
       oModel.refresh(true);
       $.sap.Login=false;
        }else{
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteLoginR");
        }
    
      },
      LogOutPress(){
         const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteLoginR");
      },

      onItemSelect(oEvent){
        const oRouter = this.getOwnerComponent().getRouter();
        const sSelectedItem = oEvent.getSource().getSelectedKey();
      oRouter.navTo(sSelectedItem);
      },
      	handlePopoverPress: function (oEvent) {
			var oButton = oEvent.getSource(),
				oView = this.getView();

			if (!this._pPopover) {
				this._pPopover = Fragment.load({
					id: oView.getId(),
					name: "tms.tmssystem.fragments.Calender",
					controller: this
				}).then(function(oPopover) {
					oView.addDependent(oPopover);
					return oPopover;
				});
			}
			this._pPopover.then(function(oPopover) {
				oPopover.openBy(oButton);
			});
		},
    handleCancelPress(oEvent){
      oEvent.getSource().getParent().getParent().close();
    },
    _EmailMessagePress(){
 this._DialogOpenComman("Email");
    },
    _BellPressMessage(){
   this._DialogOpenComman("Message");
    },
    CloseMessEmailDialogPre(oEvent){
      oEvent.getSource().getParent().close();
        },
        _DialogOpenComman(url){
 var  	oView = this.getView();
      this.MessageDialog=this.loadFragment({
        name:`tms.tmssystem.fragments.${url}`,
        controller:this
      }).then((odialog)=>{
oView.addDependent(odialog);
return odialog;
      })

      this.MessageDialog.then((oDialog)=>{
        oDialog.open();
      })
        }
  });
});