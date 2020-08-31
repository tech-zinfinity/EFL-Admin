import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, BehaviorSubject } from 'rxjs';
import { SubCategory } from './../../../entities/sub-category';
import { Category } from './../../../entities/category';
import { CategoryService } from './../../../services/category.service';
import { SubcategoryService } from './../../../services/subcategory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AddSubcategoryComponent } from '../add-subcategory/add-subcategory.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-category-info',
  templateUrl: './category-info.component.html',
  styleUrls: ['./category-info.component.scss']
})
export class CategoryInfoComponent implements OnInit {

  id: string;
  dummy: Category = {};
  categorySource = new BehaviorSubject(this.dummy);
  categoryObs = this.categorySource.asObservable();

  subCategories: SubCategory[] = [];

  constructor(private dialog : MatDialog,
    private route: ActivatedRoute,
    private subcatservice: SubcategoryService,
    private categoryService: CategoryService,
    private router: Router,
    private snackbar: MatSnackBar) { }
    
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.categoryService.getCategoryById(this.id).subscribe(data =>{
        this.categorySource.next(data);
        this.subcatservice.getSubCategoryByCategoryId(this.id).subscribe(tata =>{
          this.subCategories = tata;
        }, err =>{

        });
      }, err=>{

      });
    });
  }

  addSubCategoryDialog(){
    let ref = this.dialog.open(AddSubcategoryComponent,{
      disableClose:true,
      width:'75%',
      data:this.id
    });
    ref.componentInstance.categoryAdded.subscribe(data =>{
      this.subCategories.push(data);
    });
  }

  navigateToSubcategoryInfo(id: string){
    this.router.navigate(['subcategoryinfo', id]);
  }

  activateCategory(){
    this.categoryService.activateCategory(this.id).subscribe(data =>{
      this.snackbar.open('Category Activated Susscessfully', 'close', {duration:2000});
    })
  }
}
