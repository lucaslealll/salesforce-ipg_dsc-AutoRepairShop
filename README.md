<div align="center">
<div style="display: center; justify-content: bottom;">
  <img src="assets/logo_ipg.png" height="150" style='margin-bottom: 15px'>
    <img src="assets/logo_salesforce.png" height="100" style='margin-bottom: 35px'>
</div> 
  
<div align="center">
    <div style="display: center; justify-content: bottom;">
      <img src="assets/logo_merkle.png" height="50" style='margin-bottom: 15px'> 
  
</div>

![Version: 1.0.0](https://img.shields.io/badge/%20Version%20-1.0.0-%2304304E?style=flat&labelColor=f23a1d)
![Status: Final](https://img.shields.io/badge/%20Status%20-Final%20-%2304304E?style=flat&labelColor=f23a1d)
[![School: IPG](https://img.shields.io/badge/%20School%20-IPG%20Guarda%20-%2304304E?style=flat&labelColor=f23a1d)](https://politecnicoguarda.pt/sobrenos/as-escolas/estg/)
![Project: Merkle - Salesforce](https://img.shields.io/badge/%20Project%20-Merkle%20/%20Salesforce-%2304304E?style=flat&labelColor=f23a1d)

</div>
</div>

# **Software Cloud Computing - Salesforce Auto Repair Shop**

Software Cloud Computing - Salesforce Auto Repair Shop
This project is a system for an auto repair shop that allows the creation and management of technicians, repair orders, and replacement parts. Below are the listed requirements and implemented functionalities:

<!-- ## Application Screenshots

### Home Tab

<img src="assets/home.png" height="400">

### Repair Order Tab

<img src="assets/repair_order.png" height="250">

### Technicians Tab

<img src="assets/technicians.png" height="300">

### Replacement Parts Tab

<img src="assets/replacement_part.png" height="400">

### Customers Tab

<img src="assets/customers.png" height="350"> -->

## Project Requirements

### Objects to be Created:

- **Technician**: Represents a technician responsible for repair orders.
- **Repair** Order: Represents a repair order with information about the equipment to be repaired and the responsible technician.
- **Replacement** Part: Represents a replacement part that can be used in repair orders.

### Many-to-Many Relationships:

The relationships between Technician and Repair Order, and between Replacement Part and Repair Order should be of the "many-to-many" type, allowing a technician to be associated with multiple repair orders and a replacement part to be used in multiple repair orders.

### Adaptation of Existing Automations:

Existing automations, such as Flows, Validation Rules, and Triggers, should be adapted to fit the new "many-to-many" data model.

### New Field and Semaphore on the "Repair Order" Object:

Add the "Repair Status" field to the 'Repair Status' picklist on the "Repair Order" object with the value "Behind Schedule." Additionally, create the following fields:

- **Due Date**: A date field representing the deadline for the completion of the repair order.
- **Condition**: A field that functions as a semaphore, with colors related to the "Due Date" and "Repair Status":
  - If the repair order is "Finished" before or on the "Due Date," the semaphore should show the color Green.
  - If up to 3 days have passed from the "Due Date," and the "Repair Status" is still not "Finished," the semaphore should show the color Yellow, and the "Repair Status" should be updated to "Behind Schedule."
  - If more than 3 days have passed from the "Due Date," and the "Repair Status" is still not "Finished," the semaphore should show the color Red, and the "Repair Status" should be updated to "Behind Schedule."

### Changes in the LWC "Manage Repair Order":

- _The LWC "Manage Repair Order" should be updated to adapt to the new many-to-many data model._

### Allow Multiple Technicians and Multiple Replacement Parts:

Edit the LWC to allow the creation of repair orders with multiple associated technicians and replacement parts.

### Extra/Bonus Features of the Project

- Information organization using Tabs, Pages, Layouts, etc.
- Additional extra functionalities (describe which ones were implemented).
- Adoption of best development practices in Apex, LWC, and coding.
- Additional Implemented Functionalities
- Full utilization of a technician, not exceeding a total of 100% across all repair orders they are responsible for.
- Calculation of the total price of selected parts in a repair order.
- Validation rules for fields to mitigate user errors, such as NIF (tax identification number), email, phone number, etc.

### Flow and Validation Rules

### Flow needed for selecting multiple technicians

This is a screen flow that contains a component for an Apex code action, where the user can add multiple technicians to a repair order. This is necessary to meet the new many-to-many data model.
<img src="assets/mult_select_technicians.png" height=500>

### Flow to update the color condition

This is a scheduled flow that runs at 00:00 every day and updates the semaphore field for each repair order. Based on the defined criteria, if the current date is earlier than the due date, and the status is not "Finished," the semaphore shows Green. If up to 3 days have passed from the due date, and the status is not "Finished," the semaphore shows Yellow, and the status is updated to "Behind Schedule." Finally, if more than 3 days have passed from the due date, and the status is not "Finished," the semaphore shows Red, and the status is updated to "Behind Schedule." A flow trigger called "update status repair order" was created with the same data flow sequence to handle cases where the user changes the date during execution since the scheduled flow updates only once a day.

<!-- <img src="assets/flow_update_color.png" height=500> -->

### Flow needed to calculate technician utilization

This trigger flow was created to sum the utilization of a repair order to the total utilization of a technician. Since a repair order has a utilization percentage associated with it, when a technician is assigned to a repair order, the order's utilization percentage is added to the technician's total utilization. When the technician is changed, the flow can remove the old technician's utilization and add it to the new technician. There is a validation on the technician field that prevents it from exceeding 100% utilization, so it won't update to the selected technician if it would exceed the limit.

<!-- <img src="assets/flow_tech_utilization.png" height=500> -->

### Flow needed to authorize the vehicle for testing or not

If the status of a repair order is "Finished," the vehicle is authorized for testing. In this case, the flow sends a chatter message "{Repair Order Name} is finished! Now the vehicle can be tested before being delivered to the customer!" and updates the Vehicle Tests field to "Authorized." A similar flow was created to handle the opposite situation. If a repair order was previously marked as "Finished" but needs to change its status, the flow sends a chatter message "The test for the repair order {Repair Order Name} didn't occur as planned, the vehicle is unauthorized for the test until the problem is fixed." and updates the Vehicle Tests field to "Unauthorized."

<!-- <img src="assets/flow_ready_for_tests.png" height=500> -->
