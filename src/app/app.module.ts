import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddAdvertiseComponent } from './admin/components/add-advertise/add-advertise.component';
import { MaterialModule } from '././material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCategoryComponent } from './admin/components/add-category/add-category.component';
import { AddSubcategoryComponent } from './admin/components/add-subcategory/add-subcategory.component';
import { AdminHomepageComponent } from './admin/components/admin-homepage/admin-homepage.component';
import { AdminaddproductComponent } from './admin/components/adminaddproduct/adminaddproduct.component';
import { AdminaddtrendComponent } from './admin/components/adminaddtrend/adminaddtrend.component';
import { AdmindisplayproductComponent } from './admin/components/admindisplayproduct/admindisplayproduct.component';
import { AdminproductinfoComponent } from './admin/components/adminproductinfo/adminproductinfo.component';
import { AdvertiseComponent } from './admin/components/advertise/advertise.component';
import { AdvertiseInfoComponent } from './admin/components/advertise-info/advertise-info.component';
import { CategoryComponent } from './admin/components/category/category.component';
import { CategoryInfoComponent } from './admin/components/category-info/category-info.component';
import { SubCategoryComponent } from './admin/components/sub-category/sub-category.component';
import { SubcategoryInfoComponent } from './admin/components/subcategory-info/subcategory-info.component';
import { DisplayenquiryComponent } from './admin/components/displayenquiry/displayenquiry.component';
import { TrendComponent } from './admin/components/trend/trend.component';
import { SpinnerComponent } from './component/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAdvertiseComponent,
    AddCategoryComponent,
    AddSubcategoryComponent,
    AdminHomepageComponent,
    AdminaddproductComponent,
    AdminaddtrendComponent,
    AdmindisplayproductComponent,
    AdminproductinfoComponent,
    AdvertiseComponent,
    AdvertiseInfoComponent,
    CategoryComponent,
    CategoryInfoComponent,
    SubCategoryComponent,
    SubcategoryInfoComponent,
    DisplayenquiryComponent,
    TrendComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ,MaterialModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
