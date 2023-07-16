({
	callMe : function(component, event, helper) {
		var ac = component.get("v.newAccount");
        
        var actions = component.get("c.insertAccount");
        actions.setParams({"acc":ac});
        actions.setCallback(this,function(response){
            var state = response.getState();
            if(state == 'Success')
            {
                var res = response.getReturnValue();
                if(res!= 'failed')
                {
                    var evt = component.getEvent('nickName');
                    // evt.setParams({"aid":res});
                    	evt.fire();
                }
                else
                {
                    alert('Account Creation failed');
                }
                
            }
        })
        $A.enqueueAction(actions);
	}
})