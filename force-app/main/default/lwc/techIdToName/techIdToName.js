import { refreshApex } from "@salesforce/apex";
import getRepairOrderAllData from "@salesforce/apex/TechIdToNameController_Main.getRepairOrderAllData";
import { LightningElement, api, wire } from "lwc";

const COLUMNS = [
    { label: 'Name', fieldName: 'Name', cellAttributes: { alignment: 'center' } },
    // { label: 'BrandModel__c', fieldName: 'BrandModel__c', cellAttributes: { alignment: 'center' } },
    // { label: 'Brand__c', fieldName: 'Brand__c', cellAttributes: { alignment: 'center' } },
    // { label: 'CarPlate__c', fieldName: 'CarPlate__c', cellAttributes: { alignment: 'center' } },
    // { label: 'Condition__c', fieldName: 'Condition__c', cellAttributes: { alignment: 'center' } },
    // { label: 'Customers__c', fieldName: 'Customers__c', cellAttributes: { alignment: 'center' } },
    // { label: 'Due_Date__c', fieldName: 'Due_Date__c', cellAttributes: { alignment: 'center' } },
    // { label: 'RepairStatus__c', fieldName: 'RepairStatus__c', cellAttributes: { alignment: 'center' } },
    // { label: 'ReplacementPart_FK__c', fieldName: 'ReplacementPart_FK__c', cellAttributes: { alignment: 'center' } },
    // { label: 'SelectedTechniciansIds__c', fieldName: 'SelectedTechniciansIds__c', cellAttributes: { alignment: 'center' } },
    // { label: 'TechnicianFK__c', fieldName: 'TechnicianFK__c', cellAttributes: { alignment: 'center' } },
    // { label: 'UtilizationRepairOrder__c', fieldName: 'UtilizationRepairOrder__c', cellAttributes: { alignment: 'center' } },
    // { label: 'VehicleTest__c', fieldName: 'VehicleTest__c', cellAttributes: { alignment: 'center' } },
    // { label: 'selectedTechniciansIds2__c', fieldName: 'selectedTechniciansIds2__c', cellAttributes: { alignment: 'center' } },
    // { label: 'CreatedById', fieldName: 'CreatedById', cellAttributes: { alignment: 'center' } },
    // { label: 'LastModifiedById', fieldName: 'LastModifiedById', cellAttributes: { alignment: 'center' } },
    // { label: 'OwnerId', fieldName: 'OwnerId', cellAttributes: { alignment: 'center' } },
];

export default class WorkStatus extends LightningElement {
    tabColumns = COLUMNS;
    @api recordId;

    @wire(getRepairOrderAllData, { techIdToNameOutput: '$recordId' })
    techIdToNameOutput;

    @api
    refreshList() {
        console.log('Chamou o refresh repair order');
        refreshApex(this.techIdToNameOutput);
        console.log('repair order result:', this.techIdToNameOutput);
    }
}