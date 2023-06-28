public with sharing class TechnicianController_Main {
    // Método responsável por obter os dados principais de um técnico
    @AuraEnabled(cacheable = true)
    public static List<Technician__c> getTechnicianMain(String technicianId) {
        // Chama o serviço TechnicianController_Service para obter os dados do técnico
        return TechnicianController_Service.TechnicianService(technicianId);
    }
    
    // Método responsável por salvar um novo técnico
    @AuraEnabled
    public static Boolean saveNewTechnician(String ID, String techniciansFormInfo) {
        // Chama o serviço TechnicianController_Service para inserir os dados do técnico
        return TechnicianController_Service.insertTechnicians(ID, techniciansFormInfo);
    }
}
