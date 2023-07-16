({
	showMe : function(component, event, helper) {
        
        // step1--> get the method
        
        var action = component.get("c.GiveData");
        
        // step2 --> pass the parameter (from client I am not sending to the server)
         
        // step3 -->Invoke / call the Function / Method 
        
        action.setCallback(this,function(response){
            
                                                    var state = response.getState();   // 3.1 --> Get the status of the Invoke  
                                                    
                                                    if(state == 'SUCCESS')
                                                    {
                                                        var res = response.getReturnValue();  // 3.2 --> Get the result / val/ rresponse from server side controller.
                                                        component.set("v.acc",res);
                                                    }
                                                });
        // step4 --> enqueue Action
        
        	$A.enqueueAction(action);
	},
    callMe : function(component, event, helper) {
		
	}
})