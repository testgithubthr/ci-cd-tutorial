({
	
    showme : function(component, event, helper) {
		
            var action = component.get("c.getAccountData");
            
            action.setCallback(this,function(response){
            	
            	var state = response.getState();
            	if(state == 'SUCCESS')
                {
                	var result = response.getReturnValue();
            		component.set("v.accounts",result);	
                }
            });
            
            $A.enqueueAction(action);
	},
    callme : function(component, event, helper) 
    {
		
        var clm = [
                    {label:"Account_Name",   fieldName:"Name",   type:'text'},
                    {label:"Account_Phone",  fieldName:"Phone",  type:'text'},
                    {label:"Account_Rating", fieldName:"Rating", type:'text'},
                  ];
            
            component.set("v.acolumns",clm);
	}
})