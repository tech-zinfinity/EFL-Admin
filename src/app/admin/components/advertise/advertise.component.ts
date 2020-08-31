import { Component, OnInit, EventEmitter } from '@angular/core';
import { AddAdvertiseComponent } from '../add-advertise/add-advertise.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Advertise } from 'src/app/entities/advertise';
import { AdvertisesService } from 'src/app/services/advertises.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { FireStorageService } from 'src/app/services/fire-storage.service';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.scss']
})
export class AdvertiseComponent implements OnInit {
  advertises: Advertise[] = [];
  id: string;

  
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private adSerice: AdvertisesService,
    public storage: FireStorageService,
    private spinner: SpinnerService
  ) { }

  ngOnInit(): void {
    this.adSerice.getAllAdvertise().subscribe(data => {
      this.advertises = data;
    }, err => {
      console.log(err);
    });
  }

  addadvertiseDialog() {
    let ref = this.dialog.open(AddAdvertiseComponent, {
      disableClose: true,
      width: '75%'
    });
    ref.componentInstance.AdvertiseAdded.subscribe((data: Advertise) => {
      console.log(data);
      this.advertises.push(data);
    });
  }
  

  navigateAdvertiseInfo(id: string) {
    this.router.navigate(['advertiseinfo', id]);
  }
}
