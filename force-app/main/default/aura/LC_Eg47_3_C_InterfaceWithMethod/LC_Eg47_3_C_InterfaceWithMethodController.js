({
	invoke : function(component, event, helper) 
    {
		var params = event.getParam('arguments'); // This will give the data from the calling component ( parent )
        var nm = params.name;
        var ct = params.city;
        
        component.set("v.empname",nm);
        component.set("v.empcity",ct);
	}
})