({
	show : function(component, event, helper) {
		var a = component.get("v.en");
        var b = component.get("v.ec");
       
        var chid = component.find("one");
        chid.callme(a,b);
       
	}
})