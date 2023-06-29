import fetchRepairOrders from '@salesforce/apex/ManRepOrdTechController_Main.fetchRepairOrders';
import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { api } from 'lwc';
import { refreshApex } from "@salesforce/apex";
import { wire } from 'lwc';

const ACTIONS = [
    { label: 'View', name: 'view' },
    { label: 'Edit', name: 'edit' },
];

const COLUMNS = [
    { label: 'Name', fieldName: 'Name', type: 'text', cellAttributes: { alignment: 'left' } },
    { label: 'Technician', fieldName: 'TechnicianFK__c', type: 'lookup' , cellAttributes: { alignment: 'left' } },
    { label: 'Replacement Part', fieldName: 'ReplacementPart_FK__c', type: 'lookup' , cellAttributes: { alignment: 'left' } },
    {
        label: 'Actions',
        type: 'action',
        typeAttributes: { rowActions: ACTIONS },
    },
];

export default class DataTableExample extends NavigationMixin(LightningElement) {
    @track orders;
    @track error;
    @track columns = COLUMNS;

    handleKeyChange(event) {
        const searchTerm = event.target.value;

        if (searchTerm) {
            console.log(searchTerm);
            fetchRepairOrders({ searchTerm })
                .then(result => {
                    this.orders = result;
                }
                )
                .catch(error => {
                    this.error = error;
                }
                );
        }
        else {
            this.orders = undefined;
        }
    }

    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;

        switch (actionName) {
            case 'view':
                this[NavigationMixin.Navigate](
                    {
                        type: 'standard__recordPage',
                        attributes:
                        {
                            recordId: row.Id,
                            actionName: 'view'
                        }
                    }
                );
                break;
            case 'edit':
                this[NavigationMixin.Navigate](
                    {
                        type: 'standard__recordPage',
                        attributes: {
                            recordId: row.Id,
                            objectApiName: 'Account',
                            actionName: 'edit'
                        }
                    }
                );
                break;
            default:
        }
    }
}