public with sharing class TechnicianController_Selector {
    public static List<Technician__c> getTechnicians(String technicianId) {
        List<Technician__c> technicians = [
            SELECT Name, CreatedById, LastModifiedById, OwnerId
            FROM Technician__c
        ];
        return technicians;
    }
}