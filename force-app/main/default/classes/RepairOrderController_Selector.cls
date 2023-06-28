public with sharing class RepairOrderController_Selector {
  // Método para obter as ordens de reparo
  public static List<RepairOrder__c> getRepairOrder() {
    // Declaração da lista de ordens de reparo
    List<RepairOrder__c> repairOrder = [
      // Consulta para selecionar os campos da ordem de reparo
      SELECT 
        BrandModel__c,             // Campo do modelo da marca
        Brand__c,                  // Campo da marca
        CarPlate__c,               // Campo da placa do carro
        Condition__c,              // Campo da condição
        CreatedById,               // Campo do ID do criador
        Customers__c,              // Campo dos clientes
        Due_Date__c,               // Campo da data de vencimento
        LastModifiedById,          // Campo do ID do último modificador
        Name,                      // Campo do nome
        OwnerId,                   // Campo do ID do proprietário
        RepairStatus__c,           // Campo do status de reparo
        ReplacementPart_FK__c,     // Campo da chave externa das peças de reposição
        SelectedReplacementParts__c,   // Campo das peças de reposição selecionadas
        SelectedTechniciansIds__c,     // Campo dos IDs dos técnicos selecionados
        TechnicianFK__c,           // Campo da chave externa do técnico
        UtilizationRepairOrder__c, // Campo da utilização da ordem de reparo
        VehicleTest__c             // Campo do teste do veículo
      FROM RepairOrder__c
    ];

    // Retorna a lista de ordens de reparo
    return repairOrder;
  }
}
