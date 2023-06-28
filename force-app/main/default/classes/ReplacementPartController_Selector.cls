public with sharing class ReplacementPartController_Selector {
  public static List<ReplacementPart__c> getReplacementParts(
    String repOrderId
  ) {
    List<ReplacementPart__c> replacementParts = new List<ReplacementPart__c>();
    if (
      Schema.SObjectType.ReplacementPart__c.isAccessible() && // Verifica se o objeto ReplacementPart__c é acessível
      Schema.SObjectType.ReplacementPart__c.isQueryable()     // Verifica se o objeto ReplacementPart__c pode ser consultado
    ) {
      replacementParts = [
        SELECT Id, Name, Stock__c, UnitCost__c
        FROM ReplacementPart__c
        // WHERE RepairOrder__c = :repOrderId  // Filtra os ReplacementPart__c por RepairOrder__c usando o repOrderId
      ];
    }
    return replacementParts;
  }
}
