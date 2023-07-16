({
	callme : function(component, event, helper)
    {
		var acc = component.get("v.newAccount");     // all the data pulled and stored in acc
        
        // How do we call server side controller
        
        	var action = component.get("c.InsertAccount");     // call apex class method
        	
       		 action.setParams({"acc":acc});						// Input component data passes to apex class method
        
        	action.setCallback(this,function(response){
                
                var state = response.getState();  // this will give whether client side controller is able to successfully contact to the server side controller or not.if success then only fire the event otherwisw we will not fire the event.
                
                if(state == 'SUCCESS')
                {
                    var res = response.getReturnValue();
                    alert(res);
                   
                   if(res != 'failed')
                   {
                        var evt = component.getEvent("Tush");
                    
                   		// evt.setParams({"aid":res});
                   		
                       evt.fire();
                   }
                    else
                    {
                        alert('Account creation failed');
                    }
                }
                
                
            });
        
        
        	$A.enqueueAction(action);
	},
    clearme : function(component, event, helper)
    {
		
	}
})