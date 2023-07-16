({
	callMe : function(component, event, helper) 
    {
		var nam = component.get("v.name");
        var pho = component.get("v.Phone");
        var rat = component.get("v.rating");
        var ind = component.get("v.Industry");
        
        var action = component.get("c.createAccount");
        
        action.setParams({"name":nam,"phone":pho,"ratg":rat,"industry":ind});
        
        action.setCallback(this,function(response){
            var status = response.getStatus();
            if(status == 'Success')
            {
                var res = response.getReturnValue();
                component.set("v.result",res);
            }
            else if(status == 'Error')
            {
                alert('Please Try again');
            }
        });
        $A.enqueueAction(action);
	}
})