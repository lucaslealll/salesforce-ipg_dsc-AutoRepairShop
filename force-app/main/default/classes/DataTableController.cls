public with sharing class DataTableController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getFilteredAccounts(String searchTerm) {
        if (String.isNotBlank(searchTerm)) {
            return [SELECT Id, Name, Industry, Phone, Website FROM Account WHERE Name LIKE :('%' + searchTerm + '%') LIMIT 10];
        } else {
            return [SELECT Id, Name, Industry, Phone, Website FROM Account LIMIT 10];
        }
    }
}