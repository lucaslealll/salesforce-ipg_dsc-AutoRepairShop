public with sharing class RepairOrderController_Service {
    // Método responsável por chamar o seletor e retornar a lista de ordens de reparo
    public static List<RepairOrder__c> RepairOrderService(){
        return RepairOrderController_Selector.getRepairOrder();
    }
}
