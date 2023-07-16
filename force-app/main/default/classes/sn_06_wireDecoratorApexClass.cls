public with sharing class sn_06_wireDecoratorApexClass 
{
    @AuraEnabled(cacheable=true)
    public static list<Account> getAccountRecordList()
    {
        try 
        {
            List<Account> accList = [select id,name from Account];

            System.debug('Account Record List is....:'+accList);

            return accList;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}