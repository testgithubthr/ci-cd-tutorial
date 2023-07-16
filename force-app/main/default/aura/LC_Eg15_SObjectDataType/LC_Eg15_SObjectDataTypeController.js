({
	showMe : function(component, event, helper) 
    {
		var acc = component.get("v.acc");
        var con = component.get("v.con");
        console.log("Account Name is "+acc.Name);
        console.log("Accoount Phone is "+acc.phone);
        
        console.log("contact firstName is "+con.lastName);
        console.log("contact lastName is "+con.firstName);
       
	}
})