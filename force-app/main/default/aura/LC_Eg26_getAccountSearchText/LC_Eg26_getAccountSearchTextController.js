({
    loadme : function(component, event, helper)
    {
        var clmn=[
                    {label:"Account Name", fieldName:"Name",type:"Text"},
                    {label:"Account Phone", fieldName:"Phone",type:"Text"},
            		{label:"Account Rating", fieldName:"Rating",type:"Text"},
            		{label:"Account Industry", fieldName:"Industry",type:"Text"},
       			];
            
            component.set("v.columns",clmn);
 },
	 searchMe : function(component, event, helper)
     {
            var searchtext = component.get("v.st");
            
            var action = component.get("c.getAccountSearch");
            
            action.setParams({"searchText":searchtext});
            
            action.setCallback(this,function(response){
            var st = response.getState();
            if(st == 'SUCCESS')
            {
            	var res = response.getReturnValue();
            	component.set("v.acc",res);
            }
            
         	 });
            
            $A.enqueueAction(action);
            
      }
 })