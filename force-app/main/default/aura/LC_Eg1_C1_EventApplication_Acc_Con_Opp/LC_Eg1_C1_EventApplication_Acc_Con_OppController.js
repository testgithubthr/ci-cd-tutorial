({
	searchMe : function(component, event, helper) {
		var name = component.get("v.accName");
        var inds = component.get("v.accIndustry");
        
        var action = component.get("c.search");
        action.setParams({"accname":name,"accind":inds});
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state == 'Success')
            {
               var result = response.getReturnValue();
                if(result != 'Error')
                {
                    var evt = $A.get("e.c:EVT_Eg1_EventApplication_Acc_Con_Opp");
                    console.log(res);
                    evt.setParams({"accId":result});
                    evt.fire();
                }
            }
        });
        $A.enqueueAction(action);
	}
})