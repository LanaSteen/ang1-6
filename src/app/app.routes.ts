import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductsComponent } from './products/products.component';
import { PorductsDetailComponent } from './products/porducts-detail/porducts-detail.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'main', component: MainComponent},
    {path: 'student', component: StudentComponent},
    {path: "users", component: UsersComponent},
    {path: "users/:id", component: UserDetailsComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products/:id', component: PorductsDetailComponent},
    {path: 'products/:id/:category', component: PorductsDetailComponent},
];
