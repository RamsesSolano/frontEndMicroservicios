import { Component, OnInit } from '@angular/core';
import { CompanyResponse } from '../models/companyResponse';
import { BusinessService } from './business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  allBusiness: Array<CompanyResponse> = [];
  displayedColumns: String[] = [
    'businessName',
    'direction',
    'identificationNumber',
    'firstName',
    'otherName',
    'surname',
    'secondSurname',
    'phone'
   ];

  constructor(
    private businessService: BusinessService
  ) { }

  ngOnInit(): void {
    this.businessService.getAllBusiness().then( (value: Array<CompanyResponse>  ) => {
      this.allBusiness = value;
      console.log( value );
      console.log( this.allBusiness );
    } )
  }

}
