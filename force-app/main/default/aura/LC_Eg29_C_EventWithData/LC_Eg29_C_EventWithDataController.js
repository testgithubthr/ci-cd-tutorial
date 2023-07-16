({
	childMe : function(component, event, helper) {
		var nmmm = component.get("v.nm");
        var evt = component.getEvent("Second");
       		evt.setParams({"empName":nmmm});
        	evt.fire();
	}
})