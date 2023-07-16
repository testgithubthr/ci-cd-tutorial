({
	searchme : function(component, event, helper) {
		
        var name = component.get("v.accName");
        var inds = component.get("v.accInd");
        
        var action = component.get("c.search");
        action.setParams({"accname":name,"accind":inds});
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state == 'SUCCESS')
            {
                var res = response.getReturnValue();
                if(res != 'Error')
                {
                    var evt = $A.get("e.c:LE_Eg33_EventApplicationAccConOpp");
                    evt.setParams({"accId":res});
                    evt.fire();
                }
            }
        });
        $A.enqueueAction(action);
	}
})