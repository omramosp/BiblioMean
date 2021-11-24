import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterBookComponent } from './book/register-book/register-book.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { RegisterSupplierComponent } from './supplier/register-supplier/register-supplier.component';
import { ListSupplierComponent } from './supplier/list-supplier/list-supplier.component';
import { UpdateSupplierComponent } from './supplier/update-supplier/update-supplier.component';

import { UserService } from './services/user.service';
import { BookService } from './services/book.service';
import { RoleService } from './services/role.service';
import { SupplierService } from './services/supplier.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { AuthGuard } from './guard/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    RegisterBookComponent,
    ListBookComponent,
    RegisterUserComponent,
    ListUserComponent,
    UpdateUserComponent,
    RegisterRoleComponent,
    ListRoleComponent,
    UpdateRoleComponent,
    RegisterSupplierComponent,
    ListSupplierComponent,
    UpdateSupplierComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [
    UserService,
    BookService,
    RoleService,
    SupplierService,
    TokenInterceptorService,
    AuthGuard,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
