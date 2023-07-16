public class AC_createAccount 
{
    @AuraEnabled
    
    public static string createAccount(string name, string phone, string ratg, string industry)
    {
        string result;			
        try
        {
            Account acc = new Account();
                
                acc.Name = name;
            acc.Phone = phone;
            acc.Rating = ratg;
            acc.Industry = industry;
            
            insert acc;
            result = 'Account has successfully created'+acc.Id;
        }
        catch(exception e)
        {
            result = 'Account creation failed with error'+e.getMessage();
        }
        return result;
    }
}