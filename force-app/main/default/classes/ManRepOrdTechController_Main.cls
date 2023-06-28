public with sharing class ManRepOrdTechController_Main {
    @AuraEnabled(cacheable=true)
    public static List<RepairOrder__c> getRepOrdDataTable(
      String repairOrderId
    ) {
      List<RepairOrder__c> roDataTable = [
        SELECT
            Brand__c,
            CarPlate__c,
            Condition__c,
            CreatedById,
            Customers__c,
            Due_Date__c,
            ExtraPartsPrice__c,
            LastModifiedById,
            Main_Part_Price__c,
            BrandModel__c,
            Name,
            OwnerId,
            RepairStatus__c,
            ReplacementPart_FK__c,
            SelectedReplacementParts__c,
            SelectedTechniciansIds__c,
            TechnicianFK__c,
            Total_Price__c,
            UtilizationRepairOrder__c,
            VehicleTest__c
        FROM 
            RepairOrder__c
      ];
  
      List<RepairOrder__c> mrocOutput;
      mrocOutput = roDataTable;
      return mrocOutput;
    }
  }
  