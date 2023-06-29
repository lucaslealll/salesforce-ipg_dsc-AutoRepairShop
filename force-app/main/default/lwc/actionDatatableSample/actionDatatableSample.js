import { LightningElement, track } from 'lwc';
import fetchAccounts from '@salesforce/apex/AccountController.fetchAccounts';
import { NavigationMixin } from 'lightning/navigation';

const actions = [
    { label: 'View', name: 'view' },
    { label: 'Edit', name: 'edit' },
];

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Industry', fieldName: 'Industry' },
    {
        type: 'action',
        typeAttributes: { rowActions: actions },
    },
];

export default class LightningDataTableLWC extends NavigationMixin(LightningElement) {
    @track accounts;
    @track error;
    @track columns = columns;

    handleKeyChange(event) {
        const searchKey = event.target.value;

        if (searchKey) {
            fetchAccounts({ searchKey })
                .then(result => {
                    this.accounts = result;
                }
                )
                .catch(error => {
                    this.error = error;
                }
                );
        } else
            this.accounts = undefined;
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