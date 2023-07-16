public class AC_Eg33_EventApplicationAccConOpp
{
	@AuraEnabled
    
    Public static string search(string accname, string accind)
    {
        string accId;
        List<Account> accounts = [Select Id,Name,Phone,Rating,Industry From Account where name=:accname and Industry=:accind];
        
        if(accounts.size() ==0)
        {
            accId = 'Error';
        }
        else
        {
            accId = accounts[0].Id;
        }
        return accId;
    }
    
    @AuraEnabled
    
    Public static List<Contact> getContacts (string accId)
    {
        List<Contact> contacts = [select id,firstname,lastname,email from contact where AccountId=:accId];
        return contacts;
    }
    
    @AuraEnabled
    
    Public static List<opportunity> getopty(string accId)
    {
        List<Opportunity> oppList =[Select Id, Name, stageName,Amount from Opportunity where AccountId=:accId];
        return oppList;
    }
}