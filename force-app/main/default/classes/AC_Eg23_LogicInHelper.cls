public class AC_Eg23_LogicInHelper
{
	@AuraEnabled
    
    Public static string createAccount(string name,string rating,string phone,string industry)
    {
        string result;
        Try
        {
            Account a = new Account();
            		a.Name = name;
            		a.Rating = rating;
            		a.Phone = phone;
            		a.Industry = industry;
            
            Insert a;
            
            result = 'Account has been create Successfully--->'+a.Id;
        }
        catch(exception e)
        {
            result = 'Account creation failed---->'+e.getMessage();
        }
        return result;
    }
}