sap.ui.jsview("ui.ChannelRegion", {

	getControllerName : function() {
		return "ui.ChannelRegion";
	},

	createContent : function(oController) {

		var mModel = this.getModel();
		var dataset = new sap.viz.ui5.data.FlattenedDataset({  
		    dimensions : [  
		      { axis : 1, name : 'Region', value : "{REGION}" } //,  
		    ],  
		    measures : [  
		  		      { name : 'in millions', value : "{COUNT}" }  
		    ],  
		    data : { path : "/d/results/" }  
	});  
		  
		var oPieChart = new sap.viz.ui5.Pie ("oChart2",{  
		    width : "500px",  
		    height : "300px",  
		    title : { visible : true, text : 'Viewership by Region' },  
		    dataset : dataset
		}); 

		oPieChart.setModel(mModel);   
		
		return oPieChart;
	}

});
