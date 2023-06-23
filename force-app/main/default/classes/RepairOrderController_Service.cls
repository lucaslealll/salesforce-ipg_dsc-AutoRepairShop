public with sharing class RepairOrderController_Service {
    public static List<RepairOrder__c> RepairOrderService(String repairOrderId){
        return RepairOrderController_Selector.getRepairOrder(repairOrderId);
    }
}
