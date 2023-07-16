({
	callMe : function(component, event, helper) {
		var p = component.get("v.principleAmount");
        var n = component.get("v.timePeriod");
        var r = component.get("v.rateOfInterest");
        var si = (p*n*r)/100;
        component.set("v.result",si);
	}
})