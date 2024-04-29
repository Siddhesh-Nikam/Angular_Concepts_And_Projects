import { Component } from '@angular/core';
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
    public Batches=[
      {"Name":"PPA" , "Fees":18000,"Duration":"4.5 months"},
      {"Name":"LB" , "Fees":17000,"Duration":"4.0 months"},
      {"Name":"Angular" , "Fees":16000,"Duration":"3.5 months"},
      {"Name":"Python" , "Fees":15000,"Duration":"3.0 months"},
    ];
}
