public class AC_Eg21_createAccount 
{
	@AuraEnabled
    
    public static string createAccount(string name, string rating, string phone,string industry)
    {
        string result;
        try
        {
            Account a = new account();
            		a.Name = name;
            		a.Rating = rating;
            		a.Phone = phone;
            		a.Industry = industry;
            
            Insert a;
            result = 'Your Account is created successfully--->'+a.Id;
        }
        catch(exception e)
        {
            result = 'Your account creation is failed--->'+e.getMessage();
        }
        return result;
    }
}