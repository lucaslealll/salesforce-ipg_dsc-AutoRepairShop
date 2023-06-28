public with sharing class RepairOrderController_Main {
  // Método que retorna a lista de ordens de reparo principal
  @AuraEnabled(cacheable = true)
  public static List<RepairOrder__c> getRepairOrderMain() {
    // Chama o método RepairOrderService() da classe RepairOrderController_Service para obter a lista de ordens de reparo
    return RepairOrderController_Service.RepairOrderService();
  }
}
