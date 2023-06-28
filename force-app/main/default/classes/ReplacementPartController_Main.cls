public with sharing class ReplacementPartController_Main {
  // Retorna uma lista de ReplacementPart__c para exibição na tela principal
  @AuraEnabled(cacheable=true)
  public static List<ReplacementPart__c> replacementPartMain(
    String repOrderId
  ) {
    return ReplacementPartController_Service.replacementPartService(repOrderId);
  }

  // Salva novas informações sobre as peças de reposição no Salesforce
  @AuraEnabled
  public static Boolean saveNewReplacementParts(
    String ID,
    String replacementPartsV2FormInfo
  ) {
    return ReplacementPartController_Service.insertReplacementParts(
      ID,
      replacementPartsV2FormInfo
    );
  }
}
