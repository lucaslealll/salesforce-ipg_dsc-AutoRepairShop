import getFilteredAccounts from '@salesforce/apex/DataTableController.getFilteredAccounts';
import getRepOrdDataTable from '@salesforce/apex/ManRepOrdTechController_Main.getRepOrdDataTable';
import { LightningElement, wire, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { refreshApex } from "@salesforce/apex";

const actions = [
    { label: 'View', name: 'view' },
    { label: 'Edit', name: 'edit' },
    // { label: 'Delete', name: 'delete' },
];

const COLUMNS = [
    { label: 'Name', fieldName: 'Name', type: 'text' },
    { label: 'Rep. Order', fieldName: 'Name', cellAttributes: { alignment: 'left' } },
    { label: 'Technician', fieldName: 'TechnicianFK__c', cellAttributes: { alignment: 'left' } },
    { label: 'Parts', fieldName: 'ReplacementPart_FK__c', cellAttributes: { alignment: 'left' } },
    { label: 'Actions', type: 'action', typeAttributes: { rowActions: actions }, cellAttributes: { alignment: 'center' } }
];

export default class DataTableExample extends LightningElement {

    searchTerm = '';
    orders = [];
    columns = COLUMNS;

    @wire(getRepOrdDataTable, { searchTerm: '$searchTerm' })
    wiredAccounts({ error, data }) {
        if (data) { this.orders = data; }
        else if (error) { console.error(error); }
    }
    handleSearchChange(event) { this.searchTerm = event.target.value; }
}