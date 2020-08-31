import { Category } from './../../../entities/category';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];

  constructor(private dialog: MatDialog,
    private categoryservice: CategoryService,
    private router: Router) { }

  ngOnInit(): void {
    this.categoryservice.getAllCategories().subscribe(d => {
      this.categories = d;
    }, err => {
      console.log(err);
    });

  }

  addCategoryDialog() {
    let ref = this.dialog.open(AddCategoryComponent, {
      disableClose: true,
      width: '75%'
    });
    ref.componentInstance.categoryAdded.subscribe((data: Category) => {
      this.categories.push(data);
      this.router.navigate(['category', data.id])
    })
  }

  viewAllSubCategories(id: string) {
    this.router.navigate(['category', id])
  }
}

