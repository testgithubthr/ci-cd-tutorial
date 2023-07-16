public class AC_Eg20_createAccount 
{
	@AuraEnabled
    
    Public Static String createAccount(string name,string rating,string phone,string industry)
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
            result = 'Account Created Successfully---->'+a.Id;
        }
        catch(exception e)
        {
            result = 'Account Creation failed with error---->'+e.getMessage();
        }
        return result;
    }
    
}