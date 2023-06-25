import { LightningElement, api } from 'lwc';

export default class ManageRepairOrder extends LightningElement {
    @api recordId;

    value = false;
    techRefresh = false;

    handleRefresh(event) {
        this.removeAllRows('c-replacement-part-info');
        this.value = true;
    }
    handleRefreshTechnician(event) {
        this.removeAllRows('c-technicians-info');
        this.techRefresh = true;
    }
    removeAllRows(component) {
        console.log('component', component);
        this.template.querySelector(component).refreshList();
    }
}