({
	searchMe : function(component, event, helper) {
		
        var searchtext = component.get("v.st");
        
        var action = component.get("c.getAccount");
        
        action.setParams({"searchText":searchtext})
        
        action.setCallback(this,function(response){
            
            var st = response.getState();
            
            if(st == 'SUCCESS')
            {
                var res = response.getReturnValue();
                component.set("v.acc",res);
            }
        })
        $A.enqueueAction(action);
	}
})