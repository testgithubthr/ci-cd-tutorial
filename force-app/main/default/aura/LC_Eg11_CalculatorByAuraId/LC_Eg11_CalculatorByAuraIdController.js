({
	addMe : function(component, event, helper) {
		var a1 = component.find("aval").get("v.value");
        var b1 = component.find("bval").get("v.value");
        
        var r = parseInt(a1)+parseInt(b1);
        component.find("res").set("v.value",r);
	},
    subMe : function(component, event, helper) {
		var a1 = component.find("aval").get("v.value");
        var b1 = component.find("bval").get("v.value");
        
        var r = parseInt(a1)-parseInt(b1);
        component.find("res").set("v.value",r);
	},
    mulMe : function(component, event, helper) {
		var a1 = component.find("aval").get("v.value");
        var b1 = component.find("bval").get("v.value");
        
        var r = parseInt(a1)*parseInt(b1);
        component.find("res").set("v.value",r);
	}
})