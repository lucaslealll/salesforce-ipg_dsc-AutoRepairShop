public with sharing class TechnicianController_Service {
    
    // Retorna uma lista de técnicos com base no ID do técnico
    public static List<Technician__c> TechnicianService(String technicianId) {
        return TechnicianController_Selector.getTechnicians(technicianId); 
    }
    
    // Insere técnicos no banco de dados com base no ID e nas informações do formulário de técnicos
    public static Boolean insertTechnicians(String ID, String techniciansFormInfo) {
        return TechnicianController_Helper.saveTechnicians(ID, techniciansFormInfo);
    }
}
