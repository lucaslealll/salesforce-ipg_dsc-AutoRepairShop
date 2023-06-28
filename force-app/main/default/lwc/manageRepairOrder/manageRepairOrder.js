import { LightningElement, api, wire} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { refreshApex } from "@salesforce/apex";
import getRepOrdDataTable from "@salesforce/apex/ManRepOrdTechController_Main.getRepOrdDataTable";

const actions = [
    { label: 'View', name: 'view' },
    { label: 'Edit', name: 'edit' },
    { label: 'Delete', name: 'delete' },
];

const COLUMNS = [
    { label: 'Rep. Order', fieldName: 'Name', cellAttributes: { alignment: 'left' } },
    { label: 'Technician', fieldName: 'TechnicianFK__c', cellAttributes: { alignment: 'left' } },
    { label: 'Parts', fieldName: 'ReplacementPart_FK__c', cellAttributes: { alignment: 'left' } },
    { label: 'Actions', type: 'action', typeAttributes: { rowActions: actions }, cellAttributes: { alignment: 'center' } },
];

export default class ManRepOrdTech extends LightningElement {
    error;
    searchString;
    initialRecords;
    
    tabColumns = COLUMNS;
    @api recordId;


    // @wire(getRepOrdDataTable, { mrocOutput: '$recordId' })
    @wire(getRepOrdDataTable, { mrocOutput: 'a026700001Iuw93AAB' })
    mrocOutput;

    @api
    refreshList() {
        console.log('Chamou o refresh repair order');
        refreshApex(this.controllerOutput);
        console.log('repair order result:', this.controllerOutput);
    }
}