public with sharing class ProcessSelectedReplacementParts {
    public ProcessSelectedReplacementParts() {

    }
    
    @InvocableMethod(label='Existing Replacement Parts' description='Processing Existing Replacement Parts' category='Account')
    public static List <Results> prepareList(List<Requests> requestList){
        List<String> replacementPartIdList = new List<String>();
        List<Results> responseWrapper = new List<Results>();

        //verificar se está correto esse if 11:31
        if(requestList.size()>0 && requestList[0].replacementPartRecord!=null && requestList[0].replacementPartRecord.Name!=null)//talvez remover essa última condição 10:20
        {
            String existingReplacementPartIds = requestList[0].replacementPartRecord.Name;
            existingReplacementPartIds = existingReplacementPartIds.removeEnd(',');
            replacementPartIdList.addAll(existingReplacementPartIds.split(','));

            Results response = new Results();

            response.existingReplacementPartIds = replacementPartIdList;

            responseWrapper.add(response);            
        }
        return responseWrapper;
    }

    //
    public class Requests{
        @InvocableVariable(label='Record for Input' description='yourDescription')
        public ReplacementPart__c replacementPartRecord; //Onde vamos pegar as variáveis do flow (isso é visível no flow)
    }

    //
    public class Results{
        @InvocableVariable(label='Records for Output' description='yourDescription' required=true)
        public List<String> existingReplacementPartIds;
    }
}