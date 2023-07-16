({
	callMe : function(component, event, helper) {
        	var newAcc = component.get("v.newAccount");
			var meEvt =  component.getEvent('nickName');
       		 	meEvt.setParams({"acc":newAcc});
        	evt.fire();
	},
    clearMe : function(component, event, helper) {
        	var newAcc = component.get("v.newAccount");
        	component.set("v.newAccount.Name","");
        	component.set("v.newAccount.Phone","");
        	component.set("v.newAccount.Rating","");
		
	}
})