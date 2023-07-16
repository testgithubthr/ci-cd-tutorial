@isTest
private class CommonUtilityHandlerTest {

    static testmethod void TestCommonMethod()
    {
        System.assertEquals(550, CommonUtilityHandler.Addition(100, 450));
        
        System.assertEquals(1450, CommonUtilityHandler.Addition(1000, 450));
        
        System.assertEquals(500,CommonUtilityHandler.multiply(100, 5) );
        
        System.assertEquals(true, CommonUtilityHandler.CheckEquals('Tushar', 'tushar'));
        
        System.assertEquals(true, CommonUtilityHandler.CheckEquals('Tushar', 'Tushar'));
        
        System.assertEquals(false, CommonUtilityHandler.CheckEquals('Tushar', 'Tush'));				// Negative Case
        
        System.assertEquals(true, CommonUtilityHandler.checkEqualsWithCase('Welcome', 'Welcome'));
        
        System.assertEquals(true, CommonUtilityHandler.checkEqualsWithCase('Welcome', 'welcome'));   // Negative Case
        
        System.assertEquals('HelloWelcome', CommonUtilityHandler.concatenate('Hello', 'Welcome'));
        
        

    }
}