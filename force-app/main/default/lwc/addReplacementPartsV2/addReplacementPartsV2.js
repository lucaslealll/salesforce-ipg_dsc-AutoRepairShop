import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { LightningElement, api, track } from 'lwc';
import saveReplacementParts from '@salesforce/apex/ReplacementPartController_Main.saveNewReplacementParts';

export default class AddReplacementPartsV2 extends LightningElement {
    @api recordId

    //add a new form line
    addRow() {
        //add a new row with empty fields
        this.replacementPartsV2FormInfo.push({
            Name: '',
            UnitCost__c: '',
            Part_Number__c: '',
            VehicleMake__c: '',
            Vehicle_Model__c: '',
            Vehicle_Year__c: '',
            Stock__c: '',
            Supplier__c: '',
            Stock_Location__c: '',
            Minimum_Stock_Level__c: '',
            Notes__c: '',
        });
    }
    //delete a new form line
    deleteRow(event) {
        //if have more than one row delete the current row
        var rowIndex = event.currentTarget.dataset.index;
        if (this.replacementPartsV2FormInfo.length > 1) {
            this.replacementPartsV2FormInfo.splice(rowIndex, 1);
            //else if have just one row delete the current row data
        } else if (this.replacementPartsV2FormInfo.length == 1) {
            this.replacementPartsV2FormInfo = [{
                Name: '',
                UnitCost__c: '',
                Part_Number__c: '',
                VehicleMake__c: '',
                Vehicle_Model__c: '',
                Vehicle_Year__c: '',
                Stock__c: '',
                Supplier__c: '',
                Stock_Location__c: '',
                Minimum_Stock_Level__c: '',
                Notes__c: '',
            }];
        }
    }
    //track  variables value from html
    @track replacementPartsV2FormInfo = [{
        Name: '',
        UnitCost__c: '',
        Part_Number__c: '',
        VehicleMake__c: '',
        Vehicle_Model__c: '',
        Vehicle_Year__c: '',
        Stock__c: '',
        Supplier__c: '',
        Stock_Location__c: '',
        Minimum_Stock_Level__c: '',
        Notes__c: '',
    }];
    //remove all rows
    removeAllRows() {
        let replacementPartsV2FormInfo = [];
        this.replacementPartsV2FormInfo = replacementPartsV2FormInfo;
        this.addRow();
    }
    //handle the change of the values of each field and row to pick up the last inserted
    handleChange(event) {
        var rowIndex = event.currentTarget.dataset.index;
        console.log('>>>>>>>>>>>>>: ');
        if (event.target.name === 'Name') {
            this.replacementPartsV2FormInfo[rowIndex].Name = event.target.value;
        }
        else if (event.target.name === 'UnitCost__c') {
            this.replacementPartsV2FormInfo[rowIndex].UnitCost__c = event.target.value;
        }
        else if (event.target.name === 'Part_Number__c') {
            this.replacementPartsV2FormInfo[rowIndex].Part_Number__c = event.target.value;
        }
        else if (event.target.name === 'VehicleMake__c') {
            this.replacementPartsV2FormInfo[rowIndex].VehicleMake__c = event.target.value;
        }
        else if (event.target.name === 'Vehicle_Model__c') {
            this.replacementPartsV2FormInfo[rowIndex].Vehicle_Model__c = event.target.value;
        }
        else if (event.target.name === 'Vehicle_Year__c') {
            this.replacementPartsV2FormInfo[rowIndex].Vehicle_Year__c = event.target.value;
        }
        else if (event.target.name === 'Stock__c') {
            this.replacementPartsV2FormInfo[rowIndex].Stock__c = event.target.value;
        }
        else if (event.target.name === 'Supplier__c') {
            this.replacementPartsV2FormInfo[rowIndex].Supplier__c = event.target.value;
        }
        else if (event.target.name === 'Stock_Location__c') {
            this.replacementPartsV2FormInfo[rowIndex].Stock_Location__c = event.target.value;
        }
        else if (event.target.name === 'Minimum_Stock_Level__c') {
            this.replacementPartsV2FormInfo[rowIndex].Minimum_Stock_Level__c = event.target.value;
        }
        else if (event.target.name === 'Notes__c') {
            this.replacementPartsV2FormInfo[rowIndex].Notes__c = event.target.value;
        }
    }
    //save new records
    handleSave() {
        saveReplacementParts({
            replacementPartsV2FormInfo: JSON.stringify(this.replacementPartsV2FormInfo), ID: this.recordId
        })
            .then(result => {
                if (result) {
                    this.showNotification('Replacement Part created successfully',
                        'Replacement part successfully inserted', 'success');
                    //create a new event
                    const refreshEvent = new CustomEvent('refresh');
                    //dispatch the event
                    this.dispatchEvent(refreshEvent);
                }
                console.log('result: ', result);
                //if something went wrong send error to the user
            }).catch(error => {
                this.showNotification('Error creating record',
                    'Something went wrong ' + error.body.message, 'error');
            });
        this.replacementPartsV2FormInfo = [{
            Name: '',
            UnitCost__c: '',
            Part_Number__c: '',
            VehicleMake__c: '',
            Vehicle_Model__c: '',
            Vehicle_Year__c: '',
            Stock__c: '',
            Supplier__c: '',
            Stock_Location__c: '',
            Minimum_Stock_Level__c: '',
            Notes__c: '',
        }];
    }
    //Send a toast
    showNotification(title, message, variant) {
        console.log('toasssstttt');
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        })
        this.dispatchEvent(evt);
    }
}