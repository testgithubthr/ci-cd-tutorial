({
	callMe : function(component, event, helper) {
		
        var acc = component.get("v.acc");
        var con = component.get("v.con");
        var opp = component.get("v.opp");
        
        console.log("Account name is "+acc.Name);
        console.log("Account rating is "+acc.rating);
        
        console.log("contact lastName is "+con.LastName);
        console.log("contact firstName is "+con.firstName);
        
        console.log("Opportunity Name is "+opp.Name);
        console.log("Opportunity closeDate is "+opp.closedate);
        console.log("Opportunity stageName is "+opp.stageName);
	}
})