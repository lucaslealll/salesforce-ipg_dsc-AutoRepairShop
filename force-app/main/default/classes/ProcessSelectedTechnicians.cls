public with sharing class ProcessSelectedTechnicians {
    public ProcessSelectedTechnicians() {

    }

    @InvocableMethod(label='Existing Technicians' description='Processing Existing Technicians' category='Account')
    public static List <Results> prepareList(List<Requests> requestList){
        List<String> techniciansIdList = new List<String>();
        List<Results> responseWrapper = new List<Results>();

        //verificar se está correto esse if 11:31
        if(requestList.size()>0 && requestList[0].technicianRecord!=null && requestList[0].technicianRecord.SelectedTechniciansIds__c!=null)//talvez remover essa última condição 10:20
        {
            String existingTechniciansIds = requestList[0].technicianRecord.SelectedTechniciansIds__c;
            existingTechniciansIds = existingTechniciansIds.removeEnd(',');
            techniciansIdList.addAll(existingTechniciansIds.split(','));

            Results response = new Results();

            response.existingTechniciansIds = techniciansIdList;

            responseWrapper.add(response);            
        }
        return responseWrapper;
    }

    //
    public class Requests{
        @InvocableVariable(label='Record for Input' description='yourDescription')
        public Technician__c technicianRecord; //Onde vamos pegar as variáveis do flow (isso é visível no flow)
    }

    //
    public class Results{
        @InvocableVariable(label='Records for Output' description='yourDescription' required=true)
        public List<String> existingTechniciansIds;
    }
}
//verificar momento 21:30
//verificar condição de entrada 22:07