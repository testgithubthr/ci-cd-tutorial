({
	callMe : function(component, event, helper) {
        
		alert('Hi this my first button invocation');
        component.set("v.empName","Tushar");
        component.set("v.age",31);
        component.set("v.Salary",100000);
        
        
	},
    clearMe : function(component, event, helper) {
        
        component.set("v.empName","");
        component.set("v.age","");
        component.set("v.Salary","");
        
	}
})