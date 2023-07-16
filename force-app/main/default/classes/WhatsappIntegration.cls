public class WhatsappIntegration {
    @future(callout=true)
    
    public static void sendMessage(set<Id> contactids)
    {
        List<Contact> contacts = [Select Id,Phone,Title from Contact where Id=:contactids];
        
        for(Contact con : contacts)
        {
            Http p = new Http();
            
            HttpRequest request = new HttpRequest();
            
            String endPoint = 'https://graph.facebook.com/v15.0/';
            
            // endPoint = endPoint + 'apikey=kjadkhasjfdnskmcnmz';
            
            endPoint = endPoint + '&numbers=' + '919850565298';
                //+ con.Phone;
            
            // endPoint = endPoint + '&sender=TXTLCL';
            
            endPoint = endPoint + '&Message=Hello jay';
                //+ con.Title;
            
            request.setEndPoint(endPoint);
            
            request.setmethod('POST');
            request.setHeader('Content-type', 'application/json');
            request.setHeader('Authorization', 'Bearer '+'EAAMTcq6uZBBEBABAnE37yZAd7cWiZAOcCvfr2vfZCLHLqd8ODvzaOKZC2D3OZB7qHLZA1aIklpHDBLRyh10nZAPx4udveR6VvmG72H0Vi1gq2aY1VcyGGZC9ifZBvB0hZBC9sjvk52VdtrZCZAyxMmFyuYtkmAOmPzKAQA0pkZBeeZCLtgSpG5Jc8SZCt9HfyqIUqppk2sGZCyZAnGGlISngX5bGoVcZAlx');
            
            HttpResponse response = p.send(request);
            
            
        }
    }
}