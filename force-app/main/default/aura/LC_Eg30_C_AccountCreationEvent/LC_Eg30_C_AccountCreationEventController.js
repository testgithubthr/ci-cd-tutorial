({
	callMe : function(component, event, helper) {
        
        var newAcc = component.get("v.newAccount");
        
        var evt = component.getEvent("Tush");
            evt.setParams({"acc":newAcc});
            evt.fire();
		
	},
    clearMe : function(component, event, helper) {
		
        component.set("v.newAccount.Name","");
        component.set("v.newAccount.Phone","");
        component.set("v.newAccount.Rating","");
	}
})