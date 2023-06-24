import { LightningElement, api, wire } from 'lwc';
import getReplacementParts from '@salesforce/apex/ReplacementPartController_Main.replacementPartMain'
//for refresh a single component
import { refreshApex } from '@salesforce/apex';

const COLUMNS = [
	{label: 'Name', fieldName: 'Name', cellAttributes: {alignment: 'center'}},
	{label: 'Quantity', fieldName: 'Quantity__c', cellAttributes: {alignment: 'center'}},
	{label: 'Unit Cost', fieldName: 'UnitCost__c', cellAttributes: {alignment: 'center'}},
	{label: 'Total Cost', fieldName: 'TotalCost__c', cellAttributes: {alignment: 'center'}},
];
export default class ReplacementPartInfo extends LightningElement {
	columns = COLUMNS;
	@api recordId;
	@wire(getReplacementParts,{repOrderId: '$recordId'})
	replacementParts;
	@api
    refreshList(){
        console.log('Chamou o refresh repPart');
		refreshApex(this.replacementParts);
		console.log('repPart result:', this.replacementParts);
    }
}