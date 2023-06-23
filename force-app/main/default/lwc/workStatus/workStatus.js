import { refreshApex } from "@salesforce/apex";
import getWorkStatus from "@salesforce/apex/WorkStatusController_Main.getWorkStatus";
import { LightningElement, api, wire } from "lwc";

const COLUMNS = [
    { label: 'Name', fieldName: 'Name', cellAttributes: { alignment: 'center' } },
    { label: 'Tech Name', fieldName: 'TechnicianFK__c', cellAttributes: { alignment: 'center' } },
    { label: 'Repair Order Utilization', fieldName: 'UtilizationRepairOrder__c', cellAttributes: { alignment: 'center' } },
];

export default class RepairOrderInfo extends LightningElement {
    tabColumns = COLUMNS;
    @api recordId;

    @wire(getWorkStatus, { workData: '$recordId' })
    workData;
    @api
    refreshList() {
        console.log('Chamou o refresh repair order');
        refreshApex(this.workData);
        console.log('repair order result:', this.workData);
    }
}