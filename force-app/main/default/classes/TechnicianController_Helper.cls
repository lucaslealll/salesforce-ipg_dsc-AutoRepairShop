public with sharing class TechnicianController_Helper {
    // Método para salvar técnicos
    public static Boolean saveTechnicians(String ID, String techniciansFormInfo) {
        // Desserializa a string techniciansFormInfo em formato JSON para uma lista de objetos Technician__c
        List<Technician__c> technicians = (List<Technician__c>) JSON.deserialize(techniciansFormInfo, List<Technician__c>.class);
        
        try {
            // Insere os técnicos no banco de dados
            insert technicians;
            return true;
        } catch (Exception e) {
            // Se ocorrer uma exceção, lança uma AuraHandledException com a mensagem de erro
            throw new AuraHandledException(e.getMessage());
        }
    }
}
