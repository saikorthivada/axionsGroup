import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  tableInfo: any; // for getting table data from parent component
  constructor() { }

  ngOnInit() {
  }
}
