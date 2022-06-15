import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public data!:FormGroup
  constructor() { }

  ngOnInit(): void {
    const data1= this.data.value
    console.log(data1)
  }

}
   
