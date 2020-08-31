import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Trend } from 'src/app/entities/trend';
import { TrendService } from 'src/app/services/trend.service';
import {  ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner.service';
import { FireStorageService } from 'src/app/services/fire-storage.service';
import { AdminaddtrendComponent } from '../components/adminaddtrend/adminaddtrend.component';
import { Product } from 'src/app/entities/product';


@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss']
})
export class TrendComponent implements OnInit {
 
   
  // dummy: Product = {};
  // productSource = new BehaviorSubject(this.dummy);
  // productObs = this.productSource.asObservable();
  
  trends: Trend[] = [];

  constructor(private dialog: MatDialog,
    private route: ActivatedRoute,
    private spinner: SpinnerService,
    private trendServiec: TrendService,
    public storage: FireStorageService,
    private router: Router) { }



  ngOnInit(): void {
  this.trendServiec.getAllTrends().subscribe(data => { 
    this.trends = data;
    this.trends.forEach(t =>{
      t.productList.forEach(n=>{
        n.tempImages = [];
        if(n.images != null)
        n.images.forEach(path =>{
          this.storage.getDocument(path).subscribe(img =>{
            n.tempImages.push(img)
          })
        })
      })
    })
  },err=>{
    console.log(err);
  });

  }

  addTrendDialog() {
    let ref = this.dialog.open(AdminaddtrendComponent, {
      disableClose: true,
      width: '75%'
    });
    ref.componentInstance.AddTrend.subscribe((data:Trend) =>{      
    console.log(data);
    this.trends.push(data);
    })
  }


}

