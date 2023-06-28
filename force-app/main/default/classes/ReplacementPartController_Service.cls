public with sharing class ReplacementPartController_Service {
  // Método responsável por retornar a lista de peças de reposição relacionadas a uma ordem de reparo específica
  public static List<ReplacementPart__c> replacementPartService(String repOrderId) {
    return ReplacementPartController_Selector.getReplacementParts(repOrderId);
  }
  
  // Método responsável por inserir as peças de reposição relacionadas a uma determinada ordem de reparo
  public static Boolean insertReplacementParts(String ID, String replacementPartsV2FormInfo) {
    return ReplacementPartController_Helper.saveReplacementParts(ID, replacementPartsV2FormInfo);
  }
}
