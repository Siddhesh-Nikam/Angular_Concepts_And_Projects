import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-batch-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batch-list.component.html',
  styleUrl: './batch-list.component.css'
})
export class BatchListComponent 
{
  public Batches=[
    {"Name":"PPA" , "Fees":18000,"Duration":"4.5 months"},
    {"Name":"LB" , "Fees":17000,"Duration":"4.0 months"},
    {"Name":"Angular" , "Fees":16000,"Duration":"3.5 months"},
    {"Name":"Python" , "Fees":15000,"Duration":"3.0 months"},
  ];
}
