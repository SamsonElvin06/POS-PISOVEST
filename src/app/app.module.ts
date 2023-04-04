import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';




import { ProductListDashboardComponent } from './product-list-dashboard/product-list-dashboard.component';

import { AddCategoryComponent } from './add-category/add-category.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductDataTableComponent } from './product-data-table/product-data-table.component';


import {MatDialogModule} from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageStaffComponent } from './manage-staff/manage-staff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { StaffDataTableComponent } from './staff-data-table/staff-data-table.component';
import { ManageSalaryComponent } from './manage-salary/manage-salary.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { SalaryDataTableComponent } from './salary-data-table/salary-data-table.component';
import { InvoiceComponent } from './invoice/invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListDashboardComponent,
    AddCategoryComponent,
    ManageCategoryComponent,
    DataTableComponent,
    ProductDataTableComponent,
    AddProductComponent,
    ManageProductComponent,
    ManageStaffComponent,
    AddStaffComponent,
    StaffDataTableComponent,
    ManageSalaryComponent,
    AddSalaryComponent,
    SalaryDataTableComponent,
    InvoiceComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
    ,MatInputModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule, 
    FontAwesomeModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    MatSelectModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
