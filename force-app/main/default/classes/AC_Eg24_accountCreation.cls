public class AC_Eg24_accountCreation
{
	@AuraEnabled
    
    public static string callAccount(Account acc)
    {
        string result;
        
        try
        {
            Insert acc;
            result='Success';
        }
        catch(Exception e)
        {
            result = e.getMessage();
        }
        return result;
    }
}