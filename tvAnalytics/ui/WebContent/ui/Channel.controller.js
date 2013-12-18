/**
 * It is a dummy view acting as a view-set in which 3 or 4 views will be displayed. So the controller functions
 * are not required.
 */
sap.ui.controller("ui.Channel", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
*/
	onInit: function() {
		this.byId("idSubmitAction").attachPress(this.submitAction);
		this.byId("idFavAction").attachPress(this.favAction);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
*/
//	onExit: function() {
//
//	},

	submitAction: function(oEvent){	
	     var key_id  = sap.ui.getCore().byId("idKeyCombo").getSelectedKey();
	     var from_date   =  sap.ui.getCore().byId("idFromDate").getYyyymmdd();
	     var to_date     =  sap.ui.getCore().byId("idToDate").getYyyymmdd();

		if(key_id != "" && from_date != "" && to_date != "") {
			var view1 = sap.ui.getCore().byId("idByParam1");
			var cont1 = view1.getController();
			cont1.loadDataAction(key_id, from_date, to_date);				
			
			var view2 = sap.ui.getCore().byId("idByParam2");
			var cont2 = view2.getController();
			cont2.loadDataAction(key_id, from_date, to_date);				
			
			var view3 = sap.ui.getCore().byId("idByParam3");
			var cont3 = view3.getController();
			cont3.loadDataAction(key_id, from_date, to_date);
		
			return true;
		} else {
			alert("Please provide all the mandatory parameters.");
			return false;
		}
	},//end submitAction
	
	favAction: function(oEvent){
		//this method is dummy; would be implemented later.
		alert("Add to favorite has been pressed");
		return true;
	}

});
