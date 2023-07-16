({
	gm : function(component, event, helper) {
		component.set("v.msg1","Good Morning");
        Helper.myHelper(component);
	},
    gn : function(component, event, helper) {
		component.set("v.msg1","Good Evening");
        Helper.myHelper(component);
	}
})