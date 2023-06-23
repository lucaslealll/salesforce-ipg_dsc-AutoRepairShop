public with sharing class WorkStatusController_Main {
  @AuraEnabled(cacheable=true)
  public static List<RepairOrder__c> getWorkStatus(String repairOrderId) {
    List<RepairOrder__c> workData = [
      SELECT Name, TechnicianFK__c, UtilizationRepairOrder__c
      FROM RepairOrder__c
    ];
    return workData;
  }
}
