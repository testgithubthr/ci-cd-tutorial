({
	handleShowActiveSectionName : function(component, event, helper) {
		var abc = component.find('accordion').get("v.activeSectionName");
        alert('Ohhhh! You Have activated Section'+" "+abc);
	},
   handleSetActiveSectionC: function (cmp) {
        cmp.find("accordion").set('v.activeSectionName', 'C');
    }
})