import { Component } from '@angular/core';
import { MarvellousService } from '../marvellous.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batch-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-details.component.html',
  styleUrl: './batch-details.component.css'
})
export class BatchDetailsComponent 
{
    public Batches : any = [];

    constructor(public obj:MarvellousService){}

    ngOnInit()
    {
      return this.obj.GetBatchDetails().subscribe(data=>this.Batches=data);
    }
}
