import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBatches } from './Batches';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService 
{

  public url : string ="/assets/Data/Batches.json";

  constructor(public hobj : HttpClient) { }

  public GetBatchDetails() : Observable<IBatches[]>
  {
    return this.hobj.get<IBatches[]>(this.url);
  }
}
