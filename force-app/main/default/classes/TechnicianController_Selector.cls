public with sharing class TechnicianController_Selector {
    // Método estático para obter a lista de técnicos
    public static List<Technician__c> getTechnicians(String technicianId) {
        // Lista para armazenar os técnicos
        List<Technician__c> technicians = [
            SELECT Name, CreatedById, LastModifiedById, OwnerId
            FROM Technician__c
        ];
        // Retorna a lista de técnicos
        return technicians;
    }
}
