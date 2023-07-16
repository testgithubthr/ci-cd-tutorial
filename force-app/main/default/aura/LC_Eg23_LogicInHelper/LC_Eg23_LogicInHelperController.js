({
	cllme : function(component, event, helper) {
		
        helper.myHelper(component);
	},
    clearme : function(component, event, helper) {
		
        component.set("v.name","");
    	component.set("v.rating","");
    	component.set("v.phone","");
    	component.set("v.industry","");
	}
})