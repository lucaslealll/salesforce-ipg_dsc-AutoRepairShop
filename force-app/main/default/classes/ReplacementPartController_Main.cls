public with sharing class ReplacementPartController_Main {
  @AuraEnabled(cacheable=true)
  public static List<ReplacementPart__c> replacementPartMain(
    String repOrderId
  ) {
    return ReplacementPartController_Service.replacementPartService(repOrderId);
  }
  @AuraEnabled
  public static Boolean saveNewReplacementParts(
    String ID,
    String replacePartsFormInfo
  ) {
    return ReplacementPartController_Service.insertReplacementParts(
      ID,
      replacePartsFormInfo
    );
  }
}
