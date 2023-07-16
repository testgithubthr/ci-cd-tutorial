public class AC_Eg31_InsertGetDisplayAccount 
{
	@AuraEnabled
    
    public static string InsertAccount(Account acc)
    {
        string result;
        try
        {
            insert acc;
            result = acc.Id;
        }
        catch(exception e)
        {
            result ='failed';
        }
        return result;
    }
    
    @AuraEnabled
    
    public static list<Account> getAccountData()
    {
        List<Account> accounts = [select id, Name,Phone,rating,Industry from Account];
        return accounts;
    }
}