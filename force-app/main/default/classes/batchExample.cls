global class batchExample implements Database.Batchable<sObject> {
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        // collect the batches of records or objects to be passed to execute         
        String query = ''  ;         
        return Database.getQueryLocator(query);       
    }
    
    global void execute(Database.BatchableContext BC, List<Account> scope) {
        List<Account> accList = new List<Account>();
        // process each batch of records
        for (integer i=0;i<100;i++)
        {
            Account anew= new Account(Name ='theanu'+i);
            accList.add(anew);         
        }
        
        try {
            // Update the Account Record
            insert accList;
            
            
            
        } catch(Exception e) {
            System.debug(e);
        }
        
    }        
    global void finish(Database.BatchableContext BC) {
        // execute any post-processing operations
        
    }
}