import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from 'src/app/vendor/vendor.component';

const routes: Routes = [
  { path: '', redirectTo: 'vendor', pathMatch: 'full' },
  {
    path: 'vendor',
    component: VendorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
