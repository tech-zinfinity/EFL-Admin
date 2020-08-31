import { CategoryService } from 'src/app/services/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from './../../../entities/category';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  addCategoryForm: FormGroup;
  categoryAdded = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<AddCategoryComponent>,
      private fb: FormBuilder,
      private categoryservice: CategoryService,
      private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.addCategoryForm = this.fb.group({
      'name':[null, Validators.required],
      'displayName':[null, Validators.required],
      'description':[null, Validators.required]
    });
  }

  closeDialog(){
    this.dialogRef.close();
  }

  addCategory(category: Category){
    this.categoryservice.addCategory(category).subscribe(data=>{
      this.snackbar.open('category added successfully', 'close', {duration:2000});
      this.dialogRef.close();
      this.categoryAdded.emit(data);
    }, err=>{
      console.log(err);
      this.dialogRef.close();
    })
  }
}
