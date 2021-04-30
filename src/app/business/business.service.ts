import { Injectable } from '@angular/core';
import { CoreService } from '../core/services/core.service';
import { CompanyResponse } from '../models/companyResponse';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(
    private coreService: CoreService
  ) { }

  async getAllBusiness(): Promise< Array<CompanyResponse> > {
    return await this.coreService.getFromApi( '/company' );
  }
}
