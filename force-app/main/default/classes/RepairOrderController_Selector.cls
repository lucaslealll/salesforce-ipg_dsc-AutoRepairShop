public with sharing class RepairOrderController_Selector {
  public static List<RepairOrder__c> getRepairOrder() {
    List<RepairOrder__c> repairOrder = [
      SELECT 
        BrandModel__c,
        Brand__c,
        CarPlate__c,
        Condition__c,
        CreatedById,
        Customers__c,
        Due_Date__c,
        LastModifiedById,
        Name,
        OwnerId,
        RepairStatus__c,
        ReplacementPart_FK__c,
        SelectedReplacementParts__c,
        SelectedTechniciansIds__c,
        TechnicianFK__c,
        UtilizationRepairOrder__c
        // VehicleTest__c
      FROM RepairOrder__c
    ];


    return repairOrder;
  }
}
