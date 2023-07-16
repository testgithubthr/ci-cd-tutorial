({
	callme : function(component, event, helper) {
		
        // step1 --> call apex class method
        
       var action = component.get("c.createAccount");
        
        // step2--> pass the parameters
        
        action.setParams({"name":"Microsoft Ind Pvt_1","rating":"Hot","phone":"1234567890","industry":"Banking"});
        
        // step3 --> Invoke the method.
        
        action.setCallback(this,function(response){
            
         	var st = response.getState();
          	 if(st == 'SUCCESS')
             {
                 var res = response.getReturnValue();
                 alert(res);
             }
            else if(st == 'Error')
            {
                alert('Please try again');
            }
        })
        
        // step4 --> Enqueue / Pipeline Method.
         
       $A.enqueueAction(action);
	}
})