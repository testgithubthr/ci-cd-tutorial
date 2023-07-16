({
    callMe : function(component, event, helper) {
        
        var accnt = component.get("v.acc");
        
        var action = component.get("c.callAccount");
        
        action.setParams({"acc":accnt});
        
        action.setCallback(this,function(response){
            
            var st = response.getState();
            if(st == 'SUCCESS');
            {
                var res = response.getReturnValue();
                console.log(res);
            }
        });
        $A.enqueueAction(action);
    }
})