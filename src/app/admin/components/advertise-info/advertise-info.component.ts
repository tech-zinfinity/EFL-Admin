import { Component, OnInit, EventEmitter } from '@angular/core';
import { Advertise } from 'src/app/entities/advertise';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { AdvertisesService } from 'src/app/services/advertises.service';
import { ActivatedRoute } from '@angular/router';
import { FireStorageService } from 'src/app/services/fire-storage.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-advertise-info',
  templateUrl: './advertise-info.component.html',
  styleUrls: ['./advertise-info.component.scss']
})
export class AdvertiseInfoComponent implements OnInit {

  id: string;
  ads: Advertise = {};
  AdvertiseSource = new BehaviorSubject(this.ads);
  AdvertiseObs = this.AdvertiseSource.asObservable();

  ad: Advertise;

  fileadded: boolean = false;
  file: File | any = null;
  imgName: string;
  public imageAdded = new EventEmitter<any>();
  img: any;
  fileArray: File[] = [];


  constructor(
    private adsservice: AdvertisesService,
    private route: ActivatedRoute,
    public storage: FireStorageService,
    private spinner: SpinnerService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      
      this.adsservice.getAdvertiseById(this.id).subscribe((data:Advertise) => {
        console.log(data);
        this.AdvertiseSource.next(data);
        this.ads = data;
        this.ad = data;
        if(data.coverImage != null){
          this.storage.getDocument(data.coverImage).subscribe(img=>{
            data.tempCoverImage = img;
            this.AdvertiseSource.next(data);
            this.ads = data;
            this.ad = data;
          });
        }
      });
    });
  }
  addImg(event: any) {
    this.fileadded = true;
    this.file = event.target.files[0];
    console.log(this.file);
    this.imgName = this.file.name;
  }
  emptyFileContent() {
    this.fileadded = false;
    this.file = null;
  }

  uploadFilesOnStorage(file: File) : Observable<string>{
   return new Observable(obs => {
    this.storage.uploadToStorage(file, 'ADVERTISE_COVER_IMAGE').then(obj =>{
      obs.next(obj.metadata.fullPath);
      obs.complete();
    })
   });
  }

  uploadImagesinBackend(){
    let spin = this.spinner.open();
    this.uploadFilesOnStorage(this.file).subscribe(data=>{
      this.ad.coverImage = data;
      this.adsservice.addPhotoInAdvertise(this.ad).subscribe(t=>{
        spin.close();
        this.ad = t;
        this.emptyFileContent();
      });
    });
  }

  // uploadImageInBackend(){
  //   // open selection box
  //   // add file in file varialble : File
  //   // add that variable in firestore storage 
  //   // get path of added image
  //   // add that path in coverimage of this.ad
  //   // call backend service to add this.ad in backedn

  // }
}
