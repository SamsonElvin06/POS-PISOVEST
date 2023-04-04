import { Component } from '@angular/core';
import { AddSalaryComponent } from '../add-salary/add-salary.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-salary',
  templateUrl: './manage-salary.component.html',
  styleUrls: ['./manage-salary.component.css']
})
export class ManageSalaryComponent {
  constructor(public dialog:MatDialog){}
  openDialog(){
    this.dialog.open(AddSalaryComponent,{
      width: '400px',
      data: "right click",
      height: '670px'
    })

    
  }
}
