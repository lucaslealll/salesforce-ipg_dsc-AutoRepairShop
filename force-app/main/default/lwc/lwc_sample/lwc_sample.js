import { LightningElement } from 'lwc';

function openDialog() {
    document.getElementById('dialog').style.display = 'block';
}

function closeDialog() {
    document.getElementById('dialog').style.display = 'none';
}


export default class Lwc_sample extends LightningElement { }