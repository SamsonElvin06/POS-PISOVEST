import { Component } from '@angular/core';
import { AddProductComponent } from '../add-product/add-product.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent {

  constructor(public dialog:MatDialog){}
  openDialog(){
    this.dialog.open(AddProductComponent,{
      width: '400px',
      data: "right click",
      height: '670px'
    })

    
  }
}
