import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

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

  constructor(public mobj : MarvellousService)
  {

  }

  ngOnInit()
  {
    this.Batches=this.mobj.GetBatchDetails();
  }

}
