import { SpinnerService } from 'src/app/services/spinner.service';
import { FireStorageService } from './../../../services/fire-storage.service';
import { Product } from './../../../entities/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { SubcategoryService } from './../../../services/subcategory.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminaddproductComponent } from '../adminaddproduct/adminaddproduct.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admindisplayproduct',
  templateUrl: './admindisplayproduct.component.html',
  styleUrls: ['./admindisplayproduct.component.scss']
})
export class AdmindisplayproductComponent implements OnInit {

  id: string;
  dummy: Product = {};
  productSource = new BehaviorSubject(this.dummy);
  productObs = this.productSource.asObservable();

  constructor(private dialog : MatDialog,
    private route: ActivatedRoute,
    private subcatservice: SubcategoryService,
    private categoryService: CategoryService,
    private productServiec: ProductService,
    public storage: FireStorageService,
    private spinner: SpinnerService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.productServiec.getProductById(this.id).subscribe(data =>{
        this.productSource.next(data);
        this.dummy = data;
        if(data.images != null){
          if(data.images.length >0){
            data.tempImages = [];
            data.images.forEach(tt =>{
              this.storage.getDocument(tt).subscribe(t =>{
                data.tempImages.push(t);
                console.log(t);
                
              })
            })
          }
        }
      });
    });
  }

  addProductDialog(){
    this.dialog.open(AdminaddproductComponent,{
      disableClose:true,
      width:'75%',
      height:'600px',
      data: this.id
    });
  }

  activateProduct(id: string){
    this.productServiec.activateProductById(id).subscribe(data =>{
      this.productSource.next(data);
      this.dummy = data;
    }, err =>{
      console.log(err)
    })
  }
  deActivateProduct(id: string){

  }

  fileadded: boolean = false;
  file: File | any = null;
  imgName : string;
  public imageAdded = new EventEmitter<any>();
  img: any;
  fileArray: File[] = [];

  emptyFileContent(){
    this.fileadded =false;
    this.file = null;
  }

  addImg(event: any){
    this.fileadded =true;
    this.file = event.target.files[0];
    this.fileArray.push(this.file);
    this.imgName = this.file.name;
    this.file = null;
  }

  uploadFilesOnBackend(){
    let spin = this.spinner.open();
    this.uploadFilesOnStorage(this.fileArray).subscribe(data =>{
      this.productServiec.addPhotoInProduct(this.id, data).subscribe(t =>{
        spin.close();
        this.productSource.next(t);
        console.log('uploaded Suceesfully');
        this.emptyFileContent();
      });
    });
  }

  uploadFilesOnStorage(files: File[]): Observable<string[]>{
    return new Observable(obs =>{
      let paths: any[] = [];
      files.forEach(file =>{
        this.storage.uploadToStorage(file, 'PRODUCT_COVER_IMAGE').then(obj =>{
          paths.push(obj.metadata.fullPath);
          obs.next(paths);
          obs.complete();
        })
      })
    });
  }

}