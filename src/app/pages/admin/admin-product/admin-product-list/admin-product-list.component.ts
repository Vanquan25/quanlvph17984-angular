import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[];
  constructor(private prdService: ProductService) {this.products = [] }

  ngOnInit(): void {
    this.onGetList();
    }
    //Lấy ds sẽ được gọi khi lần đầu render và khi xóa mỗi phần tử
  onGetList(){
    //Lắng nghe API trả về kết quả, bao giờ trả về xong thì data có dữ liệu
    this.prdService.getProducts().subscribe((data)=>{
      //khi co dữ liệu sẽ gán về cho danh sách
      this.products= data
    }); 
    }
  onDelete(id: string | number){
    //confirm
    const confirmDelete = confirm('Bạn có chắc chắn xóa không?');

    //kiểm tra dữ liệu
    if (confirmDelete && id) {
      this.prdService.deleteProduct(id).subscribe((data)=>{
        //Cập nhật lại danh sách
      this.onGetList();
      })      
    }
  }
}

