public with sharing class ReplacementPartController_Selector {
  public static List<ReplacementPart__c> getReplacementParts(
    String repOrderId
  ) {
    List<ReplacementPart__c> replacementParts = new List<ReplacementPart__c>();
    if (
      Schema.SObjectType.ReplacementPart__c.isAccessible() &&
      Schema.SObjectType.ReplacementPart__c.isQueryable()
    ) {
      replacementParts = [
        SELECT Id, Name, Stock__c, UnitCost__c
        FROM ReplacementPart__c
        // WHERE RepairOrder__c = :repOrderId
      ];
    }
    return replacementParts;
  }
}
