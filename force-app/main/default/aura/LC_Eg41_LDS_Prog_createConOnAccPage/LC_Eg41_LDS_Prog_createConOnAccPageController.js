({
	invokeMe : function(component, event, helper) {
        component.find("rec").getNewRecord(
                                              "Contact",
                                               Null,
                                               false,
                                               $A.getCallback(function(response){
                                                  
                                                   var acc = component.get("v.newCon");
                                                   if(acc == null)
                                                   {
                                                       alert('Contact Initialization failed');
                                                   }
                                                   else
                                                   {
                                                       alert('contact initialization Success');
                                                   }
                                                })
        									 );
		
	},
    saveMe : function(component, event, helper) {
                                               		component.find("rec").saveRecord(function(response){
                                                        if(response.state == 'Success')
                                                        {
                                                            alert('Contact Created Successfully'+response.recordid);
                                                        }
                                                        else
                                                        {
                                                            alert('Contact creation failed'+response.error);
                                                        }
       											 });
	}
})