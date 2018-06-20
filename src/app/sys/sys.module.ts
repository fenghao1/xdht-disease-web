import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SysRoutingModule } from './sys-routing.module';
import { SysComponent } from './sys.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { RoleManageComponent } from './role-manage/role-manage.component';
import { MenuManageComponent } from './menu-manage/menu-manage.component';
import { CoreModule } from '../core/core.module';
import { SimpleDataTableModule } from '../simple-data-table/simple-data-table.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyManageComponent } from './company-manage/company-manage.component';
import { EmployeeManageComponent } from './employee-manage/employee-manage.component';
import { CompanyOfficeManageComponent } from './company-office-manage/company-office-manage.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { MenuChooseComponent } from './menu-choose/menu-choose.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoleChooseComponent } from './role-choose/role-choose.component';

import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmpoiyeeInfoComponent } from './empoiyee-info/empoiyee-info.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    SimpleDataTableModule,
    SysRoutingModule
  ],
  entryComponents: [
    UserEditComponent,
    RoleEditComponent,
    MenuChooseComponent,
    MenuEditComponent,
    CompanyEditComponent,
    RoleChooseComponent
  ],
  declarations: [
    MenuManageComponent,
    MenuEditComponent,
    RoleManageComponent,
    RoleEditComponent,
    SysComponent,
    UserEditComponent,
    UserManageComponent,
    CompanyManageComponent,
    EmployeeManageComponent,
    CompanyOfficeManageComponent,
    CompanyEditComponent,
    MenuChooseComponent,
    RoleChooseComponent,
    CompanyEditComponent,
    EmployeeEditComponent,
    EmpoiyeeInfoComponent
  ]
})
export class SysModule { }
