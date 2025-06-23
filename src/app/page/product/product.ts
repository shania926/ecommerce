import { Component } from '@angular/core';
import { ApiServices } from '../../apiservices';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  products:any[]=[]; constructor(private apiservice:ApiServices) {}
    ngOnInit(){
      this.apiservice.getproduct().subscribe((data:any)=>{
    this.products=data;
    console.log(data);
  });
}
}

