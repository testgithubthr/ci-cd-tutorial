({
	callMe : function(component, event, helper) {
		component.set("v.acolumns",[
            {label:"OpptName", fieldname:"name", type:"text"},
             {label:"StageName",fieldname:"Stagename", type:"text"},
            {label:"Amount", fieldname:"Amount",type:"text"}
        ]);
        var accIds = event.getParam("accId");
        var action = component.get("c.getOpty");
        action.setParams({"accId":accIds});
        action.setCallback(this,function(response){
           var state = response.getState();
            if(state == 'Success')
            {
                var res = response.getReturnValue();
                component.set("oppData",res);
                component.set("v.flag",'true');
            }
        });
	}
})