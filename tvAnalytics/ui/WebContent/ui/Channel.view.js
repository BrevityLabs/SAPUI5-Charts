sap.ui.jsview("ui.Channel", {

	getControllerName : function() {
		return "ui.Channel";
	},

	createContent : function(oController) {

		var layout = new sap.ui.commons.layout.AbsoluteLayout("layout", {width: "1000px", height: "800px"});
		
		//Creating Shell for display
		var header = new sap.ui.ux3.Shell("shell1",{
			appTitle			: "\nReal TAM",
	        appIcon				: "http://www.sap.com/global/images/SAPLogo.gif",
	        appIconTooltip		: "SAP logo",
	        showLogoutButton	: true,
	        showSearchTool		: false,
	        showInspectorTool	: false,
	        showFeederTool		: false,
	        headerItems			: [new sap.ui.commons.TextView({text:"Marketing",tooltip:"Marketing Demo"})],
	        worksetItems		: [new sap.ui.ux3.NavigationItem("forAd",{key:"ADS",text:"Advertisement"}),
	                    		   new sap.ui.ux3.NavigationItem("forChannel",{key:"PROGRAMS",text:"Channel"})],
	        content				: layout
		});
		
		var url = "../../services/rt_odata_channellist.xsodata";
		var oModel = new sap.ui.model.odata.ODataModel(url, false);
		sap.ui.getCore().setModel(oModel);

		/** The drop-down field with all the ads listed alphabetically.
		 */
		var oLabel0		= new sap.ui.commons.Label("idLabel0",{text: "Select a Channel : "});
		var oCombobox	= new sap.ui.commons.ComboBox("idKeyCombo");		
		var oLabel1 	= new sap.ui.commons.Label("idLabel1",{text: "From : "});
		var oFromDate	= new sap.ui.commons.DatePicker("idFromDate", {width: "105px", yyyymmdd: "20130711"});
		var oLabel2 	= new sap.ui.commons.Label("idLabel2",{text: "To : "});
		var oToDate 	= new sap.ui.commons.DatePicker("idToDate", {width: "105px", yyyymmdd: "20131111"});
		var oSubmit_btn	= new sap.ui.commons.Button(this.createId("idSubmitAction"),{text: "Submit", width: "60px"});
		var oFav_btn 	= new sap.ui.commons.Button(this.createId("idFavAction"),{text: "Add as Favourite", width: "100px"});

		oCombobox.setModel(oModel);
		var oItemTemplate1 = new sap.ui.core.ListItem();
		oItemTemplate1.bindProperty("text", "CHANNEL_NAME");
		oItemTemplate1.bindProperty("key","CHANNEL_ID");
		oCombobox.bindItems("/CHANNELLIST", oItemTemplate1);

		layout.addContent(oLabel0,	{left: "5px", 	top: "0px"});
		layout.addContent(oCombobox,	{left: "180px", top: "0px"});
		layout.addContent(oLabel1,	{left: "400px", top: "0px"});
		layout.addContent(oFromDate,	{left: "450px", top: "0px"});
		layout.addContent(oLabel2,	{left: "570px", top: "0px"});
		layout.addContent(oToDate,	{left: "600px", top: "0px"});
		layout.addContent(oSubmit_btn,	{left: "740px", top: "0px"});
		layout.addContent(oFav_btn, 	{left: "810px", top: "0px"});

		/*
		 * Add all the 4 (or 3) chart views.
		 */
		var vByParam1 = sap.ui.view({
			id		 : "idByParam1",
			viewName : "ui.ChannelProgram",
			type	 : sap.ui.core.mvc.ViewType.JS
		});
		var vByParam2 = sap.ui.view({
			id		 : "idByParam2",
			viewName : "ui.ChannelRegion",
			type	 : sap.ui.core.mvc.ViewType.JS
		});
		var vByParam3 = sap.ui.view({
			id		 : "idByParam3",
			viewName : "ui.ChannelAdvert",
			type	 : sap.ui.core.mvc.ViewType.JS
		}); 
		layout.addContent(vByParam1, {left: "0px",   top: "50px"});
		layout.addContent(vByParam2, {left: "500px", top: "50px"});
		layout.addContent(vByParam3, {left: "0px",   top: "400px"});
 
		return header;
	}

});
