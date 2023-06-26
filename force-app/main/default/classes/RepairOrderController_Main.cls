public with sharing class RepairOrderController_Main {
  @AuraEnabled(cacheable = true)
  public static List<RepairOrder__c> getRepairOrderMain() {
    return RepairOrderController_Service.RepairOrderService();
  }
}