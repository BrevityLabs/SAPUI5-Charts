sap.ui.jsview("ui.ChannelProgram", {

	getControllerName : function() {
		return "ui.ChannelProgram";
	},

	createContent : function(oController) {

		var mModel = this.getModel();
		var dataset = new sap.viz.ui5.data.FlattenedDataset({  
		    dimensions : [  
		      { axis : 1, name : 'Program', value : "{PROGRAM_NAME}" } //,  
		    ],  
		    measures : [  
		  		      { name : 'in millions', value : "{COUNT}" }  
		    ],  
		    data : { path : "/d/results/" }  
	});  
		  
		var oBarChart = new sap.viz.ui5.Column ("oChart1",{  
		    width : "500px",  
		    height : "300px",  
		    title : { visible : true, text : 'Viewership by Program' },  
		    dataset : dataset
		}); 

		oBarChart.setModel(mModel);   
		
		return oBarChart;
	}

});
