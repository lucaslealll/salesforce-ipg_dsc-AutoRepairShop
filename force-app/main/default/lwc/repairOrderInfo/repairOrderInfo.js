import { refreshApex } from "@salesforce/apex";
import getRepairOrderMain from "@salesforce/apex/RepairOrderController_Main.getRepairOrderMain";
import { LightningElement, api, wire } from "lwc";

const COLUMNS = [
    { label: 'Name', fieldName: 'Name', cellAttributes: { alignment: 'center' } },
    { label: 'Due Date', fieldName: 'Due_Date__c', cellAttributes: { alignment: 'center' } },
    { label: 'Car Brand', fieldName: 'Brand__c', cellAttributes: { alignment: 'center' } },
    { label: 'Car Model', fieldName: 'BrandModel__c', cellAttributes: { alignment: 'center' } },
    { label: 'Car Plate', fieldName: 'CarPlate__c', cellAttributes: { alignment: 'center' } },
    { label: 'Status', fieldName: 'RepairStatus__c', cellAttributes: { alignment: 'center' } },
    { label: 'Replacement Parts', fieldName: 'SelectedReplacementParts__c', cellAttributes: { alignment: 'center' } },
    { label: 'Aux. Technicians', fieldName: 'SelectedTechniciansIds__c', cellAttributes: { alignment: 'center' } },
    { label: 'Vehicle Test', fieldName: 'VehicleTest__c', cellAttributes: { alignment: 'center' } },
    { label: 'Utilization', fieldName: 'UtilizationRepairOrder__c', cellAttributes: { alignment: 'center' } },
];

export default class RepairOrderInfo extends LightningElement {
    tabColumns = COLUMNS;
    @api recordId;

    // @wire(getRepairOrderMain, { repairOrderId: '$recordId' })
    @wire(getRepairOrderMain, {})
    repairOrder;
    @api
    refreshList() {
        console.log('Chamou o refresh repair order');
        refreshApex(this.repairOrder);
        console.log('repair order result:', this.repairOrder);
    }
}