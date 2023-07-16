public class ACL_Eg1_EventApplication_Acc_Con_Opp
{
    @AuraEnabled
	public static string search(string accname, string accind)
    {
        string accId;
        List<Account> accounts = [Select Id, Name,Phone, Industry, Rating from Account
                                								  		  where Name=:accname And Industry=:accind];
                                								  	 	  
        if(accounts.size() == 0)
        {
            accId = 'Error';
        }
        else
        {
            accId = accounts[0].id;
        }
        return accId;
    }
    @AuraEnabled
    public static List<contact> getContacts(string accId)
    {
        List<contact> contacts =  [select id,Firstname,Lastname,Email from Contact
               									   				      where AccountId=:accId];
        return contacts;
    }
    @AuraEnabled
    public static List<opportunity> getOpty(string accId)
    {
        List<Opportunity> opty= [select id,Name,stageName,Amount from Opportunity
               												     where AccountId=:accId];
        return opty;
    }
}