public with sharing class RepairOrderController_Service {
    public static List<RepairOrder__c> RepairOrderService(){
        return RepairOrderController_Selector.getRepairOrder();
    }
}
