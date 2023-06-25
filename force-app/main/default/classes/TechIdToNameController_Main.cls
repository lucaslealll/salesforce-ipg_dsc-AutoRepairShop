public with sharing class TechIdToNameController_Main {
  @AuraEnabled(cacheable=true)
  public static List<RepairOrder__c> getRepairOrderAllData(
    String repairOrderId
  ) {
    List<RepairOrder__c> repairOrderData = [
      SELECT 
        Name, 
        BrandModel__c, 
        Brand__c, 
        CarPlate__c, 
        Condition__c, 
        Customers__c, 
        Due_Date__c, 
        RepairStatus__c, 
        ReplacementPart_FK__c, 
        SelectedTechniciansIds__c, 
        TechnicianFK__c, 
        UtilizationRepairOrder__c, 
        VehicleTest__c, 
        selectedTechniciansIds2__c,
        CreatedById, 
        LastModifiedById,
        OwnerId
      FROM RepairOrder__c
    ];

    List<RepairOrder__c> techIdToNameOutput;
    techIdToNameOutput = repairOrderData;
    return techIdToNameOutput;
  }
}
