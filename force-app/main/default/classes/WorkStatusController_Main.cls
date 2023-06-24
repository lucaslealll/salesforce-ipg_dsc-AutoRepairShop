public with sharing class WorkStatusController_Main {
  @AuraEnabled(cacheable=true)
  public static List<Technician__c> getWorkStatus(
    String repairOrderId
  ) {
    List<Techinician_RepairOrder_Junction__c> junctionList = new List<Techinician_RepairOrder_Junction__c>();
    List<Technician__c> techniciansData = [SELECT Id, Name FROM Technician__c];
    List<RepairOrder__c> repairOrderData = [
      SELECT Name, TechnicianFK__c
      FROM RepairOrder__c
    ];

    // for (Technician__c tInfo : techniciansData) {
    //   for (RepairOrder__c roInfo : repairOrderData) {
    //     Techinician_RepairOrder_Junction__c obj = new Techinician_RepairOrder_Junction__c();
    //     if (tInfo.Name == 'Bruno Pizol') {
    //       String v1 = 'Bruno Pizol';
    //       junctionList.add(v1);
    //     }
    //   }
    // }

    List<Technician__c> controllerOutput;
    controllerOutput = techniciansData;
    return controllerOutput;
  }
}
