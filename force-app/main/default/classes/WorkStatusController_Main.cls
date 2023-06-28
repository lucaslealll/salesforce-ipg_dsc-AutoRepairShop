public with sharing class WorkStatusController_Main {
  @AuraEnabled(cacheable=true)
  public static List<RepairOrder__c> getWorkStatus(
    String repairOrderId
  ) {
    List<Techinician_RepairOrder_Junction__c> junctionList = new List<Techinician_RepairOrder_Junction__c>();
    List<Technician__c> techniciansData = [SELECT Id, Name FROM Technician__c];
    List<RepairOrder__c> repairOrderData = [
      SELECT Name, TechnicianFK__c
      FROM RepairOrder__c
    ];

    List<RepairOrder__c> controllerOutput;
    controllerOutput = repairOrderData;
    return controllerOutput;
  }
}
