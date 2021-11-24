import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { RegisterBookComponent } from './book/register-book/register-book.component';
import { LoginComponent } from './home/login/login.component';
import { ListSupplierComponent } from './supplier/list-supplier/list-supplier.component';
import { RegisterSupplierComponent } from './supplier/register-supplier/register-supplier.component';
import { UpdateSupplierComponent } from './supplier/update-supplier/update-supplier.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'listUser',
    component: ListUserComponent
  },
  {
    path: 'listRole',
    component: ListRoleComponent
  },
  {
    path: 'registerRole',
    component: RegisterRoleComponent
  },
  {
    path: 'registerUser',
    component: RegisterUserComponent
  },
  {
    path: 'updateRole',
    component: UpdateRoleComponent
  },
  {
    path: 'updateUser',
    component: UpdateUserComponent
  },
  {
    path: 'listBook',
    component: ListBookComponent
  },
  {
    path: 'registerBook',
    component: RegisterBookComponent
  },
  {
    path: 'listSupplier',
    component: ListSupplierComponent
  },
  {
    path: 'registerSupplier',
    component: RegisterSupplierComponent
  },
  {
    path: 'updateSupplier',
    component: UpdateSupplierComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
