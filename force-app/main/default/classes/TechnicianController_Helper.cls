public with sharing class TechnicianController_Helper {
    public static Boolean saveTechnicians(String ID, String techniciansFormInfo) {
        List<Technician__c> technicians = (List<Technician__c>) JSON.deserialize(techniciansFormInfo, List<Technician__c>.class);
        // for (Technician__c tech : technicians) {
        //     tech.RepairOrder__c = ID;
        // }
        System.debug('teste '+ technicians);System.debug('teste2 '+ techniciansFormInfo);
        try {
            insert technicians;
            return true;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}