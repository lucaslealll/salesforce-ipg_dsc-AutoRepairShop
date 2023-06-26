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
        // selectedTechniciansIds2__c,
        CreatedById, 
        LastModifiedById,
        OwnerId
      FROM RepairOrder__c
    ];
 
    List<RepairOrder__c> convertedData = new List<RepairOrder__c>();

    for (RepairOrder__c record : repairOrderData) {
      if (record.SelectedTechniciansIds__c != null) {
        
        String[] technicianIds = record.SelectedTechniciansIds__c.split(', ');
        
        for (String item : technicianIds) {
          RepairOrder__c convertedRecord = new RepairOrder__c();
          
          convertedRecord.SelectedTechniciansIds__c = item;

          convertedData.add(convertedRecord);
        }
      }
    }

    List<RepairOrder__c> techIdToNameOutput;
    techIdToNameOutput = convertedData;
    return techIdToNameOutput;
  }
}
