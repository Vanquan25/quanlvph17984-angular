import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  product: Product
  constructor(private productService:ProductService,
    private activateRoute:ActivatedRoute) {
      this.product = {
        id: '',
        name:''
      };
     }

  ngOnInit(): void {
    //ACtiveRoute sẽ có thể đọc biến được truyền vào trên url
    const idFormUrl = this.activateRoute.snapshot.params['id'];
    
    this.productService.getProduct(idFormUrl).subscribe(data =>{
      this.product = data;
    })
  }

}
