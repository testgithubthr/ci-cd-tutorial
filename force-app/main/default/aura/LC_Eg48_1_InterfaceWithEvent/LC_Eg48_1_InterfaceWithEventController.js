({
	callme : function(component, event, helper) 
    {
		var evt = component.getEvent("InterfaceEvent");
        evt.setParams({"empname":"Tushar"});
        evt.fire();
	},
    show :function(component, event, helper)
    {
        alert('The Event is Fired by this Component');
    }
})