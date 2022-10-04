import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { UserListComponent } from './user-list/user-list.component';
import { ListProductComponent } from './list-product/list-product.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
const ROUTES: Routes = [
  {path:'',component:HomeComponent},
  {path:'index',redirectTo:'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'product',component: ListProductComponent},
  {path:'user',component:UserListComponent},
  {path:'contact',component: ContactComponent},
  {path:'**',component:NotFoundComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
