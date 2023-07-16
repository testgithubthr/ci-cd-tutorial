public class CommonUtilityHandler 
{
	public static integer Addition(integer x, integer y)
    {
        return (x + y);
    }
    Public static integer multiply(integer x,integer y)
    {
        return (x * y);
    }
    public static boolean CheckEquals(string s1,string s2)
    {
        if(s1 == s2)
            return true;
        else return false;
    }
    public static boolean checkEqualsWithCase(string s1,string s2)
    {
        return s1.equals(s2);
    }
    public static String concatenate(String s1,String s2)
    {
        return s1 + s2;
    }
}