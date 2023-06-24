import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//import the apex cntroller for this lwc
import saveTechnicians from '@salesforce/apex/TechnicianController_Main.saveNewTechnician';
export default class AddTechnicians extends LightningElement {
    @api recordId

    //add a new form line
    addRow() {
        //add a new row with empty fields
        this.techniciansFormInfo.push({
            Name: '',
            Quantity__c: '',
            Utilization__c: ''
        });
    }
    //delete a new form line
    deleteRow(event) {
        //if have more than one row delete the current row
        var rowIndex = event.currentTarget.dataset.index;
        if (this.techniciansFormInfo.length > 1) {
            this.techniciansFormInfo.splice(rowIndex, 1);
            //else if have just one row delete the current row data
        } else if (this.techniciansFormInfo.length == 1) {
            this.techniciansFormInfo = [{
                Name: '',
                Quantity__c: '',
                Utilization__c: ''
            }];
        }
    }
    //track  variables value from html
    @track techniciansFormInfo = [{
        Name: '',
        Quantity__c: '',
        Utilization__c: ''
    }];
    //remove all rows
    removeAllRows() {
        let techniciansFormInfo = [];
        this.techniciansFormInfo = techniciansFormInfo;
        this.addRow();
    }
    //handle the change of the values of each field and row to pick up the last inserted
    handleChange(event) {
        var rowIndex = event.currentTarget.dataset.index;
        console.log('Aqui1: ');
        if (event.target.name === 'Name') {
            this.techniciansFormInfo[rowIndex].Name = event.target.value;
        } else if (event.target.name === 'Quantity__c') {
            this.techniciansFormInfo[rowIndex].Quantity__c = event.target.value;
        } else if (event.target.name === 'Utilization__c') {
            this.techniciansFormInfo[rowIndex].Utilization__c = event.target.value;
        }
    }
    //save new records
    handleSave() {
        saveTechnicians({
            techniciansFormInfo: JSON.stringify(this.techniciansFormInfo), ID: this.recordId
        })
            .then(result => {
                if (result) {
                    this.showNotification('Technician created successfully',
                        'Replacement Part were successfully inserted', 'success');
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
        this.techniciansFormInfo = [{
            Name: '',
            Quantity__c: '',
            UnitCost__c: ''
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