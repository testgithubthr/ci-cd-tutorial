({
	callMe : function(component, event, helper) {
		var amt = component.get("v.pri");
        var term = component.get("v.term");
        var rate = component.get("v.rate");
        
        var int = (amt*rate*term)/100;
        
        
        if(int>10)
        {
            component.set("v.flag",true);
            
        }
        else
        {
            omponent.set("v.flag",false);
        }
         component.set("v.res",int);
	}
})