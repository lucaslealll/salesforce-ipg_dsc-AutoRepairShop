public with sharing class ManRepOrdTechController_Main {
    @AuraEnabled(cacheable=true)
    public static List<RepairOrder__c> getRepOrdDataTable(String searchTerm)
	{

		if (String.isNotBlank(searchTerm)) {
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
			WHERE Name LIKE :('%' + searchTerm + '%') LIMIT 3];
		}
		else {
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
			FROM  RepairOrder__c LIMIT 10];
		}
	}
}