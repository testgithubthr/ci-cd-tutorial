({
	callMe : function(component, event, helper) {
		
        var amt=component.get("v.pri");
        var term=component.get("v.term");
        var rate=component.get("v.rate");
        var int=(amt*term*rate)/100;
        component.set("v.res",int);
	}
})