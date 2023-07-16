public class AC_LE_createRetrieveAccount 
{
	@AuraEnabled
    public static string insertAccount(Account acc)
    {
        string result;
        try
        {
            insert acc;
            result = acc.Id;
        }
        catch(Exception e)
        {
            result= 'failed';
        }
        return result;
    }
    @AuraEnabled
    public static list<Account> getData()
    {
        List<Account> accounts = [select id,name,phone,Rating, Industry from account];
        Return accounts;
    }
}