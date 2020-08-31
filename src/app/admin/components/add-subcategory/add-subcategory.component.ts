import { SubcategoryService } from './../../../services/subcategory.service';
import { SubCategory } from './../../../entities/sub-category';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.scss']
})
export class AddSubcategoryComponent implements OnInit {

  addSubCategoryForm: FormGroup;
  categoryAdded = new EventEmitter();

  constructor(public dialogRef : MatDialogRef<AddSubcategoryComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public categoryid,
    private categoryservice: CategoryService,
    private snackbar: MatSnackBar,
    private subcatservice: SubcategoryService) { }

  ngOnInit(): void {
    this.addSubCategoryForm = this.fb.group({
      'name':[null, Validators.required],
      'displayName':[null, Validators.required],
      'description':[null, Validators.required]
    });
  }

  closeDialog(){
    this.dialogRef.close();
  }

  addSubCategory(value: SubCategory){
    value.categoryId = this.categoryid;
    this.subcatservice.addSubCategory(value).subscribe(data =>{
      this.dialogRef.close();
      this.categoryAdded.emit(value);
      this.snackbar.open('category added', 'close', {duration: 2000});
    }, err =>{
      console.log(err);
    })
  }

}
