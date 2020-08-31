import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdvertisesService } from 'src/app/services/advertises.service';
import { Advertise } from 'src/app/entities/advertise';

@Component({
  selector: 'app-add-advertise',
  templateUrl: './add-advertise.component.html',
  styleUrls: ['./add-advertise.component.scss']
})
export class AddAdvertiseComponent implements OnInit {

  addAdvertiseForm: FormGroup;
  AdvertiseAdded = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<AddAdvertiseComponent>,
    private fb: FormBuilder,
    private advertisesaervice: AdvertisesService,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.addAdvertiseForm = this.fb.group({
      'title': [null, Validators.required],
      'productId':[null, Validators.required],
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  addAdvertise(advertise: Advertise) {
    advertise.id = null;
    this.advertisesaervice.addAdvertise(advertise).subscribe(data => {
      this.snackbar.open('Advertise added successfully', 'close', { duration: 2000 });
      this.AdvertiseAdded.emit(data);
      this.dialogRef.close();
    }, err => {
      console.log(err);
      this.dialogRef.close();
    });
  }

}
