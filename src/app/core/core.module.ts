import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http/http.service';
import { SessionStorageService } from './storage/session-storage.service';
import { TitleService } from './title/title.service';
import { TokenPermissionService } from './token/token-permission.service';
import { WaitService } from './wait/wait.service';
import { WaitComponent } from './wait/wait.component';
import { SexReformPipe } from './pipe/sex-reform.pipe';
import { StatusReformPipe } from './pipe/status-reform.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    SessionStorageService,
    TitleService,
    TokenPermissionService,
    WaitService
  ],
  exports: [
    SexReformPipe,
    StatusReformPipe,
    WaitComponent
  ],
  declarations: [
    SexReformPipe,
    StatusReformPipe,
    WaitComponent
  ]
})
export class CoreModule { }
