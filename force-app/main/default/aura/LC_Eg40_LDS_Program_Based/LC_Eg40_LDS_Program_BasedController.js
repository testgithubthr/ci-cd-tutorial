({
	invoke : function(component, event, helper) 
    {
		component.find("rec").getNewRecord(
            								"Contact",
            								 null,
            								 false,
            $A.getCallback(function(){
                var acc = component.get("v.newCon");
                if(acc == null)
                {
                    alert("Contact initialization failed");
                }
                else
                {
                    alert("Contact Initilization Success");
                }
            })
        )}
})