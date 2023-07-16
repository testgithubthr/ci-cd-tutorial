public with sharing class sn_07_01_contactControllerDataTable
{
   @AuraEnabled(cacheable=true)
   public static list<contact> getContactList()
   {
    try 
    {
        return [select id, firstName, lastname,title,phone,email,website__c from contact limit 10];
        
    } catch (Exception e) 
    {
        throw new AuraHandledException(e.getMessage());
    }
   }
}