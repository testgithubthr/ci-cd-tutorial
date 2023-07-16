({
    createme : function(component, event, helper) 
    {
        $A.createComponents([
            [
                "lightning:button",
                {
                    "aura:id":"bt1",
                    "label":"Submit",
                    "variant":"Success"
                }
            ],
            [
                "lightning:input",
                {
                    "aura:id":"inp1",
                    "label":"Employee name"
                }
            ],
            [
                "lightning:input",
                {
                    "aura:id":"inp2",
                    "label":"Employee_Sal"
                }
            ]
        ],
                            function(components,status,errorMessage)
                            {
                                if(status == "SUCCESS")
                                {
                                    var b = component.get("v.body");
                                    components.forEach(function(item){
                                        b.push(item)
                                    });
                                    component.set("v.body",b);
                                }
                                else
                                {
                                    console.log("Error Creating Component"+errorMessage);
                                }
                            }                    
                           );
    },
    destroyme : function(component)
    {
        var a = component.find("btn1");
        var b = component.find("inp1");
        var c = component.find("inp2");
        a.destroy();
        b.destroy();
        c.destroy();
    }
})