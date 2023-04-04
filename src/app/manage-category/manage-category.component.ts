import { Component } from '@angular/core';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';
// import { AddProductComponent } from '../add-product/add-product.component';


@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent {
  
  constructor(public dialog:MatDialog){}
  openDialog(){
    this.dialog.open(AddCategoryComponent,{
      width: 'auto',
      data: "right click",
      height: '300px'
    })

    
  }


}
