({
	createme : function(component, event, helper) 
    {
		$A.createComponent(
            				"lightning:button",
                            {
                                "label":"Hello",
                                "variant":"destructive",
                                "onclick":component.getReference("c.callMe")
                            },
            				function(newButton,status,errorMessage)
                            {
                                if(status == "SUCCESS")
                                {
                                    var body1 = component.get("v.body");
                                    body1.push(newButton);
                                    component.set("v.body",body1);
                                }
                            }
        				  );
	},
    	callMe : function(component, event, helper)
    {
        alert('Hello,this button is created in runTime');
    }
})