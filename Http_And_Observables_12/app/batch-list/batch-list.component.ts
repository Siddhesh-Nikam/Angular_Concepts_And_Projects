import { Component } from '@angular/core';
import { MarvellousService } from '../marvellous.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batch-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-list.component.html',
  styleUrl: './batch-list.component.css'
})
export class BatchListComponent 
{
  public Batches : any = [];

  constructor(public obj:MarvellousService){}

  ngOnInit()
  {
    return this.obj.GetBatchDetails().subscribe(data=>this.Batches=data);
  }
}
