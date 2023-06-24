import { refreshApex } from "@salesforce/apex";
import getWorkStatus from "@salesforce/apex/WorkStatusController_Main.getWorkStatus";
import { LightningElement, api, wire } from "lwc";

const COLUMNS = [
    { label: 'Name', fieldName: 'Name', cellAttributes: { alignment: 'center' } },
    { label: 'Id', fieldName: 'Technician_Id', cellAttributes: { alignment: 'center' } },
    { label: 'Utilization', fieldName: 'SumUtilization__c', cellAttributes: { alignment: 'center' } },
];

export default class WorkStatus extends LightningElement {
    tabColumns = COLUMNS;
    @api recordId;

    @wire(getWorkStatus, { controllerOutput: '$recordId' })
    controllerOutput;

    @api
    refreshList() {
        console.log('Chamou o refresh repair order');
        refreshApex(this.controllerOutput);
        console.log('repair order result:', this.controllerOutput);
    }
}