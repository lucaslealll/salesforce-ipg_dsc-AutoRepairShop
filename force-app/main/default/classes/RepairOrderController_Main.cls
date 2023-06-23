public with sharing class RepairOrderController_Main {
  @AuraEnabled(cacheable = true)
  public static List<RepairOrder__c> getRepairOrderMain(String repairOrderId) {
    return RepairOrderController_Service.RepairOrderService(repairOrderId);
  }
}
