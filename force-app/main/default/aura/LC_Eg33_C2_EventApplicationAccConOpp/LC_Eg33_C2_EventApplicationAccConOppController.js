({
	callme : function(component, event, helper) 
    {
        component.set("v.acolumns",[
                                          {label:'FirstName', fieldname:'Name',type:"text"},
                                          {label:'LastName', fieldName:'LastName', type:"text"},
                                          {label:'Email',    fieldName:'Email',    type:"text"},
                      			   ]);
            
            var accId = event.getParam("accId");
            
            var action = component.get("c.getContacts");
            	action.setParams({"accId":accId});
                action.setCallback(this,function(response){
            		var state = response.getState();
            		if(state == 'SUCCESS')
                    {
                      var res = response.getReturnValue();
                        
           				 component.set("v.contactDataTable",res);
            			 component.set("v.flag",true);
                    }
           		 });
            
            	$A.enqueueAction(action);
	}
})