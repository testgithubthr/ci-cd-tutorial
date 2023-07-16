public class AC_Eg26_getAccountSearchText 
{
	@AuraEnabled
    public static List<Account> getAccountSearch(string searchText)
    {
        string query ='select Id,Name,Rating,Phone,Industry From Account where name like\'%'+searchText+'%\'';
        List<Account> accList = Database.query(query);
        return accList;
    }
}