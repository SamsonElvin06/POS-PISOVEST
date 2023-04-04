import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { StaffDataTableDataSource, StaffDataTableItem } from './staff-data-table-datasource';

import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import {faPenToSquare} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-staff-data-table',
  templateUrl: './staff-data-table.component.html',
  styleUrls: ['./staff-data-table.component.css']
})
export class StaffDataTableComponent implements AfterViewInit {

  trash = faTrashCan ;
  edit = faPenToSquare;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<StaffDataTableItem>;
  dataSource: StaffDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'position', 'mobile', 'email','photo', 'birthday', 'address', 'dateJoined', 'action' ];

  constructor() {
    this.dataSource = new StaffDataTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
