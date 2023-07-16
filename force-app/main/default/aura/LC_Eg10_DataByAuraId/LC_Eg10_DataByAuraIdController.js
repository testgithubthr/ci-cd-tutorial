({
	callMe : function(component, event, helper) {
        
        alert('Hi');
        
		var nm = component.find("empName").get("v.value");
        var ag = component.find("empAge").get("v.value");
        var sl = component.find("empSalary").get("v.value");
        
        	
        
        console.log("Name===="+nm);
        console.log("Age===="+ag);
        console.log("Sal===="+sl);
	}
})