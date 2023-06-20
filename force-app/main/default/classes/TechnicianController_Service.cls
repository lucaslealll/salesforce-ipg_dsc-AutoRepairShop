public with sharing class TechnicianController_Service {
    public static List<Technician__c> TechnicianService(String technicianId) {
        return TechnicianController_Selector.getTechnicians(technicianId); 
    }
    // public static Boolean insertTechnicians(String ID, String techniciansFormInfo) {
    //     return TechnicianController_Helper.saveTechnicians(ID, techniciansFormInfo);
    // }
}