public class AC_Eg25_getAccountSearchText 
{
	@AuraEnabled
    
    public static List<Account> getAccount(string searchText)
    {
        string query = 'select Id,Name,rating,phone from Account where name like \'%'+searchText+'%\'';
        List<Account> accounts = Database.query(query);
        return accounts;
    }
}