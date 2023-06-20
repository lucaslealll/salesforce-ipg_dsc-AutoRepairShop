import { refreshApex } from "@salesforce/apex";
import getTechnicians from "@salesforce/apex/TechnicianController_Main.getTechnicianMain";
import { LightningElement, api, wire } from "lwc";

const COLUMNS = [
    { label: 'Name', fieldName: 'Name', cellAttributes: { alignment: 'center' } },
    { label: 'Quantity', fieldName: 'Quantity__c', cellAttributes: { alignment: 'center' } },
    { label: 'Utilization', fieldName: 'Utilization__c', cellAttributes: { alignment: 'center' } },
    { label: 'Created By', fieldName: 'CreatedById', cellAttributes: { alignment: 'center' } },
    { label: 'Owner', fieldName: 'OwnerId', cellAttributes: { alignment: 'center' } },
    { label: 'Las Modified By', fieldName: 'LastModifiedByID', cellAttributes: { alignment: 'center' } },
];

export default class TechniciansInfo extends LightningElement {
    tabColumns = COLUMNS;
    @api recordId;

    @wire(getTechnicians, { technicianId: '$recordId' })
    technicians;
    @api
    refreshList() {
        console.log('Chamou o refresh technicians');
        refreshApex(this.technicians);
        console.log('technicians result:', this.technicians);
    }
}