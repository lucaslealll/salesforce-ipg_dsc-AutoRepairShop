public with sharing class ReplacementPartController_Helper {
  public static Boolean saveReplacementParts(
    String ID,
    String replacePartsFormInfo
  ) {
    List<ReplacementPart__c> repParts = (List<ReplacementPart__c>) JSON.deserialize(
      replacePartsFormInfo,
      List<ReplacementPart__c>.class
    );

    // for (ReplacementPart__c repPart : repParts) {
    //   repPart.RepairOrder__c = ID;
    // }

    System.debug('teste ' + repParts);

    System.debug('teste2 ' + replacePartsFormInfo);

    try {
      insert repParts;
      return true;
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}
