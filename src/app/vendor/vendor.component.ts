import { ApiService } from '../api.service';
import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

export interface type {
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  phone: string;
}
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})

export class VendorComponent implements OnInit {

  vendors: any;
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.getVendors();
  }
  public getVendors() {
    this.apiService.getVendors().subscribe(res => {
      console.log(res);
      this.vendors = res;
    }, err => {
      console.log(err);
    });
  }
}
