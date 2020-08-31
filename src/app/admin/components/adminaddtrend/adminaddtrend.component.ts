import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrendService } from 'src/app/services/trend.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Trend } from 'src/app/entities/trend';
import { Product } from 'src/app/entities/product';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-adminaddtrend',
  templateUrl: './adminaddtrend.component.html',
  styleUrls: ['./adminaddtrend.component.scss']
})
export class AdminaddtrendComponent implements OnInit {

  addTrendForm: FormGroup;
  AddTrend = new EventEmitter();
  productIdList: string[] = [];
 


  constructor(public dialogRef: MatDialogRef<AdminaddtrendComponent>,
    private fb: FormBuilder,
    private trendservice: TrendService,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.addTrendForm = this.fb.group({
      'name':[null, Validators.required],
      'productId':[null]
    });
  }

  addintoproductidList(productId: string){
    this.productIdList.push(productId);
    console.log(this.productIdList);
    
    this.addTrendForm.controls['productId'].reset();
    this.addTrendForm.controls['productId'].clearValidators();
    this.addTrendForm.controls['productId'].updateValueAndValidity();
  }

  closeDialog(){
    this.dialogRef.close();
  }

  addTrend(trend: any){
    let body = {
      id: null,
      name: trend.name,
      productList: this.productIdList
    }

    this.trendservice.addTrend(body).subscribe(data => {
      this.snackbar.open('trend added successfully','close', {duration:2000});
      this.AddTrend.emit(data);
      this.productIdList = [];
      this.dialogRef.close();
    },err => {
      console.log(err);
      this.dialogRef.close();
    });
  }

  
}
