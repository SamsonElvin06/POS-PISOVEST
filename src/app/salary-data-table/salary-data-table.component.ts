import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SalaryDataTableDataSource, SalaryDataTableItem } from './salary-data-table-datasource';

import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-salary-data-table',
  templateUrl: './salary-data-table.component.html',
  styleUrls: ['./salary-data-table.component.css']
})
export class SalaryDataTableComponent implements AfterViewInit {

  trash = faTrashCan ;
  receipt = faReceipt;

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<SalaryDataTableItem>;
  dataSource: SalaryDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'position', 'salary', 'deduction', 'totalSalary', 'paidDate', 'action'];

  constructor() {
    this.dataSource = new SalaryDataTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
