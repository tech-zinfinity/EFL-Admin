import { Component, OnInit } from '@angular/core';
import { EnquiryService } from 'src/app/services/enquiry.service';
import { Enquiry } from 'src/app/entities/enquiry';

@Component({
  selector: 'app-displayenquiry',
  templateUrl: './displayenquiry.component.html',
  styleUrls: ['./displayenquiry.component.scss']
})
export class DisplayenquiryComponent implements OnInit {

  constructor( private enquiryservice: EnquiryService,) { }
  
  enquirys: Enquiry[] = [];

  ngOnInit(): void {
      this.enquiryservice.getAllEnquiry().subscribe(d => {
        this.enquirys = d;
      }, err => {
        console.log(err);
      });
  }

}
