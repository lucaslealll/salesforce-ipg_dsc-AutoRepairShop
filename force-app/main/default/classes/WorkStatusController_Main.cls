public with sharing class WorkStatusController_Main {
  @AuraEnabled(cacheable=true)
  public static List<Techinician_RepairOrder_Junction__c> getWorkStatus(
    String repairOrderId
  ) {
    List<Techinician_RepairOrder_Junction__c> listaJuncao = new List<Techinician_RepairOrder_Junction__c>();
    Techinician_RepairOrder_Junction__c juncao = new Techinician_RepairOrder_Junction__c();

    List<Technician__c> registrosTabela1 = [SELECT Id, Name FROM Technician__c];

    List<RepairOrder__c> registrosTabela2 = [
      SELECT Name, TechnicianFK__c
      FROM RepairOrder__c
    ];

    // List<MyObject__c> myObjects = new List<MyObject__c>();

    // for (Integer i = 0; i < 10; i++) {
    //     MyObject__c obj = new MyObject__c();

    //     // Set random values for parameters
    //     obj.Name = 'Object ' + i;
    //     obj.NumberField__c = Math.round(Math.random() * 100);
    //     obj.TextField__c = 'Random Text ' + i;
    //     obj.BooleanField__c = Math.random() < 0.5;

    //     myObjects.add(obj);
    // }

    // // Insert the list of objects
    // insert myObjects;

    Technician__c teste;

    for (Technician__c registroTabela1 : registrosTabela1) {
      for (RepairOrder__c registroTabela2 : registrosTabela2) {
        listaJuncao.add(juncao);
      }
    }

    List<Techinician_RepairOrder_Junction__c> controllerOutput;
    controllerOutput = listaJuncao;
    return controllerOutput;
  }
}
