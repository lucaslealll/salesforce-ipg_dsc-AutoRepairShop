import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { LightningElement, api, track } from 'lwc';
//import the apex controller for this lwc
import saveReplacementParts from '@salesforce/apex/ReplacementPartController_Main.saveNewReplacementParts';

export default class AddReplacementParts extends LightningElement {
    @api recordId
    //add a new form line
    addRow() {//console.log('add.addRow',JSON.parse(JSON.stringify(this.replacePartsFormInfo)));
        //add a new row with empty fields
        this.replacePartsFormInfo.push({
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
        //console.log('add.addRow',JSON.parse(JSON.stringify(this.replacePartsFormInfo)));
    }
    //delete a new form line
    deleteRow(event) {
        //if have more than one row delete the current row
        var rowIndex = event.currentTarget.dataset.index;
        if (this.replacePartsFormInfo.length > 1) {
            this.replacePartsFormInfo.splice(rowIndex, 1);
            //else if have just one row delete the current row data
        } else if (this.replacePartsFormInfo.length == 1) {
            this.replacePartsFormInfo = [{
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
    @track replacePartsFormInfo = [{
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
        let replacePartsFormInfo = [];
        this.replacePartsFormInfo = replacePartsFormInfo;
        this.addRow();
    }
    //handle the change of the values of each field and row to pick up the last inserted
    handleChange(event) {
        var rowIndex = event.currentTarget.dataset.index;
        console.log('>>>>>>>>>>>>>: ');
        if (event.target.name === 'Name') {
            this.techniciansFormInfo[rowIndex].Name = event.target.value;
        }
        else if (event.target.name === 'UnitCost__c') {
            this.techniciansFormInfo[rowIndex].UnitCost__c = event.target.value;
        }
        else if (event.target.name === 'Part_Number__c') {
            this.techniciansFormInfo[rowIndex].Part_Number__c = event.target.value;
        }
        else if (event.target.name === 'VehicleMake__c') {
            this.techniciansFormInfo[rowIndex].VehicleMake__c = event.target.value;
        }
        else if (event.target.name === 'Vehicle_Model__c') {
            this.techniciansFormInfo[rowIndex].Vehicle_Model__c = event.target.value;
        }
        else if (event.target.name === 'Vehicle_Year__c') {
            this.techniciansFormInfo[rowIndex].Vehicle_Year__c = event.target.value;
        }
        else if (event.target.name === 'Stock__c') {
            this.techniciansFormInfo[rowIndex].Stock__c = event.target.value;
        }
        else if (event.target.name === 'Supplier__c') {
            this.techniciansFormInfo[rowIndex].Supplier__c = event.target.value;
        }
        else if (event.target.name === 'Stock_Location__c') {
            this.techniciansFormInfo[rowIndex].Stock_Location__c = event.target.value;
        }
        else if (event.target.name === 'Minimum_Stock_Level__c') {
            this.techniciansFormInfo[rowIndex].Minimum_Stock_Level__c = event.target.value;
        }
        else if (event.target.name === 'Notes__c') {
            this.techniciansFormInfo[rowIndex].Notes__c = event.target.value;
        }
        //console.log('Aqui: ', event.target.name);console.log('Aqui: ', event.target.value);
        //console.log('handleChange',JSON.parse(JSON.stringify(this.replacePartsFormInfo)));
    }
    //save new records
    handleSave() {
        saveReplacementParts({
            replacePartsFormInfo: JSON.stringify(this.replacePartsFormInfo), ID: this.recordId
        })
            .then(result => {
                if (result) {
                    this.showNotification('Replacement Part created successfully',
                        'Replacement Part were successfully inserted', 'success');
                    //create a new event
                    const refreshEvent = new CustomEvent('refresh');
                    //dispatch the event
                    this.dispatchEvent(refreshEvent);
                }
                //if something went wrong send error to the user
            }).catch(error => {
                this.showNotification('Error creating record',
                    'Something went wrong ' + error.body.message, 'error');
            });
        this.replacePartsFormInfo = [{
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