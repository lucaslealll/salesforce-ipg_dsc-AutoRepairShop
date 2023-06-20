public with sharing class TechnicianController_Selector {
    public static List<Technician__c> getTechnicians(String technicianId) {
        List<Technician__c> technicians = [SELECT Name FROM Technician__c];
        // List<Technician__c> technicians = [SELECT Id, Name, Quantity__c, Utilization__c
        //                                     FROM Technician__c
        //                                     WHERE RepairOrder__c= :technicianId];
        return technicians;
    }
}