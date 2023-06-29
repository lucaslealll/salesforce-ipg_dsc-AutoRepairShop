public with sharing class ManRepOrdTechController_Main {
    @AuraEnabled(cacheable=true)
    public static List<RepairOrder__c> fetchRepairOrders(String searchTerm)
	{
        String strKey = '%' + searchTerm + '%'; 
		return [
			SELECT
				BrandModel__c,
				Brand__c,
				CarPlate__c,
				Condition__c,
				CreatedById,
				Customers__c,
				Due_Date__c,
				ExtraPartsPrice__c,
				LastModifiedById,
				Main_Part_Price__c,
				Name,
				Id,
				OwnerId,
				RepairStatus__c,
				ReplacementPart_FK__c,
				SelectedReplacementParts__c,
				SelectedTechniciansIds__c,
				TechnicianFK__c,
				Total_Price__c,
				UtilizationRepairOrder__c,
				VehicleTest__c
			FROM  RepairOrder__c 
			WHERE Name LIKE: strKey LIMIT 3
		];
	}
}