({
    mycolumn : function(component, event, helper) {
        
        var Col = [
                        {label:'AccountName', fieldName:'Name', type:'text'},
                        {label:'AccountPhone', fieldName:'Phone', type:'text'},
                        {label:'AccountRating', fieldName:'Rating', type:'text'},
        			];
            
            	component.set("acolumns",col);
        
    },
    showMe : function(component, event, helper) {
        var acc = component.getParam("acc");
          var accounts = component.set("v.accounts");
            accounts.push(acc);
            component.set("v.accounts",accounts);
    }
})