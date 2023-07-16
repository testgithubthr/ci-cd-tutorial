public with sharing class sn_08_contactListThroughImperativeMethod {
    
    @AuraEnabled()
        public static list<contact> getContactList ()
    {

       List<contact> conList = [select id,lastname,firstname from contact limit 5];

       return conList;
    }
}