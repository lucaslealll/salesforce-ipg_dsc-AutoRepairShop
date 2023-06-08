public with sharing class TechnicianController_Main {

    @AuraEnabled(cacheable=true)
    public static List<technician_repairOrder_junction__c> getTechnicians(String repairOrderId){
        return TechnicianController_Service.TechnicianService(repairOrderId);
    }
}