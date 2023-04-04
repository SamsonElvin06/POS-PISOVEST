import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductDataTableDataSource, ProductDataTableItem } from './product-data-table-datasource';

import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import {faPenToSquare} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-product-data-table',
  templateUrl: './product-data-table.component.html',
  styleUrls: ['./product-data-table.component.css']
})
export class ProductDataTableComponent implements AfterViewInit {

  trash = faTrashCan ;
  edit = faPenToSquare;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ProductDataTableItem>;
  dataSource: ProductDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['category', 'product', 'type', 'brand', 'serial', 'originalPrice', 'sellingPrice', 'action'];

  constructor() {
    this.dataSource = new ProductDataTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
