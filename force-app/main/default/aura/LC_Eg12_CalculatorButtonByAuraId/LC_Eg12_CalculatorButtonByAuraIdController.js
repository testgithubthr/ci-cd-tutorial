({
	callMe : function(component, event, helper) {
		
        var evt = event.getSource();    // capture / get the source of the event where it occured in component
        var aid = evt.getLocalId();		// get the localId of that event.
        
        var aval =component.find("aval").get("v.value");
        var bval =component.find("bval").get("v.value");
        
        if(aid=='add')
        {
            var r = parseInt(aval)+parseInt(bval);
                component.find("res").set("v.value",r);
        }
        else if(aid=='sub')
        {
             var r = parseInt(aval)-parseInt(bval);
                component.find("res").set("v.value",r);
        }
        else
        {
             var r = parseInt(aval)*parseInt(bval);
                component.find("res").set("v.value",r);
        }
	}
})