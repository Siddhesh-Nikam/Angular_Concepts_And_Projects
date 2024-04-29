import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvellousService } from '../marvellous.service';

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

  constructor(public mobj : MarvellousService)
  {

  }

  ngOnInit()
  {
    this.Batches=this.mobj.GetBatchDetails();
  }

}
