public with sharing class ReplacementPartController_Helper {
  public static Boolean saveReplacementParts(
    String ID,
    String replacementPartsV2FormInfo
  ) {
    // Deserializa a string JSON em uma lista de objetos ReplacementPart__c
    List<ReplacementPart__c> repParts = (List<ReplacementPart__c>) JSON.deserialize(
      replacementPartsV2FormInfo,
      List<ReplacementPart__c>.class
    );


    // Imprime informações de depuração da variável repParts no console de log
    System.debug('teste ' + repParts);

    // Imprime informações de depuração da variável replacementPartsV2FormInfo no console de log
    System.debug('teste2 ' + replacementPartsV2FormInfo);

    try {
      // Insere os objetos ReplacementPart__c no banco de dados Salesforce
      insert repParts;
      return true;
    } catch (Exception e) {
      // Lança uma exceção personalizada AuraHandledException se ocorrer algum erro durante a inserção
      throw new AuraHandledException(e.getMessage());
    }
  }
}
