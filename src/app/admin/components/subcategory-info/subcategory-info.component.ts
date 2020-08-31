import { AdminaddproductComponent } from './../adminaddproduct/adminaddproduct.component';
import { Product } from './../../../entities/product';
import { SubCategory } from './../../../entities/sub-category';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { SubcategoryService } from './../../../services/subcategory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategory-info',
  templateUrl: './subcategory-info.component.html',
  styleUrls: ['./subcategory-info.component.scss']
})
export class SubcategoryInfoComponent implements OnInit {

  id: string;
  dummy: SubCategory = {};
  subcatSource = new BehaviorSubject(this.dummy)
  subcatObs = this.subcatSource.asObservable();
  products: Product[] = [];

  constructor(private dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router,
              private subcatservice: SubcategoryService,
              private categoryService: CategoryService,
              private productServiec: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.subcatservice.getSubCategoryById(this.id).subscribe(data => {
        this.subcatSource.next(data);
        this.dummy = data;
        this.productServiec.getAllProductsBySubCategoryId(this.id).subscribe(data => {
          console.log('******', data);
          
          this.products = data;
          console.log(data);
          

        }, err => {
          console.log(err);

        });
      }, err => {
        console.log(err);

      })
    });
  }

  openAddProduct() {
    this.dialog.open(AdminaddproductComponent, {
      data: this.id,
      height: '90%',
      width: '70%'
    })
  }

  navigateToProductDetail(id: string) {
    this.router.navigate(['displayproduct', id]);
  }

  activateSubCategory(id: string) {
    this.subcatservice.activateSubCategory(id).subscribe(data => {
      this.subcatSource.next(data);
      this.dummy = data
    }, err => {

    });

  }

}
