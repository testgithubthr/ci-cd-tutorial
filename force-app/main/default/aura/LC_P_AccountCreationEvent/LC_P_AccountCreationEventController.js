({
	callMe : function(component, event, helper)
    {
		var col = [
                    {label:'AccName', fieldName:'Name',type:'Text'},
                    {label:'AccPhone', fieldName:'Phone',type:'Text'},
                    {label:'AccRating', fieldRating:'Rating',type:'Text'}
        		  ];
        component.set("v.acolumns",col);
	},
    showMe : function(component, event, helper)
    {
		var action = component.get("c.getData");
        
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state == 'success')
            {
                var res = response.getReturnValue();
                component.set("v.accounts",res);
            }
            $A.enqueueAction(actions);
        })
	}
})