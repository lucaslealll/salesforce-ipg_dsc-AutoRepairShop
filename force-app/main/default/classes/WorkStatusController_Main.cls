public with sharing class WorkStatusController_Main {
  // Método para obter o status do trabalho
  @AuraEnabled(cacheable=true)
  public static List<Technician__c> getWorkStatus(
    String repairOrderId
  ) {
    // Lista para armazenar as relações entre técnico e ordem de reparo
    List<Techinician_RepairOrder_Junction__c> junctionList = new List<Techinician_RepairOrder_Junction__c>();
    
    // Lista para armazenar os dados dos técnicos
    List<Technician__c> techniciansData = [SELECT Id, Name FROM Technician__c];
    
    // Lista para armazenar os dados das ordens de reparo
    List<RepairOrder__c> repairOrderData = [
      SELECT Name, TechnicianFK__c
      FROM RepairOrder__c
    ];

    // Variável para armazenar a saída do controlador
    List<Technician__c> controllerOutput;
    
    // Atribui os dados dos técnicos à saída do controlador
    controllerOutput = techniciansData;
    
    // Retorna a saída do controlador
    return controllerOutput;
  }
}
