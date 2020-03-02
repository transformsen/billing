import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillingSubgroup } from '../models/billing-subgroup';
import { BillingGroup, BillingIndividual } from '../models/billing-search';
import { BillingInfo } from '../models/billing-info';
import { PremiumBreakDown } from '../models/premium-breakdown';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  
  //This propery has been read from environment. Update this in environment.ts (or) environment-prod.ts file.
  //Assumed server is going to suppoer Query Param based url. Please change here.
  private api: string = environment.api;
  
  constructor(private httpClient: HttpClient) { }

  getBillingIndividual(ssn: string, policyId: string) : Observable<BillingIndividual> {
    return this.httpClient.get<BillingIndividual>(`${this.api}/billing-individual?ssn=${ssn}&policyId=${policyId}`) 
  }

  getBillingGroup(groupName: string, groupId: string, subGroupId: string): Observable<BillingGroup> {
    return this.httpClient.get<BillingGroup>(`${this.api}/billing-group?groupName=${groupName}&groupId=${groupId}&subGroupId=${subGroupId}`) 
  }

  getBillingSubGroup(subgroupId: any): Observable<BillingSubgroup> {
    return this.httpClient.get<BillingSubgroup>(`${this.api}/sub-group?subgroupId=${subgroupId}`)
  }

  getBillingInfo(policyId: any): Observable<BillingInfo> {
    return this.httpClient.get<BillingInfo>(`${this.api}/billing-info?policyId=${policyId}`)    
  }

  getPremiumBreakdown(policyId: string): Observable<PremiumBreakDown> {
    return this.httpClient.get<PremiumBreakDown>(`${this.api}/premium-breakdown?policyId=${policyId}`) 
  }
  

}
