public with sharing class sn_10_for_eachExample {
    @AuraEnabled(cacheable=true)
    public static List<contact> getContactList(){
        try {
                return [select id,name from contact limit 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}