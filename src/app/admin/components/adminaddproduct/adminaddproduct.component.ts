import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Pricing } from './../../../entities/pricing';
import { Product } from './../../../entities/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-adminaddproduct',
  templateUrl: './adminaddproduct.component.html',
  styleUrls: ['./adminaddproduct.component.scss']
})
export class AdminaddproductComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<AdminaddproductComponent>,
    @Inject(MAT_DIALOG_DATA) public subcategoryid,
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private snackbar: MatSnackBar
    ) { }

  addProductForm: FormGroup;

  ngOnInit(): void {
    console.log(this.subcategoryid);
    
    this.addProductForm = this.fb.group({
      'name':[null, Validators.required],
      'displayName':[null, Validators.required],
      'description':[null, Validators.required],
      'tags':[null, Validators.required],
      'cost':[null, Validators.required],
      'margin':[null,Validators.required],
      'unit':[null, Validators.required],
      'cgst':[null, Validators.required],
      'igst':[null, Validators.required],
      'sgst':[null, Validators.required],
      'fssiLicenceNo':[null, Validators.required],
      'location':[null, Validators.required],
      'price':[null, Validators.required],
      'offerPrice':[null, Validators.required],
      'shelfLife':[null, Validators.required],
      'rating':[null, Validators.required]
    });
  }

  closeDialog(){
    this.dialogRef.close();
  }

  addProduct(value: ProductShortForm){
    let prod: Product = {
      id: null,
      name: value.name,
      displayName: value.displayName,
      description: value.description,
      tags: [value.tags],
      searchString: value.tags.toLowerCase(),
      pricing:{
        id: null,
        cost: value.cost,
        margin: value.margin,
        unit: value.unit,
        taxInfo: {
          cgst: value.cgst,
          sgst: value.sgst,
          igst: value.igst
        },
        price:value.price,
        offerPrice:value.offerPrice
      },
      subCategoryId: this.subcategoryid,
      rating: value.rating,
      fssiLicenceNo: value.fssiLicenceNo,
      location: value.location,
      shelfLife: value.shelfLife,
    }

    console.log(prod);
    
    this.productService.addProduct(prod).subscribe(data =>{
      this.dialogRef.close();
      this.snackbar.open('Product Added Successfully', 'close', {duration: 2000});
      this.navigateToProductDetail(data.id);
    }, err=>{
      console.log(err);
      
    });
  }

  navigateToProductDetail(id: string){
    this.router.navigate(['displayproduct', id]);
  }
}


export interface ProductShortForm{
  name?:string,
  displayName?:string,
  description?:string,
  tags?:string,
  fssiLicenceNo?:string,
  cost?:number,
  margin?:number,
  unit?:string,
  cgst?:number,
  igst?:number,
  sgst?:number,
  subCategoryId?:string,
  location?:string,
  price?:number,
  offerPrice?:number,
  shelfLife?:string,
  rating?:number
}
