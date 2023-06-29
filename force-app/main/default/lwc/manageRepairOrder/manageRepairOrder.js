// Importe os módulos necessários e o método Apex
import fetchRepairOrders from '@salesforce/apex/ManRepOrdTechController_Main.fetchRepairOrders';
import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { api } from 'lwc';
import { refreshApex } from "@salesforce/apex";
import { wire } from 'lwc';

// Define as ações para as ações de nível de linha
const ACTIONS = [
    { label: 'View', name: 'view' },
    { label: 'Edit', name: 'edit' },
];

// Define as colunas para a tabela de dados
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

export default class DataTableMRO extends NavigationMixin(LightningElement) {
    @track orders;
    @track error;
    @track columns = COLUMNS;

    // Manipula a mudança no campo de pesquisa
    handleKeyChange(event) {
        const searchTerm = event.target.value;

        if (searchTerm) {
            // Se houver um termo de pesquisa, chame o método Apex para buscar as ordens de reparo
            console.log(searchTerm);
            fetchRepairOrders({ searchTerm })
                .then(result => {
                    this.orders = result;
                })
                .catch(error => {
                    this.error = error;
                });
        } else {
            // Se o termo de pesquisa estiver vazio, limpe as ordens
            this.orders = undefined;
        }
    }

    // Manipula ação na linha da tabela
    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;

        switch (actionName) {
            case 'view':
                // Navega para a página de registro padrão no modo de visualização
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: row.Id,
                        actionName: 'view'
                    }
                });
                break;
            case 'edit':
                // Navega para a página de registro padrão no modo de edição para o objeto Account
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: row.Id,
                        objectApiName: 'Account',
                        actionName: 'edit'
                    }
                });
                break;
            default:
                // Lida com outras ações, se necessário
                break;
        }
    }
}