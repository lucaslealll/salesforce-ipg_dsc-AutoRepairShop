public with sharing class TechnicianController_Selector {

    public static List<technician_repairOrder_junction__c> getTechnicians(String repairOrderId){
        List<technician_repairOrder_junction__c> technicians = [SELECT Id, Technician_Name__c, Quantity__c, Utilization__c FROM  technician_repairOrder_junction__c WHERE FK_RepairOrder__c = :repairOrderId];
        return technicians;
    }
}