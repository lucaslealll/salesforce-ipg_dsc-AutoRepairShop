public with sharing class TechnicianController_Service {

    public static List<technician_repairOrder_junction__c> TechnicianService (String repairOrderId){
        return TechnicianController_Selector.getTechnicians(repairOrderId);
    }
}