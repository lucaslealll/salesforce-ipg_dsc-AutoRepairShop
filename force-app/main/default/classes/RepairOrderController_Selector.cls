public with sharing class RepairOrderController_Selector {
  public static List<RepairOrder__c> getRepairOrder(String repairOrderId) {
    List<RepairOrder__c> repairOrder = [
      SELECT Name, TechnicianFK__c, UtilizationRepairOrder__c
      FROM RepairOrder__c
    ];
    return repairOrder;
  }
}
