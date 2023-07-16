({
	myHelper : function(component) 
    {
		var name = component.get("v.name");
        var rating = component.get("v.rating");
        var phone = component.get("v.phone");
        var industry = component.get("v.industry");
        
       var action = component.get("c.createAccount");
        
        action.setParams({"name":name,"rating":rating,"phone":phone,"industry":industry});
        
        action.setCallback(this,function(response){
            
            var st = response.getState();
            if(st == 'SUCCESS')
            {
                var res = response.getReturnValue();
                component.set("v.flag",true);
                component.set("v.result",res);
            }
            else if(st == 'ERROR')
            {
                alert('Please Try Agian');
               
            }
        });
        $A.enqueueAction(action);
	}
})