sap.ui.jsview("ui.ChannelAdvert", {

	getControllerName : function() {
		return "ui.ChannelAdvert";
	},

	createContent : function(oController) {

		var mModel = this.getModel();
		var dataset = new sap.viz.ui5.data.FlattenedDataset({  
		    dimensions : [  
		      { axis : 1, name : 'Advertisement', value : "{AD_NAME}" } //,  
		    ],  
		    measures : [  
		  		      { name : 'in millions', value : "{COUNT}" }  
		    ],  
		    data : { path : "/d/results/" }  
	});  
		  
		var oBarChart = new sap.viz.ui5.Column ("oChart3",{  
		    width : "500px",  
		    height : "300px",  
		    title : { visible : true, text : 'Viewership by Advertisement' },  
		    dataset : dataset
		}); 

		oBarChart.setModel(mModel);   
		
		return oBarChart;
	}

});
