({
	showmep1c1g1 : function(component, event, helper) {
		
        component.set("v.msg","Hi, This is Grand Child_1, my parent triggered the event and I am inheriting the event  ");
        
        alert("This is Grand Child_1, my parent triggered the event and I am inheriting the event");
	}
})