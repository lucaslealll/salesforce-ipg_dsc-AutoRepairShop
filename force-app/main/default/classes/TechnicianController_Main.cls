public with sharing class TechnicianController_Main {
    @AuraEnabled(cacheable = true)
    public static List<Technician__c> getTechnicianMain(String technicianId) {
        return TechnicianController_Service.TechnicianService(technicianId);
    }
    // @AuraEnabled
    // public static Boolean saveNewTechnician(String ID, String techniciansFormInfo) {
    //     return TechnicianController_Service.insertTechnicians(ID, techniciansFormInfo);
    // }
}