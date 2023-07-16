({
	addMe : function(component, event, helper) {
        var a = component.get("v.aval");
        var b = component.get("v.bval");
        var r = parseInt(a)+ parseInt(b);
        
        component.set("v.result",r);
	},
    subMe : function(component, event, helper) {
		var a = component.get("v.aval");
        var b = component.get("v.bval");
        var r = a-b;
        component.set("v.result",r);
	}
    
})