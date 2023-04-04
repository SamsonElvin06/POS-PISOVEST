import { Component } from '@angular/core';
import { AddStaffComponent } from '../add-staff/add-staff.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})
export class ManageStaffComponent {

  constructor(public dialog:MatDialog){}
  openDialog(){
    this.dialog.open(AddStaffComponent,{
      width: '400px',
      data: "right click",
      height: '670px'
    })

    
  }

}
