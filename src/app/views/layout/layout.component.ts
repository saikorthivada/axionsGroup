import { Component, OnInit } from '@angular/core';
import { LayoutService } from './layout.service'; // custom service for getting data from JSON file located in assets.

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  remoteData = []; // for sending data from parent to child components
  isTableView = true; // Default view is table.
  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.getRemoteInfo(); // calling remote data on load of component
  }

  // by getting data from http call
  getRemoteInfo() {
    this.layoutService.getRemoteData().subscribe(res => {
      this.remoteData = res;
    });
  }
}
