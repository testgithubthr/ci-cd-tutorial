public class AC_Eg19_retriveData
{
	@AuraEnabled
    
    public static Account GiveData()
    {
        Account acc = [Select Id, Name, rating, Industry From Account Limit 1];
        return acc;
    }
}