import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService {

  constructor() { }

  public GetBatchDetails()
  {
    return [
      {"Name":"PPA" , "Fees":18000,"Duration":"4.5 months"},
      {"Name":"LB" , "Fees":17000,"Duration":"4.0 months"},
      {"Name":"Angular" , "Fees":16000,"Duration":"3.5 months"},
      {"Name":"Python" , "Fees":15000,"Duration":"3.0 months"},
    ]
  }
}

