({
	deleteMe : function(component, event, helper) 
    {
        component.find("rec").deleteRecord($A.getCallback(function(response){}))	
	}
})