import { refreshApex } from "@salesforce/apex";
import getRepairOrderMain from "@salesforce/apex/RepairOrderController_Main.getRepairOrderMain";
import { LightningElement, api, wire } from "lwc";

const COLUMNS = [
    { label: 'Name', fieldName: 'Name', cellAttributes: { alignment: 'center' } },
    { label: 'Tech Name', fieldName: 'TechnicianFK__c', cellAttributes: { alignment: 'center' } },
    { label: 'Repair Order Utilization', fieldName: 'UtilizationRepairOrder__c', cellAttributes: { alignment: 'center' } },
];

export default class RepairOrderInfo extends LightningElement {
    tabColumns = COLUMNS;
    @api recordId;

    @wire(getRepairOrderMain, { repairOrderId: '$recordId' })
    repairOrder;
    @api
    refreshList() {
        console.log('Chamou o refresh repair order');
        refreshApex(this.repairOrder);
        console.log('repair order result:', this.repairOrder);
    }
}