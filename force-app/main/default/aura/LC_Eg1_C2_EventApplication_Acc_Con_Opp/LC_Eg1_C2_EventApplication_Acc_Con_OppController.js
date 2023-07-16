({
	callMe : function(component, event, helper) 
    {
		component.set('v.colums',[
                                    {label:'FirstName',fieldName:'FirstName', type:'text'},
                                    {label:'LastName',fieldName:'LastName', type:'text'},
                                    {label:'Email',fieldName:'Email', type:'text'}
      							  ]);
        
        var accIds = event.getParam("accId");
        var action = component.get("c.getContacts");
        action.setParams({"accId":accIds});
        action.setCollback(this,function(response){
            var state = response.getState();
            if(state == 'Success')
            {
                var res = response.getReturnValue();
                component.set("conData",res);
                component.set("v.flag",'true');
            }
        })
	}
})