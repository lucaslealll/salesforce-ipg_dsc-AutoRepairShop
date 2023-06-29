public with sharing class AccountController { 
 
    @AuraEnabled( cacheable = true ) 
    public static List< Account > fetchAccounts( String searchKey ) { 
     
        String strKey = '%' + searchKey + '%'; 
        return [ 
            SELECT Id, Name, Industry 
            FROM Account 
            WHERE Name LIKE: strKey LIMIT 10 
        ]; 
    }     
}