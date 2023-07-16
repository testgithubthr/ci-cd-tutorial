({
	show : function(component, event, helper) 
    {
		component.callme();
	},
    invoke : function(component, event, helper) 
    {
        alert('I am Interface Method and was called by the component');
    }
})