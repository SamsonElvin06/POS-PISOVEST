import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from './add-category/add-category.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pos_ang';

constructor(public dialog:MatDialog){}
  openDialog(){
    this.dialog.open(AddCategoryComponent,{
      width: '250px',
      data: "right click"
    })
  }



}
