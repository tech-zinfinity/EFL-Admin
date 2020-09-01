import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdvertiseComponent } from './admin/components/add-advertise/add-advertise.component';
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


const routes: Routes = [
    {path: '', component: AdminHomepageComponent, children:[    
      { path: '', component: CategoryComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'subcategory/:id', component: SubCategoryComponent },
      { path: 'category/:id', component: CategoryInfoComponent },
      { path: 'subcategoryinfo/:id', component: SubcategoryInfoComponent, },
      { path: 'displayproduct/:id', component: AdmindisplayproductComponent },
      { path: 'addproduct', component: AdminaddproductComponent },
      { path: 'productdetails1', component: AdminproductinfoComponent },
      { path: 'advertise', component: AdvertiseComponent},
      { path: 'addadvertise', component: AddAdvertiseComponent},
      { path: 'advertiseinfo/:id' , component: AdvertiseInfoComponent},
      { path: 'trend' , component: TrendComponent},
      { path: 'enquiry' , component: DisplayenquiryComponent}
    ]},      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
