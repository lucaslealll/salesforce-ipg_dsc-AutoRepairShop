public with sharing class ReplacementPartController_Service {
    public static List<ReplacementPart__c> replacementPartService(String repOrderId) {
        return ReplacementPartController_Selector.getReplacementParts(repOrderId);
    }
    public static Boolean insertReplacementParts(String ID, String replacePartsFormInfo) {
        return ReplacementPartController_Helper.saveReplacementParts(ID, replacePartsFormInfo);
    }
}