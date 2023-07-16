({
	callMe : function(component, event, helper)
    {
        var clm = [
                    {label:"Account Name", fieldName:'Name', type:'text'},
                    {label:"Account Phone", fieldName:'Phone', type:'text'},
                    {label:"Account Rating", fieldName:'Rating', type:'text'},
                  ];
            
            component.set("v.acolumns",clm);
	},
    showMe : function(component, event, helper)
    {
		var acc = event.getParam("acc");
        	var accounts = component.get("v.accounts");
            	accounts.push(acc);
            component.set("v.accounts",accounts);
	}
})