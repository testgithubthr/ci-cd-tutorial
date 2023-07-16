public class InsertAccountsBatch implements Database.Batchable<sObject> {
    private Integer batchSize = 10; // Set the desired batch size
    private Integer totalRecords = 400; // Set the total number of Account records to insert
    
    public Database.QueryLocator start(Database.BatchableContext bc) {
        String query = 'SELECT Id FROM Account LIMIT ' + totalRecords;
        return Database.getQueryLocator(query);
    }
    
    public void execute(Database.BatchableContext bc, List<sObject> scope) {
        List<Account> accountsToInsert = new List<Account>();
        
        for (sObject record : scope) {
            Account acc = new Account();
            // Set the desired field values for the Account record
            acc.Name = 'COMS';
            // Set other field values as needed
            
            accountsToInsert.add(acc);
        }
        
        insert accountsToInsert;
    }
    
    public void finish(Database.BatchableContext bc) {
        // Perform any post-processing or cleanup tasks
    }
}