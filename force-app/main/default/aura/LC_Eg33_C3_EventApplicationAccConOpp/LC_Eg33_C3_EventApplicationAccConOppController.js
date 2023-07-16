({
	callme : function(component, event, helper) 
    {
        component.set("v.acolumns",[
                                          {label:'Opportunity Name', fieldname:'Name',			type:"text"},
                                          {label:'StageName', fieldName:'StageName', type:"text"},
                                          {label:'Amount',    fieldName:'Amount',    type:"currency"},
                      			   ]);
            
            var accId = event.getParam("accId");
            
            var action = component.get("c.getopty");
            	action.setParams({"accId":accId});
                action.setCallback(this,function(response){
            		var state = response.getState();
            		if(state == 'SUCCESS')
                    {
                      var res = response.getReturnValue();
                        
           				 component.set("v.oppDataTable",res);
            			 component.set("v.flag",true);
                    }
           		 });
            
            	$A.enqueueAction(action);
	}
})